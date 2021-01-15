import { logEvent } from '/wm-utils/client/index.js'

const getMetaTag = () => document.querySelector("head meta[name=monetization]")

export const setPaymentPointerWithReceiptService = (paymentPointer, receiptService) =>
  setPaymentUrl(receiptService + encodeURIComponent(paymentPointer))

export function setPaymentUrl(paymentUrl) {
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

export function pipeReceiptEventsToBackend(userId) {
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
    logEvent(await res.text(), document.body, true) // TEMP
  })
}
