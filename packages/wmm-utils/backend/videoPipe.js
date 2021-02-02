import fs from 'fs'
import {spend, balance} from './accounts.js'
import {sleep} from '../backend.js'

export function prepareStreamCtx(ctx, meta) {
  ctx.set('Content-Length', meta.fileSize)
  ctx.set('Content-Type', `video/${meta.type}`)
  ctx.socket.setTimeout(10*60*1000) // make video socket wait for 10 minutes before breaking (when waiting for payments)
}

export function createStream(fromPath) {
  return fs.createReadStream(fromPath, {
    highWaterMark: 64 * 1024 // default 64 * 1024
  })
}

export function pipeVideoIntoStream(meta, stream, config, userId) {
  stream.on('end', () => {
    console.log('stream ended')
  })

  stream.on('readable', () => {
    pipeVideo(meta, stream, config, userId)
  })
}

/* From node.js docs:
  "developers should choose one of the methods of consuming data and should
  never use multiple methods to consume data from a single stream.
  Specifically, using a combination of on('data'), on('readable'), pipe(),
  or async iterators could lead to unintuitive behavior."
*/

async function pipeVideo(meta, stream, config, userId) {
  validateConfig(config)
  console.log('pipeVideo') // TEMP
  while (stream.readableLength) {
    if (spend(userId, pricePerBytes(stream.readableLength, meta, config))) {
      stream.read()
      console.log('balance after spent', balance(userId))
    } else {
      console.log(`unable to spend enough (${balance(userId).toFixed(4)} / ${pricePerBytes(stream.readableLength, meta, config).toFixed(4)})`)
      await sleep(400)
    }
  }
}

function pricePerBytes(bytes,
                       {seconds, fileSize},
                       {pricePerMB, pricePerMinute}) {
  if (pricePerMB)
    return bytes * pricePerMB / 10**6
  if (!pricePerMinute)
    throw Error("pricePerMinute or pricePerMB required in configs")

  const pricePerSecond = pricePerMinute/60,
        bytesInSecond = fileSize / seconds,
        pricePerByte = pricePerSecond / bytesInSecond
  return pricePerByte * bytes
}

function validateConfig({pricePerMB, pricePerMinute}) {
  if (pricePerMB && pricePerMinute)
    throw Error("Price can be defined only in minutes or in megabytes, set the other one as null.")
}