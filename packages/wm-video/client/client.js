import '/wm-web-components/videoComponent.js'
import { addMetaTag, logEvent } from '/wm-utils/client/index.js'

// Initialize monetization meta tag with payment pointer and receipt service
addMetaTag("$ilp.uphold.com/4m2d2Xn4EUyk",
          "https://webmonetization.org/api/receipts/")


document.monetization.addEventListener('monetizationprogress', async (ev) => {
  if (!ev.detail?.receipt)
    return console.log('no receipt', ev)
  ev.detail.userId = userId
  const res = await fetch('/verifyReceipt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ev.detail)
  })
  logEvent(await res.text(), document.body, true)
})

// Video element
const wmVideo = document.createElement('wm-video')
wmVideo.src = `videoFile`

// const div = document.createElement('div')
// div.innerHTML = `<wm-video src="/foofoo"></wm-video>`
wmVideo.setAttribute('monetize', '$ilp.uphold.com/4m2d2Xn4EUyk')
document.body.appendChild(wmVideo)
