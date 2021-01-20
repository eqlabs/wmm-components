import fetch from 'node-fetch'
import {deposit} from '../backend.js'

// assetScale can't be verified using receipt service (https://github.com/coilhq/receipt-verifier/issues/27)
// so it is hard coded and assumed to be 9 (this is used by coil wallet)
const assumedAssetScale = 9

export async function verifyReceipt({amount, paymentPointer, receipt, requestId, userId, assetScale},
                                    {receiptService}) {
  if (assetScale !== assumedAssetScale)
    throw Error("unexpected assetScale")
  const spspEndpoint = decodeURIComponent(
    paymentPointer.replace(receiptService,'')
  )
  let receiptRes = await fetch(receiptService + 'verify', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: receipt
  })
  receiptRes = await receiptRes.text()
  try {
    receiptRes = JSON.parse(receiptRes)
  } catch (err) {
    console.error("Failed to parse receiptRes service response: ", receiptRes)
    return receiptRes
  }
  if (spspEndpoint != receiptRes.spspEndpoint) {
    throw Error("spspEndpoint sent by client and receipt service don't match.")
  }
  const serviceAmount = parseInt(receiptRes.amount)
  if (parseInt(amount) > serviceAmount) {
    // NOTE: the amount sent be recipe service can be bigger than the one sent by client,
    // since the recipe service combines the amount of all payments before previous verification.
    const msg = `Error: Amount send by client (${parseInt(amount)}) is bigger than the one from recipe service (${serviceAmount}).`
    console.log(msg)
    // NOTE: for some reason sometimes recipe service sends smaller amount than client.
    // If this happens a lot, those amounts could also be deposited (based on serviceAmount).
    return msg
  }
  return deposit(userId, serviceAmount / 10**assetScale)
}