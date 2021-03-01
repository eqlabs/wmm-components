import Koa from 'koa'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import bodyParser from 'koa-body-parser'
import cors from '@koa/cors'
import path from 'path'

import * as config from './public/config.js'
const { mediaPath, receiptService } = config

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

const app = new Koa()
const router = koaRouter()
app.use(cors())

// WMM-UTILS

import fs from 'fs'

const texts = {} // name => [paragrahps]

;(async function() {
  const dir = await fs.promises.readdir(mediaPath)
  for (const file of dir) {
    const cont = await fs.promises.readFile(mediaPath+file)
    texts[file] = parseTextFile(await cont.toString())
  }
})()

function parseTextFile(text) {
  // could be markdown?
  return text.split(/\n\n+/g)
}

// /WMM-UTILS

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, receiptService)
})

router.get('/media/:file/:paragraph', async ctx => {
  // TODO add accounting
  const {file, paragraph} = ctx.params
  var p
  if (!texts[file]) {
    ctx.response.status = 404
    p = `No text '${file}' found.`
  } else {
    p = texts[file][parseInt(paragraph)]
  }
  if (!p) {
    ctx.response.status = 204
    p = `No paragraph ${paragraph} found.`
  }
  ctx.body = p
})


app
  .use(bodyParser())
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname+'/public', '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))

app.listen(process.env.PORT || 3008)