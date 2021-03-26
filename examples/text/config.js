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

// Coil sends about 0.03 $ per minute (~ 0.01 XRP).
export const pricePerWord = 0.000004

// Setup a paywallThreshold to give all users some access to the media
// (more details in accounts.js). By default this is set to zero, to make
// it easer to set a proper pricePerWord value first.
export const paywallThreshold = 0 * pricePerWord