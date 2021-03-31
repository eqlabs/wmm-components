---
id: intro
title: Introduction
slug: /
---

Web Monetization (WM) is a new technology allowing content creators to easily receive money from their digital goods. **[wmm-components](https://github.com/eqlabs/wmm-components)** includes a **collection of components**, that allow creators of media (whether **video**, **audio** or **text**) to start receiving money with a simple installation and configuration file.

## Quickstart

To receive money from the people viewing the website, you need to first set up a [receiving wallet](/docs/wallet). After that simply follow the instructions based on the type of content you want to show on your website: [video](/docs/examples-video), [audio](/docs/examples-audio) or [text](/docs/examples-text).

If you'd like to learn more on the technical specifics of how Web Monetization works, you can try out the [Monetization API demos](/docs/monetizationDemos).

## Project structure

**wmm-components** repository is divided into library code found in *packages* folder and example applications found in *examples* folder.

The packages are further divided into general [Utils](/docs/utils-readme) modules (for both backend and frontend code) and UI specific [Web Components](/docs/web-components-readme).

## Basic idea

**wmm-components** keep track of user specific [accounts](/docs/accounts) incrementing them according to [payments made by users](/docs/wallet-sending) and decrementing them according to the amount of [media](/docs/web-components-readme) consumed by users. When the balance reaches zero, the media is paused until new payments have been made.

##  Donation or payment?

Web Monetization's purpose can seem somewhat ambiguous when you start using it. It can be used both purely as a donation (the content is shown to everyone regardless if they pay or not) or as a typical payment (only the people who pay can see any content).

Still, using WM purely as a payment is somewhat problematic, since there are no API's for negotiating the price. If you're looking to sell single units of your product it may be more useful to look into the *[Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)*.

On the otherhand, if you want an efortless way to profit from your content that doesn't disturb your users with recurring payment requests, Web Monetization can be a perfect match.

**wmm-components** takes a midway approach of providing some content for all users, while revealing the full experience only for monetized users. This is achieved by setting up a [paywallThreshold](/docs/accounts#paywallThreshold), which allows all users to consume a chosen amount of content, before they are prompted to set up a wallet to continue the experience.

## Currency

While WM is aiming to become a web stardard and the API is agnostic of the specific currencry being used, in its current state of development **XRP** is the currency with best support. Still, the [receiving wallets](/docs/wallet) also function as exchanges, where you can easily swap your revenue to an another currency, if you so choose to.