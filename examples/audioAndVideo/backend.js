import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-body-parser'
import mount from 'koa-mount'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import path from 'path'
import * as config from './config.js'
const { mediaPath, allowCORS, receiptService, newAccountBalance } = config
import { initStreamingMeta, getMeta,
         verifyReceipt,
         prepareStreamCtx, createStream, pipeMediaIntoStream,
         setInitialBalance } from 'wmm-utils'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

// Initialize libraries
setInitialBalance(newAccountBalance)
initStreamingMeta(path.resolve(__dirname, mediaPath) + '/')

const app = new Koa()
const router = koaRouter()

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, receiptService)
})

router.get('/media/:file', async ctx => {
  let mediaMeta = await getMeta(ctx.params.file)
  prepareStreamCtx(ctx, mediaMeta)
  const stream = createStream(mediaMeta.fullPath)
  pipeMediaIntoStream(mediaMeta, stream, config, ctx.query.userId)
  ctx.body = stream
})

if (allowCORS) app.use(cors())

app
  .use(bodyParser())
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname, '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))


app.listen(config.WMM_AUDIO_VIDEO_PORT)
