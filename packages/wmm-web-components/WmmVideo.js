import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { initAudioOrVideo, setClass, initCssClasses } from './videoAndAudio.js'
import { setUrl, bindNotifications } from './common.js'

/**
 * Creates a web monetized video element. E.g.:
 * <pre>&lt;wmm-video
 *   src="video file source; if full URL is used, the recipe verification will use the same host for verification"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications"&gt;</pre>
 */
class WmmVideo extends HTMLElement {
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    initAudioOrVideo(this, 'video')
    bindNotifications(this, this.querySelector('video') || undefined)
  }

  // Events

  connectedCallback () { // element added to dom
    initMediaMonetization(this)
    initCssClasses(this)
    setClass(this, 'data-pending')
  }
  disconnectedCallback () { // element removed from dom
    mediaRemoved(this)
  }

  // Instance methods

  /**
   * Event listener for monetization and video events.
   * Binding to monetization events ('monetizationStopped', 'monetized', 'monetizeFailed')
   * allows tracking of monetization state, while all other events are passed
   * to the inner &lt;video&gt; element and can be used to track the state of the media.
   * E.g. https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
   * @param {string} name - Event name
   * @param {function} action - The action to execute on event.
   */
  addEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.addEventListener(name, action)
    } else {
      this.media.addEventListener(name, action)
    }
  }

  removeEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.removeEventListener(name, action)
    } else {
      this.media.removeEventListener(name, action)
    }
  }

  // static get observedAttributes() { return ['src', 'paymentUrl'] }
  // attributeChangedCallback (name, oldValue, newValue) {
  //   console.log('video attr changed', name, oldValue, newValue)
  // }

}

window.customElements.define('wmm-video', WmmVideo)