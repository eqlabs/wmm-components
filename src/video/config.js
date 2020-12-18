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
  "receiptService": "https://webmonetization.org/api/receipts/"

}