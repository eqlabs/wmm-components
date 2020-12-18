// DUPLICATE! this is older than one in video/client


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