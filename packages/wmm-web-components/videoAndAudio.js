import { userId } from '../wmm-utils/client/user.js'

const wmmClasses = ['data-pending', 'data-ok', 'data-stalled']

export function initCssClasses(element) {
  element.addEventListener('progress', ev => setClass(element, 'data-ok'))
  element.addEventListener('stalled', ev => setClass(element, 'data-stalled'))
}

export function setClass(element, className) {
  wmmClasses.forEach(cn =>
    element.classList[cn == className ? 'add' : 'remove'](cn))
}

export function setUrl(element, url) {
  if (url == element.getAttribute('src')) return
  // add userId as url parameter
  url = new URL(url, location.origin)
  if (!url.searchParams.has('userId'))
    url.searchParams.set('userId', userId)
  // start loading video file
  element.setAttribute('src', url)
  element.videoEl.src = url
}