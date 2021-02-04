/**
 * Web monetized video element. Usage:
 * <wmm-video
 *   src="video file source; if full URL is used, the recipe verification will use the same host for verification"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications">
 */


import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { setClass, initCssClasses, setUrl } from './videoAndAudio.js'

/** This is a description of WmmVideo Class */
class WmmVideo extends HTMLElement {
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.initVideoEl()
  }

  // Native events
  connectedCallback () { // element added to dom
    initMediaMonetization(this)
    initCssClasses(this)
    setClass(this, 'data-pending')
  }
  disconnectedCallback () {
    console.log('video removed from dom')
    mediaRemoved(this)
  }

  // Instance methods
  initVideoEl() {
    const videoEl = this.videoEl = document.createElement('video')
    videoEl.controls = true
    videoEl.autoplay = true
    videoEl.volume = 0 // TEMP
    this.shadow.appendChild(videoEl)
  }
  /**
   * Event listener for monetization and video events.
   * @param {string} name - Event name
   * @param {function} action - The action to execute on event.
   */
  addEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.addEventListener(name, action)
    } else {
      this.videoEl.addEventListener(name, action)
    }
  }

  removeEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.removeEventListener(name, action)
    } else {
      this.videoEl.removeEventListener(name, action)
    }
  }

  // TODO removeEventListener
  // TODO listen for class changes

  // static get observedAttributes() { return ['src', 'paymentUrl'] }
  // attributeChangedCallback (name, oldValue, newValue) {
  //   console.log('video attr changed', name, oldValue, newValue)
  // }


}

window.customElements.define('wmm-video', WmmVideo)