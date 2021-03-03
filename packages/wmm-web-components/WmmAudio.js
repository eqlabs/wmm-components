import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { initAudioOrVideo, setClass, initCssClasses } from './videoAndAudio.js'
import { setUrl } from './common.js'

/**
 * Creates a web monetized audio element. E.g.:
 * <pre>&lt;wmm-audio
 *   src="audio file source; if full URL is used, the recipe verification will use the same host for verification"
 *   paymentUrl="Payment pointer URL, can also include receipt service url"
 *   skipVerification="if true, don't send receipts to backend for verifications"&gt;</pre>
 */
class WmmAudio extends HTMLElement {
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    initAudioOrVideo(this, 'audio')
  }

  // Element added to dom
  connectedCallback () {
    initMediaMonetization(this)
    initCssClasses(this)
    setClass(this, 'data-pending')
  }

  // Element removed from dom
  disconnectedCallback () {
    console.log('audio removed from dom')
    mediaRemoved(this)
  }

  /**
   * Event listener for monetization and video events.
   * Binding to monetization events ('monetizationStopped', 'monetized', 'monetizeFailed')
   * allows tracking of monetization state, while all other events are passed
   * to the inner &lt;audio&gt; element and can be used to track the state of the media.
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

  /**
   * Remove monetization or video element listener
   * @param {string} name - Event name
   * @param {function} action - The action to execute on event.
   */
  removeEventListener(name, action) {
    if (monetizeEvents.has(name)) {
      super.removeEventListener(name, action)
    } else {
      this.media.removeEventListener(name, action)
    }
  }
}

window.customElements.define('wmm-audio', WmmAudio)