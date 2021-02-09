import '/packages/wmm-web-components/audioComponent.js'
import '/packages/wmm-web-components/videoComponent.js'
import { logEvent } from '/packages/wmm-utils/client/index.js'
import {fullPaymentUrl} from './config.js'

const info = document.querySelector('#logs')

export function showMedia(file) {
  const type = file.split('.')[1]
  // Add video element to the dom
  const wmm = document.createElement('wmm-' + (type == 'mp3' ? 'audio' : 'video'))
  wmm.src = `http://localhost:3009/media/` + file
  wmm.paymentUrl = fullPaymentUrl

  addStylesToMedia(wmm)
  bindEvents(wmm)

  // Use setTimeout to work well with docusaurus
  setTimeout(() => {
    const container = document.querySelector('#media-container')
    container.textContent = ''
    container.appendChild(wmm)
  })
}
window.showMedia = showMedia // to access from docs <script> import

function addStylesToMedia(wmm) {
  const style = document.createElement('style')
  style.innerHTML = `
    audio, video { outline: none; }
  `
  wmm.shadowRoot.appendChild(style)
}

const mediaEvents = {
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

function bindEvents(wmm) {
  for (let [evName, action] of Object.entries(mediaEvents)) {
    wmm.addEventListener(evName, action)
  }
}
