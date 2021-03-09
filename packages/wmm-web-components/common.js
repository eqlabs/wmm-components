import { userId } from '../wmm-utils/client/user.js'
import { addNotificationTo } from './WmmNotification.js'

export function setUrl(wmm, url) {
  if (url == wmm.getAttribute('src')) return
  // add userId as url parameter
  url = new URL(url, location.origin)
  if (!url.searchParams.has('userId'))
    url.searchParams.set('userId', userId)
  // start loading video file
  wmm.setAttribute('src', url)
  if (wmm.media) {
    wmm.media.src = url
  } else if (wmm.startLoadingText) {
    wmm.startLoadingText()
  } else {
    throw Error('Media "src" set, but no way to load the content')
  }
}

// Notifications

function getErrorStateText() {
  if (!document.monetization) {
    return "Install Coil wallet to continue watching the media."
  } else {
    switch (document.monetization.state) {
      case 'stopped':
        return "Install Coil wallet to continue watching the media."
      case 'pending':
        return "Failed to start monetization, even though wallet installed."
      case 'started':
        return "Monetization running, but not enough payments to show the media. Please wait."
    }
  }
}

function bindEvents(wmm) {
  for (let [evName, action] of Object.entries(mediaEvents)) {
    wmm.addEventListener(evName, action)
  }
}

const errorEvents = ['stalled'], // TODO: add error event for text
      okEvents = ['play', 'canplaythrough'] // TODO: add ok event for text // NOTE: play only works when autoplay=true

export function bindNotifications(wmm, el=wmm) {
  for (const errorEv of errorEvents) {
    wmm.addEventListener(errorEv , () => {
      wmm.notification = addNotificationTo(el, getErrorStateText())
    })
  }
  for (const okEv of okEvents) {
    wmm.addEventListener(okEv, () => {
      if (!wmm.notification) return
      wmm.notification.remove()
      delete wmm.notification
      // wmm.notification = addNotificationTo(el, getErrorStateText())
    })
  }
}

/*
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
  }
}
*/