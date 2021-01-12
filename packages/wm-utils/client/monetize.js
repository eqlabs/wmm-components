import { logEvent } from '/wm-utils/client/index.js'

const getMetaTag = () => document.querySelector("head meta[name=monetization]")

// NOTE: separate receiptService deprecated for now
export function addMetaTag(paymentUrl, receiptService) {
  if (getMetaTag()) {
    return alert("Monetization meta tag already exists, unable to add new.")
  }
  var mTag = document.createElement('meta')
  mTag.name = "monetization"
  // if (receiptService) {
  //   paymentPointer = receiptService + encodeURIComponent(paymentPointer)
  // }
  mTag.content = paymentUrl
  document.head.appendChild(mTag)
}

export function pipeReceiptEventsToBackend(userId) {
  if (!getMetaTag()) {
    throw Error("addMetaTag (payment address) before piping payment events")
  }
  if (!userId) {
    throw Error("userId required to identify receipt owner")
  }
  document.monetization.addEventListener('monetizationprogress', async (ev) => {
    if (!ev.detail?.receipt)
      return console.log('no receipt', ev)
    ev.detail.userId = userId
    const res = await fetch('/verifyReceipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ev.detail)
    })
    logEvent(await res.text(), document.body, true) // TEMP
  })
}
