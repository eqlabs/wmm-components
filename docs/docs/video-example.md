---
title: Video
---

The easiest way to start monetizing your videos is to copy the ```examples/videoWithBackend``` as your base project. Here we go through some of the components being used, so you can modify them to better suit your application.

## Startup

```
npm run videoExample
```

## Example

<div id="video-container">
(reload this page after starting the videoExample backend with the command above)
</div>

import './../../examples/videoWithBackend/client.js'


## Frontend

Import the web component from HTML:

```HTML
<script src="packages/wmm-web-components/videoComponent.js"
        type="module">
</script>
```

Or from JS:

```
import './packages/wmm-web-components/videoComponent.js'
```


And insert it into a HTML page:

```
<wmm-video src="[video source url]"
           paymentURL="[recipe service url with payment pointer]">
</wmm-video>
```

## Backend


The backend has three main tasks:
- Verifies receipts that it receives from the frontend.
- Serves the video data to the frontend.
- Handles a user specific account, where valid receipts increase the balance and sendind data to the frontend deducts from it.

When balance is close to zero, it waits for new receipts before serving the data to the frontend.

## Config

The required cost for the video is typically defined in time (minutes) but it is also possible to define it in the amount of data being transferred (megabytes).

The cost, payment address and many other details can be modified in ```config.js``` file.

