import {userId} from './user.js'

const getMetaTag = () => document.querySelector("head meta[name=monetization]")

export const monetizeEvents = new Set(
  ['monetizationStopped', 'monetized', 'monetizeFailed']
)

/*
  'activeMedia' is the reference to the component currently being monetized.
  WM allows only one address to be monetized at a time, so in terms of
  WMM components, this means that only one component can be monetized at a time.
*/
let activeMedia, mProgressAction, mediaOrigin

/** This is a description of updateMedia */
function updateMedia(media) {
  if (activeMedia && activeMedia.paymentUrl !== media.paymentUrl)
    activeMedia.dispatchEvent(new CustomEvent('mediaMonetizationStopped',
                            {account: {paymentUrl: activeMedia.paymentUrl()}}))
  activeMedia = media
  try {
    mediaOrigin = (new URL(media.src)).origin
  } catch (err) {
    mediaOrigin = location.origin
  }
}

/**
 *
 * @param {object} media WmmAudio or WmmVideo instance
 */

export function initMediaMonetization(media) {
  if (!media.paymentUrl)
      return console.error("Add paymentUrl attribute (<wmm-video paymentUrl='...'>)")
  const skipBackendVerification = JSON.parse(media.getAttribute('skipVerification'))
  updateMedia(media)
  setPaymentUrl(media.paymentUrl)
  if (!skipBackendVerification)
    pipeReceiptEventsToBackend()
}

export function mediaRemoved(media) {
  if (media === activeMedia) {
    document.querySelector("head meta[name='monetization']").remove()
    activeMedia = null
  }
}

// NOTE: not used, since currently this is done in config file
const setPaymentPointerWithReceiptService = (paymentPointer, receiptService) =>
  setPaymentUrl(receiptService + encodeURIComponent(paymentPointer))

function setPaymentUrl(paymentUrl) {
  let metaTag = getMetaTag()
  if (metaTag && metaTag.content == paymentUrl) {
    return
  }
  if (!metaTag) {
    var mTag = document.createElement('meta')
    mTag.name = "monetization"
    document.head.appendChild(mTag)
  } else {
    console.info(`Web monetization address changed: ${paymentUrl}`)
  }
  mTag.content = paymentUrl
}

// Save resources by not checking every receipt.
// (backend still receives the correct amount, since recipe service combines all previous recipes)
const waitBeforeNextRecipe = 600

function pipeReceiptEventsToBackend() {
  if (!getMetaTag()) {
    throw Error("setPaymentUrl (payment address) before piping payment events")
  }
  if (!userId) {
    throw Error("userId required to identify receipt owner")
  }

  if (mProgressAction)
    document.monetization.removeEventListener('monetizationprogress', mProgressAction)

  let prevTime = null
  document.monetization.addEventListener('monetizationprogress',
                                         mProgressAction = async (ev) => {
    if (prevTime + waitBeforeNextRecipe > Date.now()) return
    prevTime = Date.now()
    if (!activeMedia) return // media removed from dom
    if (!ev.detail?.receipt)
      return console.log('No receipt fond, skips backend verification')
    ev.detail.userId = userId
    const res = await fetch(mediaOrigin + '/verifyReceipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ev.detail)
    })
    const result = await res.text(),
          success = !isNaN(Number(result))
    if (success) {
      activeMedia.dispatchEvent(new CustomEvent("monetized", {detail: {accountBalance: parseFloat(result)}}))
    } else {
      activeMedia.dispatchEvent(new CustomEvent("monetizeFailed", {detail: result}))
    }
  })
}
