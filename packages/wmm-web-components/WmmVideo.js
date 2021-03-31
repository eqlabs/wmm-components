import { initMediaMonetization, monetizeEvents, mediaRemoved } from '../wmm-utils/client/monetize.js'
import { initAudioOrVideo, setClass, initCssClasses, unloadMedia } from './videoAndAudio.js'
import { setUrl, bindNotifications } from './common.js'

/**
 * Creates a web monetized video element. &lt;wmm-video&gt;<br/>
 * Attributes:<br/>
 * * src: video file source; if full URL is used, the recipe verification will use the same host for verification.<br/>
 * * paymentUrl: Payment pointer URL, can also include receipt service url.<br/>
 * * skipVerification: if true, don't send receipts to backend for verifications.<br/>
 */
class WmmVideo extends HTMLElement {
  /**
   * Synchronise wmm-video elements *src* attribute
   * with inner video -elements *src* attrubute.
   */
  get src() { return this.getAttribute('src') }
  set src(url) { setUrl(this, url) }

  get paymentUrl() { return this.getAttribute('paymentUrl') }
  set paymentUrl(url) { this.setAttribute('paymentUrl', url) }

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    initAudioOrVideo(this, 'video')
    bindNotifications(this)
  }

  /**
   * Initializes monetization and styles
   * when component is inserted into DOM.
   */
   connectedCallback () { // element added to dom
    initMediaMonetization(this)
    initCssClasses(this)
    setClass(this, 'data-pending')
  }

  /**
   * Stops monetization and disconnects the media stream
   * when component is removed from DOM.
   */
  disconnectedCallback () { // element removed from dom
    mediaRemoved(this)
    unloadMedia(this.shadowRoot.querySelector('video'))
  }

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

window.customElements.define('wmm-video', WmmVideo)