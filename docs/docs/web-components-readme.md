---
title: Web Components Overview
---

Web Components include three media components:

- [WmmAudio](/docs/WmmAudio) - Wrapper for &lt;audio&gt; element with monetization features.
- [WmmVideo](/docs/WmmAudio) - Wrapper for &lt;video&gt; element with monetization features.
- [WmmText](/docs/WmmAudio) - &lt;WmmText&gt; element shows articles paragraph by paragraph, assuming users account has sufficient funds.

A helper component:

- [WmmNotification](/docs/WmmNotification) - When there are problems realted to monetization, shows the error state within a media components.

And a couple utils modules:

- [common](/docs/common) - Sets the **src** URL and binds notifications for each three media components.
- [videoAndAudio](/docs/videoAndAudio) - common utils used by both &lt;WmmAudio&gt; and &lt;WmmVideo&gt; components.