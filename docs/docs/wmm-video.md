---
title: Video Web Component
---

```<wmm-video>``` creates a video element with Web Monetization payments.

## Attributes

```
<wmm-video
  src="video file source"
  paymentUrl="Payment pointer URL, can also include receipt service url"
  skipVerification="if truish, don't send receipts to backend for verifications">
</wmm-video>
```

## Events

Use __addEventListener__ and __removeEventListener__ to bind to events relating to monetization state and events coming from video element.

WM: mediaMonetizationStopped, monetized, monetizeFailed

Default video element events, including media events:
https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

## Styles

Classes: __data-pending__, __data-ok__, __data-stalled__

