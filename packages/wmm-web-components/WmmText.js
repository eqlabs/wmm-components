import { initMediaMonetization, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { setUrl, bindNotifications } from './common.js'

/**
 * How much of the last paragraph must be visible to start loading
 * next paragraph.
 * Value must be between: 0 < threshold <= 1
 * @type {number}
 */
const threshold = 0.1

let observerOptions = {
  // root: node,
  rootMargin: '0px',
  threshold: threshold
}

/**
 * Allowing HTML injection gives more power in the type of content that can be show,
 * but can causes a security vulnerability unless the source of the text is controlled
 * to reject harmful script tags.
 */
const allowHtmlInjection = true

/**
 * Creates a monetized text component, that loads new paragraphs as the user scrolls the page.
 * <pre>&lt;wmm-text
 *   src="enpoint for retrieving the paragraphs"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications"&gt;</pre>
 */

class WmmText extends HTMLElement {
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  constructor () {
    super()
    this.paragraph = -1

  }

  // Element added to dom
  connectedCallback () {
    this.innerHTML = `
      <style>
        wmm-text {
          display: block;
          height: 100%;
          /* background: red;*/
        }
        wmm-text p {
          margin: 0;
          padding: 1em 0 0 1em;
        }
      </style>
    `
    initMediaMonetization(this)
    this.initNotifications()
    this.startLoadingText()
  }

  // Element removed from dom
  disconnectedCallback () {
    mediaRemoved(this)
  }

  // Methods

  startLoadingText() {
    if (!this.clientHeight)
      return // no room for text; not added to dom yet?
    if (this.observer) {
      alert('TODO unload previous observer before starting a new one')
      return
    }
    // this.shadowRoot.innerHTML = ''
    this.observer = new IntersectionObserver(entries => {
      var entry = entries[0] // only one entry (lastParagraph) expected
      if (entry.intersectionRatio < threshold) return
      this.loadParagraph()
    }, observerOptions);
    this.loadParagraph() // "load" first paragraph
  }

  async loadParagraph() {
    this.lastParagraph && this.observer.unobserve(this.lastParagraph)
    let src = this.getAttribute('src')
    if (!src)
      throw Error("'src' property missing in <wmm-text>")
    this.paragraph++
    // add paragraph number to url
    const urlAndParams = src.split('?')
    urlAndParams[0] += '/' + this.paragraph
    src = urlAndParams.join('?')
    // load from backend
    this.dispatchEvent(new CustomEvent('paragraphLoading'))
    const res = await fetch(src)
    if (res.status === 204)
      return // end of article reached
    const pText = await res.text()
    this.dispatchEvent(new CustomEvent('paragraphLoaded'))
    // add to dom
    this.lastParagraph = document.createElement('p')
    if (allowHtmlInjection)
      this.lastParagraph.innerHTML = pText
    else
      this.lastParagraph.textContent = pText
    this.appendChild(this.lastParagraph)
    this.observer.observe(this.lastParagraph)
  }

  /**
   * Binds to default notifications.
   * Shown on 'paragraphPending' event and hidden on 'paragraphLoaded' event.
   */
  initNotifications() {
    bindNotifications(this, undefined, true)
    const waitBeforeShowing = 600
    let timeout
    this.addEventListener('paragraphLoading', () =>
      (timeout = setTimeout(() => {
        this.dispatchEvent(new CustomEvent('paragraphPending'))
      }, waitBeforeShowing))
    )
    this.addEventListener('paragraphLoaded', () => clearTimeout(timeout))
  }
}

window.customElements.define('wmm-text', WmmText)