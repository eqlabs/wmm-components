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

// TODO implement
// By setting an initial balance for all new users, you can speed up the inital load by allowing
// them to load some content before the wallet is ready to pay (this can take few seconds).
// Inital balance can also be used to provide some content for all users, while instructing
// them to set up a wallet once the limit of inital "preview" has been reached.
export const newAccountBalance = 0

// Coil sends about 0.03 $ per minute (~ 0.01 XRP),
// to keep video service smooth, keep the required amount below this value.
export const pricePerMinute = 0.00005 // 0.1

// Alternatively the price can be calculated in megabytes
// (in this case set pricePerMinute as null).
export const pricePerMB = null // 0.212 // 0.01,

// TODO figure out how to parse this; now it's read from packages/wmm-utils/backend -folder
export const videoPath = "../../../resources/dinosaur.mp4"

// If you are serving UI assets from different domain, allow CORS requests
export const allowCORS = true