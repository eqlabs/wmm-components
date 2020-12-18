class WmVideo extends HTMLElement {
  static get observedAttributes() { return ['src'] }

  constructor () {
    super()
    var shadow = this.attachShadow({ mode: 'open' })
    var videoEl = document.createElement('video')
    videoEl.src = this.getAttribute('src')
    videoEl.controls = true
    shadow.appendChild(videoEl)
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
}

window.customElements.define('wm-video', WmVideo)