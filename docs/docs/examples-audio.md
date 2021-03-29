---
title: Audio
---

First, make sure you have a [sending wallet](/docs/wallet-sending) installed. With the wallet, you can try out the [online audio demo](http://138.68.84.249:3009/). Click the webmonetization.mp3 link to open an ```<wmm-audio>``` element.

To install the demo locally on your computer, install the [streaming backend](/docs/examples-streaming).

In this document we will look more deeply into ```<wmm-audio>``` component and how it interacts with the backend.

## Syntax

```
<wmm-audio
  src="audio file source; if full URL is used, the recipe verification will use the same host for verification"
  paymentUrl="Payment pointer URL, can also include receipt service url"
  skipVerification="if true, don't send receipts to backend for verifications">
</wmm-audio>
```

## Interaction

```<wmm-audio>``` component includes a native ```<audio>``` element, which, in accordance to HTML5 specs, loads and creates an audio player.

```<wmm-audio>``` adds Web Monetization features around the ```<audio>``` by sending payments to address defined in **paymentUrl** attribute.

The audio is loaded from an URL defined by **src** attribute. The same [server](/docs/examples-streaming) hosting the audio also tracks payments made to the *paymentUrl* address.

These payments are tracked using a [receipt service](/docs/monetizationDemos#monetizationwithrecipeshtml). And when [adequate amount](/docs/examples-streaming#config) of payments have been made, the backend [streams](/docs/pipeStream) the media to browser.


## Without receipts

When **skipVerification** attribute is set to **true**, the UI component won't send **receipt**s to the backend. The assumption here is that the backend is willing to stream the media without verifying payments using receipt service.

In this mode the media can be loaded from any typical server hosting video files and the payments can still be sent to the *paymentAddress*. But in this mode the backend is unable to verify if the payments have actually been made.

## Frontend

Import the web component from HTML:

```HTML
<script src="packages/wmm-web-components/WmmAudio.js"
        type="module">
</script>
```

Or from JS:

```
import 'packages/wmm-web-components/WmmAudio.js'
```

And add ```<wmm-audio>``` element into the DOM.