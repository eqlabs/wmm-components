
// TODO: currently duplicate!

// takes monetization event detail as parameter
export function formattedAmout({amount, assetScale}) {
  return (amount * Math.pow(10, -assetScale)).toFixed(assetScale)
}

export function addMetaTag(paymentPointer, receiptService) {
  if (document.querySelector("head meta[name=monetization]")) {
    return alert("Monetization meta tag already exists, unable to add new.")
  }
  var mTag = document.createElement('meta')
  mTag.name = "monetization"
  if (receiptService) {
    paymentPointer = receiptService + encodeURIComponent(paymentPointer)
  }
  mTag.content = paymentPointer
  document.head.appendChild(mTag)
}

export function logEvent(text, target, append){
  const pre = document.createElement('pre')
  pre.textContent = text
  if (append)
    target.appendChild(pre)
  else
    target.insertBefore(pre, target.firstChild)
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

