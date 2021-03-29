// Koa
import cors from '@koa/cors'
import Koa from 'koa'
import bodyParser from 'koa-body-parser'
import mount from 'koa-mount'
import koaRouter from 'koa-router'
import serve from 'koa-static'
// Node.js
import path from 'path'
import fs from 'fs'
// App
import {
  spend, balance, setPaywallThreshold, // accounting
  verifyReceipt,                       // receipts
  initTexts, texts,                    // text file contents and meta
  sleep,                               // general
} from 'wmm-utils'
import * as config from './config.js'
const { mediaPath, pricePerWord, receiptService, paywallThreshold } = config

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))


// Initialize libraries
setPaywallThreshold(paywallThreshold)
const mediaDir = initTexts(path.resolve(__dirname, mediaPath) + '/')

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
    if (ctx.socket.destroyed)
      return ctx.body = 'disconnected'
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

router.get('/mediaFiles', async ctx => {
  ctx.set('Content-Type', `application/javascript`)
  ctx.body = 'export default ' + JSON.stringify(await mediaDir)
})

/**
 * Serve styles that are also used in docs and audioAndVideo -example.
 */
router.get('/styles.css', async ctx => {
  ctx.set('Content-Type', `text/css`)
  const {readFile} = fs.promises,
        base = await readFile("../../docs/node_modules/@docusaurus/core/lib/webpack/mincss_clean.css"),
        custom = await readFile("../../docs/src/css/custom.css")
  ctx.body = base + "\n\n" + custom
})


app
  .use(bodyParser())
  .use(router.routes())
  // serve root folder for index.html:
  .use(serve(path.resolve(__dirname+'/public', '.')))
  // serve packages as static assets:
  .use(mount('/packages', serve(path.resolve(__dirname + '/../../packages'))))

const port = process.env.WMM_TEXT_PORT || 3008
app.listen(port)

console.log(`Open browser at http://localhost:${port}`)
