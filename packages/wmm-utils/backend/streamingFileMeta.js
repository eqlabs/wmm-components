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
 * Get cached file meta info. Includes following properties:
 * seconds, fullPath, type, mime, fileSize and pricePerByte.
 * @param {string} fileName - file name
 */
export async function getMeta(fileName) {
  if (!metaRead)
    throw Error("call initMeta before calling getMeta")
  await metaRead
  return fileMeta.get(fileName)
}

/**
 * Reads all media files in *mediaPath* and caches their meta information,
 * such has fileSize, media length in seconds, pricePerByte, etc.
 * @param {string} mediaPath path to folder where media files are stored.
 * @param {object} config including *pricePerMinute* or *pricePerMB* property.
 * @returns Promise indicating if meta information has been read.
 */
export function initStreamingMeta(mediaPath, config) {
  metaRead = readMeta(mediaPath, config)
}

// TODO: read all videos in given folder - now just 'videoPath'
async function readMeta(mediaPath, config) {
  validateConfig(config)
  const files = await fs.promises.readdir(mediaPath)
  const allRead = files.map(async function(file) {
    if (file.slice(0,1) == '.')
      return // skip .DS_Store etc
    const fullMediaPath = mediaPath + file
    const stats = await fs.promises.stat(fullMediaPath)
    const seconds = await getVideoDurationInSeconds(fullMediaPath)
    const type = file.split('.')[1],  // e.g. 'mp4'
          meta = {
            seconds,
            fullPath: fullMediaPath,
            type: type,
            mime: mime.lookup(type),
            fileSize: stats.size,
            pricePerByte: pricePerByte(seconds, stats.size, config),
          }
    fileMeta.set(file, meta)
  })
  await Promise.all(allRead)
}

function pricePerByte(seconds, fileSize,
                      {pricePerMB, pricePerMinute}) {
  if (pricePerMB)
    return pricePerMB / 10**6
  if (!pricePerMinute)
    throw Error("pricePerMinute or pricePerMB required in configs")

  const pricePerSecond = pricePerMinute/60,
        bytesInSecond = fileSize / seconds,
        pricePerByte = pricePerSecond / bytesInSecond
  return pricePerByte
}

function validateConfig({pricePerMB, pricePerMinute}) {
  if (pricePerMB && pricePerMinute)
    throw Error("Price can be defined only in minutes or in megabytes, set the other one as null.")
}