export default {
  /*
    Payment pointer is the address where microtransactions are sent.
    Change this to you own address:
    (TODO: add instructions for setting up own wallet) */
  "paymentPointer": "$ilp.uphold.com/4m2d2Xn4EUyk",

  /*
    Receipt service is used to verify the validity of transactions.
    For more details see: https://webmonetization.org/docs/explainer#flow-overview
    By default uses webmonetization.org's receipt service.
    You can set up you own server (https://github.com/coilhq/receipt-verifier),
    though this requires connecting to interledger livenet which may turn out to be
    challenging at the moment. */
  "receiptService": "https://webmonetization.org/api/receipts/",

  // These folders are served publicly by the server
  "publicFolders": {
    "wm-utils": "../wm-utils",
    "wm-web-components": "../wm-web-components",
    // "resources": "../../resources",
  },

  "videoPath": "../../resources/dinosaur.mp4",

  "assetType": "XRP",
  // Coil sends about 0.03 $ per minute (~ 0.01 XRP),
  // to keep video service smooth, keep the required amount below this value.
  "pricePerMinute": 0.1,
  // if pricePerMB is defined, price is calculated based on file *size* instead of length in *time*
  // "pricePerMB": 0.212, // 0.01,
}