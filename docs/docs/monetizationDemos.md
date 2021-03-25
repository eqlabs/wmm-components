---
title: Monetization API demos
---

Monetization demos help you to get started in understanding how [Web Monetization API](https://webmonetization.org/) works. These are also a good starting points to make sure your wallet is installed properly.

So first you need to make sure that you have a [sending wallet](/docs/wallet-sending) installed. In case of **monetisationEvents.html** it's enough to use the [Web Monetization Simulator](https://dev.to/gustavogr/web-monetization-simulator-dnc).

You also need to serve the HTML files using some static file server for both of the demos to work, e.g. live-server:

    > npm install live-server -g
    > live-server


## monetisationEvents.html

Displays the status of Web Monetization and logs all of the monetization events. If you don't see any events appearing you can try looking into the browser console and make sure you have your wallet properly installed.

For more details on the monetization events look into the [API description](https://webmonetization.org/docs/api).


## monetizationWithRecipes.html

Similar to **monetisationEvents.html** but with receipts included. Receipts are created by a third party service, that allows the backend to verify the payments the browsers wallet extension makes. Without the receipts, the backend would need to fully trust the payment data sent by the browser, which can be easily manipulated.

You can find more detailed explanation on [Receipt Verifier Service's
here](https://webmonetization.org/docs/receipt-verifier/).

**wmm-components** use a receipt service provided by the *webmonetization.org*. It is possible to also install your [own receipt service](https://webmonetization.org/docs/receipt-verifier#install-the-receipt-verifier-service-package), though in practice this is quite cumbersome, since it requires connecting to *Interledger*s livenet, which is permissioned because of fiat gateways.

For a new project it is probably a good idea to start by using the *webmonetization.org*'s receipt verifier, and when the project becomes big enough to payback the effort, intall you own service.