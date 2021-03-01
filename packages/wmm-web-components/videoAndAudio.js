/** Utils for <wmm-video> and <wmm-audio> components. */

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
 * Init CSS of WmmVideo or WmmAudio component.
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