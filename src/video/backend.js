import Koa from 'koa'
const app = new Koa()
import koaRouter from 'koa-router'
const router = koaRouter()
import serve from 'koa-static'
const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"))
import bodyParser from 'koa-body-parser'
import path from 'path'
import fetch from 'node-fetch'

import config  from './config.js'

let totalReceived = 0

router.post('/verifyReceipt', async ctx => {
  const {amount, paymentPointer, receipt} = ctx.request.body
  const spspEndpoint = decodeURIComponent(
    paymentPointer.replace(config.receiptService,'')
  )
  let res = await fetch(config.receiptService + 'verify', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: receipt
  })
  res = await res.json()
  if (spspEndpoint != res.spspEndpoint) {
    throw Error("spspEndpoint sent by client and receipt service don't match.")
  }
  const serviceAmount = parseInt(res.amount)
  if (parseInt(amount) > serviceAmount) {
    // NOTE: the amount sent be recipe service can be bigger than the one sent by client,
    // since the recipe service combines the amount of all payments before previous verification.
    throw Error("Amount send by client is bigger than the one from recipe service.")
  }
  totalReceived += serviceAmount
  ctx.body = totalReceived
})

app
  // .use(monetizer.koa())
  .use(bodyParser())
  .use(router.routes())
  // .use(router.allowedMethods())
  .use(serve(path.resolve(__dirname, './client')))
  .listen(process.env.PORT || 3009)


// router.get('/videos/:id', async ctx => {
//   const stream = fs.createReadStream(path.resolve(
//     __dirname,
//     'videos',
//     ctx.params.id
//   ))
// })
