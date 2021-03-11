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
      okEvents = ['play', 'canplaythrough', 'paragraphLoaded'] // TODO: add ok event for text // NOTE: play only works when autoplay=true

/**
 * Binds monetization state notifications to given component.
 */
export function bindNotifications(wmm, el=wmm, inside) {
  for (const errorEv of errorEvents) {
    wmm.addEventListener(errorEv , () => {
      wmm.notification = addNotificationTo(el, getErrorStateText(), inside)
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