---
title: Audio
---

First, startup the [streaming backend](/docs/examples-streaming). This is used by both audio and video examples. You can try out both by either choosing .mp3 file for audio or .mp4 file for video.



.....

Audio components are great for playing music, podcast or any audo file you'd like present to your audience. Audio web components can be easily included into any existing Javascript framework you might be using and work on all modern browsers.

## Example

<div id="media-container">
(execute __npm run streamExample__ at the root of ___wmm-components___ project to show example audio here)
</div>

import {MediaImport} from './utils.js'

<MediaImport url="/examples/audioAndVideo/client.js" media="webmonetization.mp3"></MediaImport>


## Startup

(instructions on the easiest way to create a new project with streamingExample as the base)



## Frontend

Import the web component from HTML:

```HTML
<script src="packages/wmm-web-components/audioComponent.js"
        type="module">
</script>
```

Or from JS:

```
import './packages/wmm-web-components/audioComponent.js'
```


And insert it into a HTML page:

```
<wmm-audio src="[audio source url]"
           paymentURL="[recipe service url with payment pointer]">
</wmm-audio>
```

