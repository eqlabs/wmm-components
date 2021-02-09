
// takes monetization event's detail property as parameter
export function formattedAmout({amount, assetScale}) {
  return (amount * Math.pow(10, -assetScale)).toFixed(assetScale)
}

export function logEvent(text, target, append){
  if (!target) return
  const pre = document.createElement('pre')
  pre.textContent = text
  if (append)
    target.appendChild(pre)
  else
    target.insertBefore(pre, target.firstChild)
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

