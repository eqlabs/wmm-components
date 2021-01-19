import {userId} from './user.js'

const getMetaTag = () => document.querySelector("head meta[name=monetization]")

export const monetizeEvents = new Set(
  ['monetizationStopped', 'monetized', 'monetizeFailed']
)

let media // video or audio that is currently being monetized

function updateMedia(newMedia) {
  if (media && media.paymentUrl !== newMedia.paymentUrl)
    media.dispatchEvent(new CustomEvent('mediaMonetizationStopped',
                            {account: {paymentUrl: media.paymentUrl()}}))
  media = newMedia
}

export function initMediaMonetization(media, paymentUrl, skipBackendVerification) {
  updateMedia(media)
  setPaymentUrl(paymentUrl)
  if (!skipBackendVerification)
    pipeReceiptEventsToBackend()
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

function pipeReceiptEventsToBackend() {
  if (!getMetaTag()) {
    throw Error("setPaymentUrl (payment address) before piping payment events")
  }
  if (!userId) {
    throw Error("userId required to identify receipt owner")
  }
  document.monetization.addEventListener('monetizationprogress', async (ev) => {
    if (!ev.detail?.receipt)
      return console.log('No receipt fond, skips backend verification')
    ev.detail.userId = userId
    const res = await fetch('/verifyReceipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ev.detail)
    })
    const result = await res.text(),
          success = !isNaN(Number(result))
    if (success) {
      media.dispatchEvent(new CustomEvent("monetized", {detail: {accountBalance: parseFloat(result)}}))
    } else {
      media.dispatchEvent(new CustomEvent("monetizeFailed", {detail: result}))
    }
  })
}
