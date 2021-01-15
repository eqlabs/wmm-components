import '/wm-web-components/videoComponent.js'
import {fullPaymentUrl} from '/config.js'

// Add video element to the dom
const wmVideo = document.createElement('wm-video')
wmVideo.src = `videoFile`
wmVideo.paymentUrl = fullPaymentUrl
wmVideo.setAttribute('skipVerification', true)
document.body.appendChild(wmVideo)
