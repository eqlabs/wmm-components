/** Utils for <wmm-video> and <wmm-audio> components. */

/**
 * @param {object} wmm - WmmAudio or WmmVideo instance.
 * @param {string} type - 'video' or 'audio'.
 */
export function initAudioOrVideo(wmm, type) {
  wmm.media = document.createElement(type)
  wmm.media.controls = true
  wmm.media.autoplay = true
  wmm.shadowRoot.appendChild(wmm.media)
}

/**
 * Init CSS of WmmVideo or WmmAudio component.
 * @param {object} wmm - WmmAudio or WmmVideo instance.
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

/**
 * Make sure video and audio elements release their resources when removed
 * from DOM.
 * @param {Element} mediaEl
 */
export function unloadMedia(mediaEl) {
  mediaEl.pause()
  mediaEl.removeAttribute('src')
  mediaEl.load()
}