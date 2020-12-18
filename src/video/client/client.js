import { addMetaTag, logEvent } from './utils.js'

// Initialize monetization meta tag with payment pointer and receipt service
addMetaTag("$ilp.uphold.com/4m2d2Xn4EUyk",
          "https://webmonetization.org/api/receipts/")


document.monetization.addEventListener('monetizationprogress', async (ev) => {
  if (!ev.detail?.receipt)
    return console.log('no receipt', ev)
  const res = await fetch('/verifyReceipt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ev.detail)
  })
  logEvent(await res.text(), document.body, true)
})