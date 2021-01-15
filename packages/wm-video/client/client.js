import '/wm-web-components/videoComponent.js'
import {fullPaymentUrl} from '/config.js'
import { logEvent } from '/wm-utils/client/index.js'

const info = document.createElement('div')
// Add video element to the dom
const wmVideo = document.createElement('wm-video')
wmVideo.src = `videoFile`
wmVideo.paymentUrl = fullPaymentUrl
// wmVideo.setAttribute('skipVerification', true)
// Log events
wmVideo.addEventListener('monetized', ({detail}) =>
  logEvent(`Balance: ${detail.accountBalance}`, info))
wmVideo.addEventListener('monetizeFailed', ({detail}) =>
  logEvent(`Failed: ${detail}`, info))
wmVideo.addEventListener('play', ev => console.log('play', ev))


document.body.appendChild(wmVideo)
document.body.appendChild(info)
