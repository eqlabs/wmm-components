---
title: Streaming backend
---

Both audio and video components use the same backend as an example implementation. It is called "streaming backend", since it transforms audio and video files into streams, that are sent to the frontend in accordance to the payments made by the Web Monetization wallet.

## Tasks

The backend has three main tasks:
- Verifies receipts that it receives from the frontend.
- Serves the video and audio file streams to the frontend.
- Handles a user specific account, where valid receipts increase the balance and streaming data to the frontend deducts from it.

When balance is close to zero, it waits for new receipts before serving the data to the frontend.

TODO: when there is some error with payments, shows a notification component.

## Config

The required cost for the video is typically defined in time (minutes) but it is also possible to define it in the amount of data being transferred (megabytes).

The cost, payment address and many other details can be modified in ```config.js``` file.
