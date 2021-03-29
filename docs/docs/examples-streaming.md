---
title: Streaming backend
---

Both audio and video components use the same backend as an example implementation. It is called "streaming backend", since it transforms audio and video files into streams, that are sent to the frontend in accordance to the payments made by the [sending wallet](/docs/wallet-sending).

## Startup

To start the server, simply run the following comman in terminal from root folder:

    npm run streamingExample

This will both install the required **npm** packages and start the streaming backend.

Alternative you can start the server in development mode with following commands

    cd examples/audioAndVideo
    npm install
    npm install -g nodemon
    npm run dev

Running the server with **nodemon** will make it restart on every file change, speeding up the development process.

## New project

When starting a new project you have two options: either to use the current example project and morph it into your own project, or create another backend for your project and use the *audioAndVideo* backend only for streaming the media files and checking Web Monetization receipts.

In the latter case you can delete the files in the *public* folder and you may also want to limit the CORS requests to only your own servers (by default all CORS requests are allowed).

## Tasks

The backend has three main tasks:
- Verifies [receipts](/docs/receipt) that it receives from the frontend.
- Serves the video and audio files [streams](/docs/pipeStream) located in */media* -folder to the frontend.
- Handles a user specific [account](/docs/accounts), where valid receipts increase the balance and streaming data to the frontend deducts from it.

When balance is close to zero, it waits for new receipts before serving the data to the frontend.

## Config

The required cost for the video is typically defined in time (minutes) but it is also possible to define it in the amount of data being transferred (megabytes).

The cost, payment address and many other details can be modified in ```examples/audioAndVideo/config.js``` file.