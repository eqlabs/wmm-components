// Koa
import Koa from 'koa'
import koaRouter from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import bodyParser from 'koa-body-parser'
import cors from '@koa/cors'

// Node.js
import path from 'path'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))

// App
import { mediaPath, receiptService, pricePerWord } from './public/config.js'
import {
  verifyReceipt,    // receipts
  spend, balance,   // accounting
  initTexts, texts, // text file contents and meta
  sleep             // general
} from 'wmm-utils'

initTexts(path.resolve(__dirname, mediaPath) + '/')

const app = new Koa()
const router = koaRouter()
app.use(cors())

router.post('/verifyReceipt', async ctx => {
  ctx.body = await verifyReceipt(ctx.request.body, receiptService)
})

router.get('/media/:file/:pInd', async ctx => {
  let {file, pInd} = ctx.params
  pInd = parseInt(pInd)
  if (!texts[file]) {
    ctx.response.status = 404
    return ctx.body = `No text '${file}' found.`
  }
  var {paragraphs, wordCount} = texts[file]
  if (!paragraphs[pInd]) {
    ctx.response.status = 204
    return ctx.body = `No paragraph ${pInd} found.`
  }
  // accounting
  const cost = pricePerWord * wordCount[pInd],
        {userId} = ctx.query
  while (!spend(userId, cost)) {
    console.log(`costs too much ${cost} > ${balance(userId)}`)
    await sleep(400)
  }
  console.log(`payed ${cost}!`)
  ctx.body = paragraphs[pInd]
})


app
  .use(bodyParser())
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname+'/public', '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))

app.listen(process.env.PORT || 3008)