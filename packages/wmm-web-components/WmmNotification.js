/**
 * This is a simple UI component for showing notifications of the monetization
 * state. You can modify this component or replace it with your own UI component
 * to give notifications that suit better the style of your application.
 *
 * This notification is positioned on top of the media element in case of
 * video and audio components, and *inside*, at the bottom of the component
 * in case of text.
 *
 * @param {Element} element - the component in which the notification is attached.
 * @param {string} html - the notification HTML that is shown.
 * @param {boolean} inside - adds notification inside the element as its last child.
 */
export function addNotificationTo(element, html, inside) {
  if (inside && element.lastElementChild && element.lastElementChild.clientHeight) {
    element = element.lastElementChild
  } else {
    inside = false
  }
  element.style.position = 'relative'
  const notif = document.createElement('wmm-notification')
  notif.style.width  = element.clientWidth + 'px'
  notif.style.height = element.clientHeight + 'px'
  notif.style.top = element.getBoundingClientRect().top + 'px'
  if (!inside) notif.classList.add('onTop')
  notif.show(html)
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
          padding: 0 1em;
        }
      </style>
      <div id="text">Some information is provided here</div>
    `
  }

  connectedCallback () {
    this.startAnimation()
  }

  /**
   * Make a repaeting face-in-and-out animation
   * when the notification is visible.
   */
  startAnimation() {
    const el = this.shadowRoot.querySelector('#text')
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

  show(text) {
    this.shadowRoot.querySelector('#text').innerHTML = text
  }

}

window.customElements.define('wmm-notification', WmmNotification)