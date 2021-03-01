import fs from 'fs'
import {spend, balance} from './accounts.js'
import {sleep} from '../backend.js'

/**
 * Creates readStream from a file.
 * @param {sting} path to the file
 */
export function createStream(fromPath) {
  return fs.createReadStream(fromPath, {
    highWaterMark: 64 * 1024 // default 64 * 1024
  })
}

export function pipeMediaIntoStream(meta, stream, config, userId) {
  stream.on('end', () => {
    console.log('stream ended')
  })
  stream.on('readable', () => {
    pipeStream(meta, stream, config, userId)
  })
}

async function pipeStream(meta, stream, config, userId) {
  validateConfig(config)
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