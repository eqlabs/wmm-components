import '/packages/wmm-web-components/videoComponent.js'
import { logEvent } from '/packages/wmm-utils/client/index.js'
import {fullPaymentUrl} from './config.js'

const info = document.querySelector('#logs')

// Add video element to the dom
const wmmVideo = document.createElement('wmm-video')
wmmVideo.src = `http://localhost:3009/videoFile`
wmmVideo.paymentUrl = fullPaymentUrl

const videoEvents = {
  "monetized": ({detail}) =>
    logEvent(`Balance: ${detail.accountBalance}`, info),
  "monetizeFailed": ({detail}) =>
    logEvent(`Failed: ${detail}`, info),
  "play": ev =>
    console.log('play', ev),
  "stalled": () => {
    // TODO create non intrusive info
    if (!document.monetization) {
      alert("Monetization failed in error state.")
    } else {
      switch (document.monetization.state) {
        case 'stopped':
          alert("Install Coil wallet to start paying for video content to see more.")
          break;
        case 'pending':
          alert("Failed to start monetization, even though wallet installed.")
          break;
        case 'started':
          alert("Monetization running, but not enough payments to show the video.")
          break;
      }
    }
  },
  "wallet but not enough payments": () => {
    console.log()
  }
}

for (let [evName, action] of Object.entries(videoEvents)) {
  wmmVideo.addEventListener(evName, action)
}

// Use setTimeout to work well with docusaurus
setTimeout(() => {
  const container = document.querySelector('#video-container')
  container.textContent = ''
  container.appendChild(wmmVideo)
})
