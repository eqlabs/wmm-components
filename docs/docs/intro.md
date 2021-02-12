---
id: intro
title: Introduction
slug: /
---

Web Monetization (WM) is a new technology allowing content creators to easily receive money from their digital goods. This collection of components allows media creators (video, audio and text) to start using WM with a simple installation and configuration file, wihtout the need to dig too deeply in the weeds of a new technology and its evolving implementation details.

## Quickstart

To receive money from the people viewing the website, you need to first set up a [wallet](/docs/wallet). After that simply follow the instructions based on the type of content you want to show you your website: [video](/docs/examples-video), [audio](/docs/examples-audio) or [text](/docs/examples-text).

##  Donation or payment?

Web Monetization's purpose can seem somewhat ambiguous when you start using it. It can be used both purely as a donation (the content is shown to everyone regardless if they pay or not) or as a typical payment (only the people who pay can see any content).

Still, using WM purely as a payment is somewhat problematic, since there are no API's for negotiating the price. If you're looking to sell single units of your product it may be more useful to look into the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).

On the otherhand, if you want an efortless way to profit from your content that doesn't disturb your users with recurring payment requests, Web Monetization can be a perfect match.

The recommended way of using WM, is to provide some content for all users, while revealing the full experience only for monetized users. One easy way to do this, is to set up an inital account balance for all new users ("newAccountBalance" in config.js). This allows also non-paying users to consume a chosen amount of content, before they are prompted to set up a wallet to continue the experience.

## Currency

While WM is aiming to become a web stardard and the API is agnostic of the specific currencry being used, in its current state of development XRP is the currency with best support. Still, the [wallets](/docs/wallet) also function as exchanges, where you can easily swap your revenue to an another currency, if you so choose to.

## Browser support

...


## License

...