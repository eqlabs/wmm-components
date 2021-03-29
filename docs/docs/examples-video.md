---
title: Video
---

First, make sure you have a [sending wallet](/docs/wallet-sending) installed. With the wallet, you can try out the [online video demo](http://138.68.84.249:3009/).Click the ElephantsDream.mp4 link to open an ```<wmm-video>``` element.

To install the demo locally on your computer, install the [streaming backend](/docs/examples-streaming).

In this document we will look more deeply into ```<wmm-video>``` component and how it interacts with the backend.

## Syntax

```
<wmm-video
  src="video file source; if full URL is used, the recipe verification will use the same host for verification"
  paymentUrl="Payment pointer URL, can also include receipt service url"
  skipVerification="if true, don't send receipts to backend for verifications">
</wmm-video>
```

## Interaction

```<wmm-video>``` component includes a native ```<video>``` element, which, in accordance to HTML5 specs, loads and shows the video on the screen.

```<wmm-video>``` adds Web Monetization features around the ```<video>``` by sending payments to address defined in **paymentUrl** attribute.

The video is loaded from an URL defined by **src** attribute. The same [server](/docs/examples-streaming) hosting the video also tracks payments made to the *paymentUrl* address.

These payments are tracked using a [receipt service](/docs/monetizationDemos#monetizationwithrecipeshtml). And when [adequate amount](/docs/examples-streaming#config) of payments have been made, the backend [streams](/docs/pipeStream) the media to browser.


## Without receipts

When **skipVerification** attribute is set to **true**, the UI component won't send **receipt**s to the backend. The assumption here is that the backend is willing to stream the media without verifying payments using receipt service.

In this mode the media can be loaded from any typical server hosting audio files and the payments can still be sent to the *paymentAddress*. But in this mode the backend is unable to verify if the payments have actually been made.

## Frontend

Import the web component from HTML:

```HTML
<script src="packages/wmm-web-components/WmmVideo.js"
        type="module">
</script>
```

Or from JS:

```
import 'packages/wmm-web-components/WmmVideo.js'
```

And add ```<wmm-video>``` element into the DOM.