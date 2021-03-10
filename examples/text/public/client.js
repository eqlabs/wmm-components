import '../../../packages/wmm-web-components/wmmText.js'
import {fullPaymentUrl} from '../config.js'

// Add video element to the dom
const wmm = document.createElement('wmm-text')
wmm.src = `http://localhost:3008/media/post2.txt`
wmm.paymentUrl = fullPaymentUrl
document.body.appendChild(wmm)