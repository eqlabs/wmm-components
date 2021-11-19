
export function logEvent(text, target, append){
  if (!target) return
  const pre = document.createElement('pre')
  pre.textContent = text
  if (append)
    target.appendChild(pre)
  else
    target.insertBefore(pre, target.firstChild)
}

/**
 * Util function that 'sleep's a given time. Use with await, e.g.:
 * await sleep(1000);
 * @param {number} ms milliseconds to sleep
 * @returns Promise that resolves in given time.
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

