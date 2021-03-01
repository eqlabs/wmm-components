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

export const mediaPath = "./media/"
