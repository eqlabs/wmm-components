import Koa from 'koa'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import bodyParser from 'koa-body-parser'
import cors from '@koa/cors'
import path from 'path'
import * as config from './config.js'
const { resourcesPath, allowCORS } = config
import { initMeta, getMeta,
         verifyReceipt,
         prepareStreamCtx, createStream, pipeMediaIntoStream  } from 'wmm-utils'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

initMeta(path.resolve(__dirname, config.resourcesPath) + '/')

const app = new Koa()
const router = koaRouter()

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, config)
})

router.get('/media/:file', async ctx => {
  let mediaMeta = await getMeta(ctx.params.file)
  prepareStreamCtx(ctx, mediaMeta)
  const stream = createStream(mediaMeta.fullPath)
  // console.log('pricePerMB', ''+config.pricePerMB)
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


app.listen(process.env.PORT || 3009)