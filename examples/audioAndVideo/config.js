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

// Coil sends about 0.03 $ per minute (~ 0.01 XRP),
// to keep video service smooth, keep the required amount below this value.
export const pricePerMinute = 0.1

// Alternatively the price can be calculated in megabytes
// (in this case set pricePerMinute as null).
export const pricePerMB = null // 0.212 // 0.01,

// Two minutes of free media; more details in accounts.js
export const paywallThreshold = 0.1 * pricePerMinute

// TODO figure out how to parse this; now it's read from packages/wmm-utils/backend -folder
export const mediaPath = "./media/" //"../../../resources/dinosaur.mp4"

// If you are serving UI assets from different domain, allow CORS requests
export const allowCORS = true

// Environment variables and defaults for backend location
export const WMM_AUDIO_VIDEO_PORT = process.env.WMM_AUDIO_VIDEO_PORT || '3009'
export const WMM_AUDIO_VIDEO_HOST = process.env.WMM_AUDIO_VIDEO_HOST || 'localhost'
