import { userId } from '../wmm-utils/client/user.js'
import { addNotificationTo } from './WmmNotification.js'

/**
 * A helper for setting WMM web component *src*. Adds userId to the URL
 * and starts loading the content either by passing the URL to the inner
 * media element (in case of audio and video) or by calling a specific
 * load method (in case of text).
 * @param {object} wmm - WmmAudio, WmmVideo or WmmText instance.
 * @param {string} url - URL or
 */
export function setUrl(wmm, url) {
  if (url == wmm.media?.src) return
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

/**
 * Maps Web Monetization state (in document.monetization) to a text that
 * can be notified to the user.
 * @returns {string} Monetization state text
 */
function getErrorStateText() {
  if (!document.monetization) {
    return "Install <a href='https://coil.com/' target='_blank'>Coil wallet</a> for more media content."
  } else {
    switch (document.monetization.state) {
      case 'stopped':
        return "Install <a href='https://coil.com/' target='_blank'>Coil wallet</a> for more media content."
      case 'pending':
        return "Starting monetization, please wait."
      case 'started':
        return "Monetization running, but not enough payments to show the media. Please wait."
    }
  }
}

const errorEvents = ['stalled', 'paragraphPending'], // TODO: add error event for text
      okEvents = ['play', 'playing', 'paragraphLoaded'] // TODO: add ok event for text // NOTE: play only works when autoplay=true

/**
 * Binds monetization state notifications to a given component.
 * The notification is shown when an error event is emitted from the component,
 * and hidden when an OK event is emitted.
 * @param {object} wmm - WmmAudio, WmmVideo or WmmText instance.
 * @param {boolean} inside - adds notification inside the element as its last child
 */
export function bindNotifications(wmm, inside) {
  for (const errorEv of errorEvents) {
    wmm.addEventListener(errorEv , () => {
      wmm.notification?.remove() // replace previous if exists, possibly with new error state text
      wmm.notification = addNotificationTo(wmm, getErrorStateText(), inside)
    })
  }
  for (const okEv of okEvents) {
    wmm.addEventListener(okEv, () => {
      if (!wmm.notification) return
      wmm.notification.remove()
      delete wmm.notification
    })
  }
}