/**
 * Reads and serve video and audio files meta information.
 */

import fs from 'fs'
import videoDuration from "get-video-duration"
import mime from 'mime-types'

const { getVideoDurationInSeconds } = videoDuration

const fileMeta = new Map // filePath => metaObject
var metaRead // a promise indicating if meta of all files has been read

/**
 * Get files  meta info.
 * @param {string} fileName - file name
 */
export async function getMeta(fileName) {
  if (!metaRead)
    throw Error("call initMeta before calling getMeta")
  await metaRead
  return fileMeta.get(fileName)
}

export const initStreamingMeta = mediaPath =>
  metaRead = readMeta(mediaPath)

// TODO: read all videos in given folder - now just 'videoPath'
async function readMeta(mediaPath) {
  console.log('mediaPath', mediaPath)
  const files = await fs.promises.readdir(mediaPath)
  console.log('dir', files)
  const allRead = files.map(async function(file) {
    const fullMediaPath = mediaPath + file
    const stats = await fs.promises.stat(fullMediaPath)
    const seconds = await getVideoDurationInSeconds(fullMediaPath)
    console.log(file + ' duration in seconds', seconds)

    const type = file.split('.')[1],  // e.g. 'mp4'
          meta = {
            seconds,
            fullPath: fullMediaPath,
            type: type,
            mime: mime.lookup(type),
            fileSize: stats.size,
          }
    // console.log('price of full film', pricePerBytes(meta.fileSize, meta))
    fileMeta.set(file, meta)
  })
  await Promise.all(allRead)
}

export function prepareStreamCtx(ctx, meta) {
  ctx.set('Content-Length', meta.fileSize)
  ctx.set('Content-Type', `${meta.mime}`)
  ctx.socket.setTimeout(10*60*1000) // make file socket wait for 10 minutes before breaking (when waiting for payments)
}