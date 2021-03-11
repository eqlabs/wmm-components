// Koa
import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-body-parser'
import mount from 'koa-mount'
import koaRouter from 'koa-router'
import serve from 'koa-static'
// Node.js
import path from 'path'
// App
import {
  spend, balance, setInitialBalance,  // accounting
  verifyReceipt,                      // receipts
  initTexts, texts,                   // text file contents and meta
  sleep,                              // general
} from 'wmm-utils'
import * as config from './config.js'
const { mediaPath, pricePerWord, receiptService, paywallThreshold } = config

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))


// Initialize libraries
setInitialBalance(paywallThreshold)
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

app
  .use(bodyParser())
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname+'/public', '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))

app.listen(process.env.WMM_TEXT_PORT || 3008)