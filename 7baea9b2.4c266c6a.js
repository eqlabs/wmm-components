(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,d=m["".concat(a,".").concat(u)]||m[u]||b[u]||i;return n?r.a.createElement(d,s(s({ref:t},p),{},{components:n})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),i=(n(0),n(115)),a={title:"Monetization API demos"},s={unversionedId:"monetizationDemos",id:"monetizationDemos",isDocsHomePage:!1,title:"Monetization API demos",description:"Monetization demos help you to get started in understanding how Web Monetization API works. These are also a good starting points to make sure your wallet is installed properly.",source:"@site/docs/monetizationDemos.md",slug:"/monetizationDemos",permalink:"/wmm-components/docs/monetizationDemos",editUrl:"https://github.com/eqlabs/wmm-components/edit/main/docs/docs/monetizationDemos.md",version:"current",sidebar:"someSidebar",previous:{title:"Text",permalink:"/wmm-components/docs/examples-text"},next:{title:"Web Components Overview",permalink:"/wmm-components/docs/web-components-readme"}},c=[{value:"monetisationEvents.html",id:"monetisationeventshtml",children:[]},{value:"monetizationWithRecipes.html",id:"monetizationwithrecipeshtml",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Monetization demos help you to get started in understanding how ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://webmonetization.org/"}),"Web Monetization API"))," works. These are also a good starting points to make sure your wallet is installed properly."),Object(i.b)("p",null,"So first you need to make sure that you have a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/wallet-sending"}),"sending wallet")," installed. In case of ",Object(i.b)("strong",{parentName:"p"},"monetisationEvents.html")," it's enough to use the ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://dev.to/gustavogr/web-monetization-simulator-dnc"}),"Web Monetization Simulator")),"."),Object(i.b)("p",null,"You also need to serve the HTML files using some static file server for both of the demos to work, e.g. live-server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"cd examples/monetization\nnpm install live-server -g\nlive-server\n")),Object(i.b)("h2",{id:"monetisationeventshtml"},"monetisationEvents.html"),Object(i.b)("p",null,"Displays the status of Web Monetization and logs all of the monetization events. If you don't see any events appearing you can try looking into the browser console and make sure you have your wallet properly installed."),Object(i.b)("p",null,"For more details on the monetization events look into the ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://webmonetization.org/docs/api"}),"API description")),"."),Object(i.b)("h2",{id:"monetizationwithrecipeshtml"},"monetizationWithRecipes.html"),Object(i.b)("p",null,"Similar to ",Object(i.b)("strong",{parentName:"p"},"monetisationEvents.html")," but with receipts included. Receipts are created by a third party service, that allows the backend to verify the payments the browsers wallet extension makes. Without the receipts, the backend would need to fully trust the payment data sent by the browser, which can be easily manipulated."),Object(i.b)("p",null,"You can find more detailed explanation on ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://webmonetization.org/docs/receipt-verifier/"}),"Receipt Verifier Service's\nhere")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"wmm-components")," use a receipt service provided by the ",Object(i.b)("em",{parentName:"p"},"webmonetization.org"),". It is possible to also install your ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://webmonetization.org/docs/receipt-verifier#install-the-receipt-verifier-service-package"}),"own receipt service")),", though in practice this is quite cumbersome, since it requires connecting to ",Object(i.b)("em",{parentName:"p"},"Interledger"),"s livenet, which is permissioned because of fiat gateways."),Object(i.b)("p",null,"For a new project it is probably a good idea to start by using the ",Object(i.b)("em",{parentName:"p"},"webmonetization.org"),"'s receipt verifier, and when the project becomes big enough to payback the effort, intall you own service."))}l.isMDXComponent=!0}}]);