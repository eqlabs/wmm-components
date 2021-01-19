import {userId} from '/wmm-utils/client/user.js'
import { initMediaMonetization, monetizeEvents } from '/wmm-utils/client/monetize.js'
class WmVideo extends HTMLElement {
  #videoEl
  #shadow

  get src() { return this.getAttribute('src') }
  set src(url) {
    if (url == this.getAttribute('src')) return
    // add userId as url parameter
    url = new URL(url, location.origin)
    if (!url.searchParams.has('userId'))
      url.searchParams.set('userId', userId)
    // start loading video file
    this.setAttribute('src', url)
    this.#videoEl.src = url
  }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.#shadow = this.attachShadow({ mode: 'open' })
    this.#initVideoEl()
  }
  connectedCallback () { // element added to dom
    this.#initMonetization()
  }
  #initVideoEl() {
    const videoEl = this.#videoEl = document.createElement('video')
    videoEl.controls = true
    videoEl.autoplay = true
    videoEl.volume = 0
    this.#shadow.appendChild(videoEl)
  }
  #initMonetization() {
    if (!this.paymentUrl)
      return console.error("Add paymentUrl attribute (<wmm-video paymentUrl='...'>)")
    const skipBackendVerification = JSON.parse(this.getAttribute('skipVerification'))
    initMediaMonetization(this, this.paymentUrl, skipBackendVerification)
  }

  addEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.addEventListener(name, action)
    } else {
      this.#videoEl.addEventListener(name, action)
    }
  }

  // static get observedAttributes() { return ['src', 'paymentUrl'] }
  // attributeChangedCallback (name, oldValue, newValue) {
  //   console.log('video attr changed', name, oldValue, newValue)
  // }
  // disconnectedCallback () {
  //   console.log('video removed from dom')
  // }

}

window.customElements.define('wmm-video', WmVideo)