import { userId } from '../wmm-utils/client/user.js'

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