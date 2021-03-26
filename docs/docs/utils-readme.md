---
title: Utils overview
---

Utils package include general utils modules used in building Web Monetized applications.

## Backend

- [accounts](/docs/accounts) - Handles user specific accounts storing the payment balance of each user.
- [receipt](/docs/receipt) - Verifies that receipts sent from browser matches the data in recipe service. Increases user account balance accordingly.
- [streamingFileMeta](/docs/streamingFileMeta) - Analyses media files (audio and video), including their price per byte value.
- [pipeStream](/docs/pipeStream) - Handles media file streams from backend to browser, making payments on the fly.
- [text](/docs/text) - Parses text file contents, including word counts that are used in calculating their price.


## Client

- [monetize](/docs/monetize) - Handles &lt;meta name="monetization"&gt; -tag and monetization events.
- [user](/docs/user) - Remembers users by storing a random uuid in the browser.
- [client](/docs/client) - small utils functions.
