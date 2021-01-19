import { setPaymentUrl } from '../utils.js'

// Initialize monetization meta tag with payment pointer and receipt service
setPaymentUrl("$ilp.uphold.com/4m2d2Xn4EUyk",
          "https://webmonetization.org/api/receipts/")

// Toggle logging
var logging = true
var button = document.querySelector('#logging')
button.addEventListener('click', () => {
  logging = !logging
  button.textContent = logging
})

// Log Events
const elEvents = document.querySelector('#events')
function logEvent(text){
  const pre = document.createElement('pre')
  pre.textContent = text
  elEvents.insertBefore(pre, elEvents.firstChild)
}
if (!document.monetization) {
  alert("Web Monetization not supported")
} else {
  ['monetizationstart', 'monetizationprogress', 'monetizationpending', 'monetizationstop'].forEach((evName) => {
    document.monetization.addEventListener(evName, (ev) => {
      if (!logging) return
      console.log('event: ', evName)
      logEvent(evName + ': ' + JSON.stringify(ev.detail))
    })
  })
}