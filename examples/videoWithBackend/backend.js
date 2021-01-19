import Koa from 'koa'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import bodyParser from 'koa-body-parser'
import path from 'path'
import * as config from './config.js'
const { videoPath, publicFolders } = config
import { getVideoMeta, initVideoMeta,
         verifyReceipt,
         prepareStreamCtx, createStream, pipeVideoIntoStream  } from 'wmm-utils'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

initVideoMeta(config)

const app = new Koa()
const router = koaRouter()

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, config)
})

router.get('/videoFile', async ctx => {
  let vMeta = await getVideoMeta(videoPath)
  prepareStreamCtx(ctx, vMeta)
  const stream = createStream(vMeta.fullPath)
  console.log('pricePerMB', ''+config.pricePerMB)
  pipeVideoIntoStream(vMeta, stream, config, ctx.query.userId)
  ctx.body = stream
})

// const clientFiles = ['index.js', 'client.js']

app
  .use(bodyParser())
  .use(router.routes())
  // serve 'client' and 'common' folders to frontend
  .use(serve(path.resolve(__dirname, '.')))
  // .use(serve(path.resolve(__dirname, './common')))

// static folders from configs
for (let [folder, folderPath] of Object.entries(publicFolders)) {
  app.use(mount('/'+folder, serve(path.resolve(__dirname, folderPath))))
}

app.listen(process.env.PORT || 3009)