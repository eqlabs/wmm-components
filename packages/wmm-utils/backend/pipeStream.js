import fs from 'fs'
import {spend, balance} from './accounts.js'
import {sleep} from '../backend.js'

/**
 * Creates readStream from a file.
 * 'highWaterMark' determines the size of data (and payment) chunks.
 * For audio streaming it's recommended to keep it small (2**13),
 * since big chunks can cause errors in payment calculation.
 * On the other hand for video streaming bigger chunks (e.g. 2**16),
 * can speed up the stream loading.
 * @param {string} path to the file
 */
export function createStream(fromPath, socket) {
  const stream = fs.createReadStream(fromPath, {
    highWaterMark: 2**13
  })
  socket.on('close', () => stream.close())
  return stream
}

export function prepareStreamCtx(ctx, meta) {
  ctx.set('Content-Length', meta.fileSize)
  ctx.set('Content-Type', `${meta.mime}`)
  ctx.socket.setTimeout(2*60*1000, () => console.log('socket TIMEDOUT')) // make file socket wait for 2 minutes before breaking (when waiting for payments)
}

export function pipeMediaIntoStream(meta, stream, userId) {
  // stream.on('end', () => { console.log('stream ended') })
  stream.on('readable', () => {
    if (stream.readableLength) {
      pipeStream(meta, stream, userId)
    } else {
      stream.read() // finalize empty steam
      stream.close()
    }
  })
}

async function pipeStream(meta, stream, userId) {
  while (stream.readableLength && !stream.closed) {
    const chunkPrice = stream.readableLength * meta.pricePerByte
    if (spend(userId, chunkPrice)) {
      stream.read()
      // console.log(userId.slice(0,4) + ' balance after spent', balance(userId))
    } else {
      console.log(`${userId.slice(0,4)} unable to spend enough (${balance(userId).toFixed(8)} / ${chunkPrice.toFixed(8)})`)
      await sleep(400)
    }
  }
}