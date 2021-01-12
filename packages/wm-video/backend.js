import Koa from 'koa'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import bodyParser from 'koa-body-parser'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import videoDuration from "get-video-duration"
const {getVideoDurationInSeconds} = videoDuration
import {sleep, deposit, spend, balance} from 'wm-utils'
import { receiptService, videoPath, publicFolders,
         pricePerMB, pricePerMinute } from './common/config.js'

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

if (pricePerMB && pricePerMinute)
  throw Error("Price can be difned only in minutes or in megabytes, set the other one as null.")

const assetScale = 9 // make sure this matches the assetScale used by client and recipe service

const app = new Koa()
const router = koaRouter()

router.post('/verifyReceipt', async ctx => {
  const {amount, paymentPointer, receipt, requestId, userId} = ctx.request.body
  if (assetScale !== ctx.request.body.assetScale)
    throw Error("unexpected assetScale")
  const spspEndpoint = decodeURIComponent(
    paymentPointer.replace(receiptService,'')
  )
  let receiptRes = await fetch(receiptService + 'verify', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: receipt
  })
  receiptRes = await receiptRes.text()
  try {
    receiptRes = JSON.parse(receiptRes)
  } catch (err) {
    console.error("Failed to parse receiptRes service response: ", receiptRes)
    return ctx.body = receiptRes
  }
  if (spspEndpoint != receiptRes.spspEndpoint) {
    throw Error("spspEndpoint sent by client and receipt service don't match.")
  }
  const serviceAmount = parseInt(receiptRes.amount)
  if (parseInt(amount) > serviceAmount) {
    // NOTE: the amount sent be recipe service can be bigger than the one sent by client,
    // since the recipe service combines the amount of all payments before previous verification.
    throw Error("Amount send by client is bigger than the one from recipe service.")
  }
  ctx.body = deposit(userId, serviceAmount / 10**assetScale)
})

/* From node.js docs:
  "developers should choose one of the methods of consuming data and should
  never use multiple methods to consume data from a single stream.
  Specifically, using a combination of on('data'), on('readable'), pipe(),
  or async iterators could lead to unintuitive behavior."
*/

async function pipeVideo(stream, userId, vMeta) {
  console.log('pipeVideo') // TEMP
  while (stream.readableLength) {
    if (spend(userId, pricePerBytes(stream.readableLength, vMeta))) {
      stream.read()
      console.log('balance after spent', balance(userId))
    } else {
      console.log(`unable to spend enough (${balance(userId).toFixed(4)} / ${pricePerBytes(stream.readableLength, vMeta).toFixed(4)})`)
      await sleep(400)
    }
  }
}

function pricePerBytes(bytes, {seconds, fileSize}) {
  if (pricePerMB)
    return bytes * pricePerMB / 10**6
  if (!pricePerMinute)
    throw Error("pricePerMinute or pricePerMB required in configs")

  const pricePerSecond = pricePerMinute/60,
        bytesInSecond = fileSize / seconds,
        pricePerByte = pricePerSecond / bytesInSecond
  return pricePerByte * bytes
}

const videoMeta = new Map

// TODO: read all videos in given folder - now just 'videoPath'
async function readVideoMeta(){
  const fullVideoPath = path.resolve(__dirname, videoPath)
  const stats = await fs.promises.stat(fullVideoPath)
  const seconds = await getVideoDurationInSeconds(fullVideoPath)
  const meta = {
    seconds,
    fullPath: fullVideoPath,
    type: videoPath.split('.')[1], // e.g. 'mp4'
    fileSize: stats.size,
  }
  console.log('price of full film', pricePerBytes(meta.fileSize, meta))
  videoMeta.set(videoPath, meta)
  return meta
}

/* Debug streams
const streamDebug = []

function printStreams() {
  streamDebug.forEach((s) => {
    console.log('s ended', s.closed)
  })
}
*/

router.get('/videoFile', async ctx => {
  let vMeta = videoMeta.get(videoPath)
  if (!vMeta)
    vMeta = await readVideoMeta()

  ctx.set('Content-Length', vMeta.fileSize);
  ctx.set('Content-Type', `video/${vMeta.type}`);
  ctx.socket.setTimeout(10*60*1000) // make video socket wait for 10 minutes before breaking (when waiting for payments)

  const stream = fs.createReadStream(vMeta.fullPath, {
    highWaterMark: 64 * 1024 // default 64 * 1024
  })

  // streamDebug.push(stream)
  // printStreams()

  stream.on('end', () => {
    console.log('stream end')
  })

  stream.on('readable', () => {
    pipeVideo(stream, ctx.query.userId, vMeta)
  })
  ctx.body = stream
})

app
  .use(bodyParser())
  .use(router.routes())
  // serve 'client' and 'common' folders to frontend
  .use(serve(path.resolve(__dirname, './client')))
  .use(serve(path.resolve(__dirname, './common')))

// static folders from configs
for (let [folder, folderPath] of Object.entries(publicFolders)) {
  app.use(mount('/'+folder, serve(path.resolve(__dirname, folderPath))))
}

app.listen(process.env.PORT || 3009)