---
title: Without backend
---

The simplest way to get started with Web Monetized Multimedia, is to try out he UI components without backend integration.

Simply install the UI components:

```
npm install @eqlabs/wmm-web-components
````

Import the media component you would like to use (```WmmVideo```, ```WmmAudio``` or ```WmmText```), in you Javascript file e.g.:

```
import "./node_modules/@eqlabs/wmm-web-components/WmmVideo.js"
```

And add the component into HTML:

```
<wmm-video skipVerification="true"
           src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
           paymentUrl="$ilp.uphold.com/4m2d2Xn4EUyk"></wmm-video>
```

Note the **skipVerification** attribute. This means that the component won't try to verify the payments by sending receipts to the backend, and assumes that the backend is still willing to stream the media.

For **audio** ```<wmm-audio>``` element has exactly the same attributes as video.

And **text** element ```<wmm-text>``` also includes the **paymentUrl** and **skipVerification** attributes, but *src* is replaced by **media** attribute, that takes in the full text that is shown inside the component.

Look into [streaming](/docs/examples-streaming)- or [text](/docs/examples-text) example on how to implement the component with backend verification included.

