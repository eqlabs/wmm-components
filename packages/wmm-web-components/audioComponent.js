/**
 * Web monetized audio element. Usage:
 * <wmm-audio
 *   src="audio file source; if full URL is used, the recipe verification will use the same host for verification"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications">
 */


import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { setClass, initCssClasses, setUrl } from './videoAndAudio.js'

/** This is a description of WmmAudio Class */
class WmmAudio extends HTMLElement {
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.initAudioEl()
  }

  // Native events
  connectedCallback () { // element added to dom
    initMediaMonetization(this)
    initCssClasses(this)
    setClass(this, 'data-pending')
  }
  disconnectedCallback () {
    console.log('audio removed from dom')
    mediaRemoved(this)
  }

  // Instance methods
  initAudioEl() {
    const audioEl = this.audioEl = document.createElement('audio')
    audioEl.controls = true
    audioEl.autoplay = true
    audioEl.volume = 0 // TEMP
    this.shadow.appendChild(audioEl)
  }
  /**
   * Event listener for monetization and audio events.
   * @param {string} name - Event name
   * @param {function} action - The action to execute on event.
   */
  addEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.addEventListener(name, action)
    } else {
      this.audioEl.addEventListener(name, action)
    }
  }

  removeEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.removeEventListener(name, action)
    } else {
      this.audioEl.removeEventListener(name, action)
    }
  }
}

window.customElements.define('wmm-audio', WmmAudio)