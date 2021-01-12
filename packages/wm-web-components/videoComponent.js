import {userId} from '/wm-utils/client/user.js'
import { addMetaTag, pipeReceiptEventsToBackend } from '/wm-utils/client/monetize.js'
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
    this.initVideoEl()
  }
  connectedCallback () {
    console.log('video added to dom')
    this.initMonetization()
  }
  initVideoEl() {
    const videoEl = this.#videoEl = document.createElement('video')
    videoEl.controls = true
    videoEl.autoplay = true
    videoEl.volume = 0
    this.#shadow.appendChild(videoEl)
  }
  initMonetization() {
    if (!this.paymentUrl)
      return console.error("Add paymentUrl attribute (<wm-video paymentUrl='...'>)")
    // Set payment address and receipt service url
    addMetaTag(this.paymentUrl) // , receiptService)
    // Pass payment receipts to backend
    pipeReceiptEventsToBackend(userId)
  }

  // static get observedAttributes() { return ['src', 'paymentUrl'] }
  // attributeChangedCallback (name, oldValue, newValue) {
  //   console.log('video attr changed', name, oldValue, newValue)
  // }
  // disconnectedCallback () {
  //   console.log('video removed from dom')
  // }

}

window.customElements.define('wm-video', WmVideo)