import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-body-parser'
import mount from 'koa-mount'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import path from 'path'
import range from 'koa-range'
import * as config from './config.js'
const { mediaPath, allowCORS, receiptService, paywallThreshold } = config
import { initStreamingMeta, getMeta,
         verifyReceipt,
         prepareStreamCtx, createStream, pipeMediaIntoStream,
         setInitialBalance } from 'wmm-utils'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

// Initialize libraries
setInitialBalance(paywallThreshold)
initStreamingMeta(path.resolve(__dirname, mediaPath) + '/', config)

const app = new Koa()
const router = koaRouter()

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, receiptService)
})

router.get('/media/:file', async ctx => {
  let mediaMeta = await getMeta(ctx.params.file)
  prepareStreamCtx(ctx, mediaMeta)
  const stream = createStream(mediaMeta.fullPath, ctx.socket)
  pipeMediaIntoStream(mediaMeta, stream, ctx.query.userId)
  ctx.body = stream
})

/**
 * Pass config.js to frontend with parsed ENV variables.
 * Could also filter backend specific configs from the frontend.
 */
router.get('/config.js', ctx => {
  ctx.set('Content-Type', `application/javascript`)
  ctx.body = Object.entries(config).map(([key, val]) =>
    `export const ${key} = ${typeof val == 'string' ? '"'+val+'"' : val}`
  ).join('\n')
})

if (allowCORS) app.use(cors())

app
  // body parser is used when parsing recipes that the browser POST's
  .use(bodyParser())
  // byte-range's allows browser to request specific parts of the media without
  // loading the whole file. This is also important for the accounting to work properly.
  .use(range)
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname+'/public', '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))


app.listen(config.WMM_AUDIO_VIDEO_PORT)
