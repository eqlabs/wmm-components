/** Utils for <wmm-video> and <wmm-audio> components. */

import { userId } from '../wmm-utils/client/user.js'

/**
 * @param {object} wmm - wmm-video or wmm-audio component.
 * @param {string} type - 'video' or 'audio'.
 */
export function initMedia(wmm, type) {
  wmm.media = document.createElement(type)
  wmm.media.controls = true
  wmm.media.autoplay = true
  wmm.shadowRoot.appendChild(wmm.media)
}

/**
 * Init CSS of <wmm-video> or <wmm-audio> component.
 * @param {object} wmm - 'video' or 'audio'
 */
export function initCssClasses(wmm) {
  wmm.addEventListener('progress', ev => setClass(wmm, 'data-ok'))
  wmm.addEventListener('stalled', ev => setClass(wmm, 'data-stalled'))
}

const wmmClasses = ['data-pending', 'data-ok', 'data-stalled']

export function setClass(wmm, className) {
  wmmClasses.forEach(cn =>
    wmm.classList[cn == className ? 'add' : 'remove'](cn))
}

export function setUrl(wmm, url) {
  if (url == wmm.getAttribute('src')) return
  // add userId as url parameter
  url = new URL(url, location.origin)
  if (!url.searchParams.has('userId'))
    url.searchParams.set('userId', userId)
  // start loading video file
  wmm.setAttribute('src', url)
  wmm.media.src = url
}