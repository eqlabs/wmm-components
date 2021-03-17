import fs from 'fs'
import {spend, balance} from './accounts.js'
import {sleep} from '../backend.js'

/**
 * Creates readStream from a file.
 * Change highWaterMark to change the size of data chuncks being sent,
 * which also changes the frequency of payments.
 * Smaller highWaterMark results in more frequent, but smaller data chucks and payments.
 * @param {string} path to the file
 */
export function createStream(fromPath, socket) {
  const stream = fs.createReadStream(fromPath, {
    highWaterMark: 12 * 1024
  })
  socket.on('close', () => stream.close())
  return stream
}

export function pipeMediaIntoStream(meta, stream, userId) {
  stream.on('end', () => {
    console.log('stream ended')
  })
  stream.on('readable', () => {
    pipeStream(meta, stream, userId)
  })
}

async function pipeStream(meta, stream, userId) {

  while (stream.readableLength && !stream.closed) {
    const chunkPrice = stream.readableLength * meta.pricePerByte
    if (spend(userId, chunkPrice)) {
      stream.read()
      console.log(userId.slice(0,4) + ' balance after spent', balance(userId))
    } else {
      console.log(`${userId.slice(0,4)} unable to spend enough (${balance(userId).toFixed(4)} / ${chunkPrice.toFixed(4)})`)
      await sleep(400)
    }
  }
}