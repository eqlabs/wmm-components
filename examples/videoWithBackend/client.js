import '../../packages/wmm-web-components/videoComponent.js'
import { logEvent } from '../../packages/wmm-utils/client/index.js'
import {fullPaymentUrl} from './config.js'

const info = document.createElement('div')
// Add video element to the dom
const wmmVideo = document.createElement('wmm-video')
wmmVideo.src = `http://localhost:3009/videoFile`
wmmVideo.paymentUrl = fullPaymentUrl
// wmmVideo.setAttribute('skipVerification', true)
// Log events
wmmVideo.addEventListener('monetized', ({detail}) =>
  logEvent(`Balance: ${detail.accountBalance}`, info))
wmmVideo.addEventListener('monetizeFailed', ({detail}) =>
  logEvent(`Failed: ${detail}`, info))
wmmVideo.addEventListener('play', ev => console.log('play', ev))

setTimeout(() => {
  const container = document.querySelector('#video-container')
  container.textContent = ''
  container.appendChild(wmmVideo)
})
