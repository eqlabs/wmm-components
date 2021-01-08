import { addMetaTag, logEvent } from './wm-utils/frontend.js'

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

// User
if (!localStorage.getItem('userId'))
localStorage.setItem('userId', uuidv4())
const userId = localStorage.getItem('userId')

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

// Video element
const video = document.createElement('video')
video.controls = true
video.autoplay = true
video.volume = 0
video.src = `/videoFile?userId=${userId}`
document.body.appendChild(video)