/*
 * Web monetized video element. Usage:
 * <wmm-video
 *   src="video file source; if full URL is used, the recipe verification will use the same host for verification"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications">
 */


import {userId} from '../wmm-utils/client/user.js'
import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'

const wmmClasses = ['data-pending', 'data-ok', 'data-stalled']

class WmmVideo extends HTMLElement {
  // #videoEl
  // #shadow

  get src() { return this.getAttribute('src') }
  set src(url) {
    if (url == this.getAttribute('src')) return
    // add userId as url parameter
    url = new URL(url, location.origin)
    if (!url.searchParams.has('userId'))
      url.searchParams.set('userId', userId)
    // start loading video file
    this.setAttribute('src', url)
    this.videoEl.src = url
  }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.initVideoEl()
  }

  // Native events
  connectedCallback () { // element added to dom
    this.initMonetization()
    this.initCssClasses()
    this.setClass('data-pending')
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
    videoEl.volume = 0
    this.shadow.appendChild(videoEl)
  }
  initMonetization() {
    if (!this.paymentUrl)
      return console.error("Add paymentUrl attribute (<wmm-video paymentUrl='...'>)")
    const skipBackendVerification = JSON.parse(this.getAttribute('skipVerification'))
    initMediaMonetization(this, this.paymentUrl, skipBackendVerification)
  }

  initCssClasses() {
    this.addEventListener('progress', ev => this.setClass('data-ok'))
    this.addEventListener('stalled', ev => this.setClass('data-stalled'))
  }
  setClass(className) {
    wmmClasses.forEach(cn =>
      this.classList[cn == className ? 'add' : 'remove'](cn))
  }

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