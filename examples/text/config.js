/*
Payment pointer is the address where microtransactions are sent.
Change this to you own address:
(TODO: add instructions for setting up own wallet) */
export const paymentPointer = "$ilp.uphold.com/4m2d2Xn4EUyk"

/*
  Receipt service is used to verify the validity of transactions.
  For more details see: https://webmonetization.org/docs/explainer#flow-overview
  By default uses webmonetization.org's receipt service.
  You can set up you own server (https://github.com/coilhq/receipt-verifier),
  though this requires connecting to interledger livenet which may turn out to be
  challenging at the moment. */
export const receiptService = "https://webmonetization.org/api/receipts/"

export const fullPaymentUrl = receiptService + encodeURIComponent(paymentPointer)

// XRP is the default currency, and current implementation don't allow changing it.
export const assetType = "XRP"

export const mediaPath = "./media/"

// Coil sends about 0.03 $ per minute (~ 0.01 XRP),
// to keep video service smooth, keep the required amount below this value.
export const pricePerWord = 0.000004

// paywallThreshold explained in accounts.js
export const paywallThreshold = 400 * pricePerWord
