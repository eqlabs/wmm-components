import Koa from 'koa'
const app = new Koa()
import koaRouter from 'koa-router'
const router = koaRouter()
import serve from 'koa-static'
import mount from 'koa-mount'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))
import bodyParser from 'koa-body-parser'
import fs from 'fs'
import stream from 'stream'
import path from 'path'
import fetch from 'node-fetch'

import {sleep} from 'wm-utils'


import config  from './config.js'

let totalReceived = 0

router.post('/verifyReceipt', async ctx => {
  const {amount, paymentPointer, receipt} = ctx.request.body
  const spspEndpoint = decodeURIComponent(
    paymentPointer.replace(config.receiptService,'')
  )
  let res = await fetch(config.receiptService + 'verify', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: receipt
  })
  res = await res.text()
  try {
    res = JSON.parse(res)
  } catch (err) {
    console.error("Failed to parse receipt service response: ", res)
    return ctx.body = res
  }
  if (spspEndpoint != res.spspEndpoint) {
    throw Error("spspEndpoint sent by client and receipt service don't match.")
  }
  const serviceAmount = parseInt(res.amount)
  if (parseInt(amount) > serviceAmount) {
    // NOTE: the amount sent be recipe service can be bigger than the one sent by client,
    // since the recipe service combines the amount of all payments before previous verification.
    throw Error("Amount send by client is bigger than the one from recipe service.")
  }
  totalReceived += serviceAmount
  ctx.body = totalReceived
})

function streamLoaded(stream) {
  while (stream.readableLength) { stream.read() }
}

/*
  "developers should choose one of the methods of consuming data and should
  never use multiple methods to consume data from a single stream.
  Specifically, using a combination of on('data'), on('readable'), pipe(),
  or async iterators could lead to unintuitive behavior."
*/

router.get('/videoFile', async ctx => {
  const vidoPath = path.resolve(__dirname, config.videoPath)
  const fileSize = fs.statSync(vidoPath).size

  ctx.set('Content-Length', fileSize);
  ctx.set('Content-Type', 'video/mp4');

  const stream = fs.createReadStream(vidoPath)

  stream.on('readable', function() {
    console.log('IS SAME', this === stream)
    if (Math.random() <= 0.1) {
      console.log(`readable ${stream.bytesRead}/${fileSize}`)
      streamLoaded(stream)
    } else {
      console.log('sleeping for 2 secs')
      sleep(2000).then(() => {
        streamLoaded(stream)
        console.log('NOTE: too long pause can cause the client video to stop - should send message to continue play to client')
      })
    }
  })
  ctx.body = stream
})


app
  // .use(monetizer.koa())
  .use(bodyParser())
  .use(router.routes())
  // .use(router.allowedMethods())
  .use(serve(path.resolve(__dirname, './client'))) // root static folder

// static folders from configs
for (let [folder, folderPath] of Object.entries(config.publicFolders)) {
  app.use(mount('/'+folder, serve(path.resolve(__dirname, folderPath))))
}

app.listen(process.env.PORT || 3009)