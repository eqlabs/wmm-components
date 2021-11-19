This folder includes small demos that you can use to get familiar with Web Monetization.

monetisationEvents.html can be demoed with Web Monetization Simulator which don't require actual money transfers (https://dev.to/gustavogr/web-monetization-simulator-dnc).

monetizationWithRecipes.html requires actual money transfers (with Coil wallet, https://coil.com/). Recipes is the technology used in the wmm-components to verify the payments on the backend.

You need to serve the HTML files using some static file server for both of the demos to work, e.g. live-server:

> npm install live-server -g
> live-server