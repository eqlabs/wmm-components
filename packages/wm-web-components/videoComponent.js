import {userId} from '/wm-utils/client/user.js'

class WmVideo extends HTMLElement {
  static get observedAttributes() { return ['src', 'monetize'] }

  #videoEl
  monetize // = '' // ?
  shadow

  get src() {
    return this.getAttribute('src')
  }
  set src(url) {
    if (url == this.getAttribute('src')) return
    // add userId
    url = new URL(url, location.origin)
    if (!url.searchParams.has('userId'))
      url.searchParams.set('userId', userId)
    this.setAttribute('src', url)
    this.#videoEl.src = url
  }

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.initVideoEl()
  }
  attributeChangedCallback (name, oldValue, newValue) {
    console.log('video attr changed', name, oldValue, newValue)
  }
  connectedCallback () {
    console.log('video added to dom')
  }
  disconnectedCallback () {
    console.log('video removed from dom')
  }

  initVideoEl() {
    const videoEl = this.#videoEl = document.createElement('video')
    videoEl.controls = true
    videoEl.autoplay = true
    videoEl.volume = 0
    this.shadow.appendChild(videoEl)
  }
}

window.customElements.define('wm-video', WmVideo)