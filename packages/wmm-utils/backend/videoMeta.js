/**
 * Reads and server video meta information.
 * NOTE: call initVideoMeta must be called before getVideoMeta.
 */

import path from 'path'
import fs from 'fs'
import videoDuration from "get-video-duration"
const {getVideoDurationInSeconds} = videoDuration
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

const videoMeta = new Map // filePath => metaObject
var videoMetaRead // a promise indicating if meta of all videos has been read

export async function getVideoMeta(path) {
  await videoMetaRead
  return videoMeta.get(path)
}

export const initVideoMeta = config =>
  videoMetaRead = readVideoMeta(config)

// TODO: read all videos in given folder - now just 'videoPath'
async function readVideoMeta({videoPath}){
  const fullVideoPath = path.resolve(__dirname, videoPath)
  const stats = await fs.promises.stat(fullVideoPath)
  const seconds = await getVideoDurationInSeconds(fullVideoPath)
  const meta = {
    seconds,
    fullPath: fullVideoPath,
    type: videoPath.split('.')[1], // e.g. 'mp4'
    fileSize: stats.size,
  }
  // console.log('price of full film', pricePerBytes(meta.fileSize, meta))
  videoMeta.set(videoPath, meta)
  return meta
}



