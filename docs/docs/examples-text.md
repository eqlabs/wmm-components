---
title: Text
---

First, make sure you have a [sending wallet](/docs/wallet-sending) installed. With the wallet, you can try out the [online demo](http://138.68.84.249:3008/).

Choose the article from the top links. Now the article will start loading paragraph by paragraph, with each paragraph checking if enough payments have been made to load it.

New paragraphs will keep on loading as long as there is space on the page to show new text (i.e. "inifinite scroll") and the article hasn't reached its end.

## Install locally

Make sure you have [GIT](https://git-scm.com/) and recent [node.js](https://nodejs.org/en/download/) installed, clone the [wmm-components](https://github.com/eqlabs/wmm-components) git repository, and run the following command from its root:

    npm install exampleText

## Frontend

    <wmm-text src="enpoint for retrieving the paragraphs"
              paymentUrl="Payment pointer URL, can also include receipt service url"
              media="The text can be also passed in media attribute, which don't require a backend at all, but is not secure as it is directly accessible from the browser">
    </wmm-text>

Import the ```packages/wmm-web-componets/WmmText.js``` module and add ```<wmm-text>``` element into the DOM where the component shold appear.

**src** points to the text file stored in **/media** folder and text is loaded pyragraph by paragraph (e.g. /media/Lorem info.txt/1 returns first paragraph of *Lorem info* file).

In this example **paymentUrl** is defined in *config.js*.

**media** attribute is used for simple pure frontend version of component (similar to **skipVerification** in [audio](/docs/examples-audio) and [video](/docs/examples-video).

## Backend

The backend:
- Verifies [receipts](/docs/receipt) that it receives from the frontend.
- Parses the text files found in */media* folder and server them paragraph by paragraph to the frontend.
- Handles a user specific [account](/docs/accounts), where valid receipts increase the balance and sending text to frontend deducts from it.
- Server all the files found in **public** and **packages** folders to the frontend.

When balance is close to zero, it waits for new receipts before serving more text to the frontend.

## Config

In ```examples/text/config.js``` folder you can define properties like **paymentPointer** (the address where payments are made into) and **pricePerWord** (how much must be payed before text can be sent to the user).