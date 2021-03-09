
export function addNotificationTo(element, text, onTop=true) {
  element.style.position = 'relative'
  const notif = document.createElement('wmm-notification')
  notif.style.width  = `calc(${element.clientWidth}px - 2em)`
  notif.style.height = element.clientHeight + 'px'
  notif.style.top = element.getBoundingClientRect().top + 'px'
  if (onTop) notif.classList.add('onTop')
  notif.show(text)
  element.parentNode.insertBefore(notif, element.nextSibling)
  return notif
}

class WmmNotification extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-style: italic;
          background-color: hsla(0,100%,100%,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        :host(.onTop) {
          position: absolute;
          /* top: 0;
          // left: 0;
          /* height: 100%;
             width: 100%; */
          padding: 0 1em;
        }
      </style>
      <div id="text">Some information is provided here</div>
    `
  }

  connectedCallback () {
    this.startAnimation()
  }

  // methods
  startAnimation() {
    const el = this.shadowRoot.querySelector('#text')
    console.log('el t', el.textContent)
    console.log('el', el.style.opacity)
    // el.style.opacity = 0
    // debugger
    el.animate([
      {opacity: 1},
      {opacity: 0.6, offset: 0.36},
      {opacity: 0.2},
      {opacity: 0.6, offset: 0.64},
      {opacity: 1},
    ], {
      duration: 3000,
      iterations: Infinity
    })
  }

  // "public" methods

  show(text) {
    this.shadowRoot.querySelector('#text').textContent = text
    // this.shadowRoot.host.style.display = 'block'
  }
  hide() {
    this.shadowRoot.host.style.display = 'none'
  }

}

window.customElements.define('wmm-notification', WmmNotification)