import '../../../packages/wmm-web-components/WmmText.js'
import {fullPaymentUrl} from '../config.js'
import mediaFiles from './mediaFiles'

const linksEl = document.querySelector('#mediaLinks'),
      mediaEl = document.querySelector('#mediaContent')

async function initMediaLinks() {
  for (const fileName of mediaFiles) {
    const a = document.createElement('a')
    a.href = '#'
    a.textContent = fileName.split('.')[0]
    a.addEventListener('click', () => {
      showMedia(fileName)
    })
    linksEl.appendChild(a )
  }
}

initMediaLinks()

function showMedia(fileName) {
  mediaEl.innerHTML = ''
  const wmm = document.createElement('wmm-text')
  wmm.src = `http://localhost:3008/media/${fileName}`
  wmm.paymentUrl = fullPaymentUrl
  // wmm.setAttribute('media', "Some text.\n\nFoo bar.")
  mediaEl.appendChild(wmm)
}
