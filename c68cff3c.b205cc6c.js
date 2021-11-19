(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return r}));var s=a(3),n=a(7),c=(a(0),a(115)),b={id:"WmmAudio",title:"WmmAudio.js"},l={unversionedId:"WmmAudio",id:"WmmAudio",isDocsHomePage:!1,title:"WmmAudio.js",description:"Class: WmmAudio",source:"@site/docs/WmmAudio.md",slug:"/WmmAudio",permalink:"/wmm-components/docs/WmmAudio",editUrl:"https://github.com/eqlabs/wmm-components/edit/main/docs/docs/WmmAudio.md",version:"current",sidebar:"someSidebar",previous:{title:"Web Components Overview",permalink:"/wmm-components/docs/web-components-readme"},next:{title:"WmmVideo.js",permalink:"/wmm-components/docs/WmmVideo"}},i=[],m={rightToc:i};function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{id:"main"},Object(c.b)("h1",{className:"page-title"},"Class: WmmAudio"),Object(c.b)("section",null,Object(c.b)("header",null,Object(c.b)("h2",null,Object(c.b)("span",{className:"attribs"},Object(c.b)("span",{className:"type-signature"})),"WmmAudio",Object(c.b)("span",{className:"signature"},"()"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"class-description"},"Creates a web monetized audio element <wmm-audio>",Object(c.b)("br",null),"Attributes:",Object(c.b)("br",null),"* src: audio file source; if full URL is used, the recipe verification will use the same host for verification.",Object(c.b)("br",null),"* paymentUrl: Payment pointer URL, can also include receipt service url.",Object(c.b)("br",null),"* skipVerification: if true, don't send receipts to backend for verifications.",Object(c.b)("br",null))),Object(c.b)("article",null,Object(c.b)("div",{className:"container-overview"},Object(c.b)("h2",null,"Constructor"),Object(c.b)("h4",{className:"name",id:"WmmAudio"},Object(c.b)("span",{className:"type-signature"}),"new WmmAudio",Object(c.b)("span",{className:"signature"},"()"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line12"},"line 12")))))),Object(c.b)("h3",{className:"subsection-title"},"Members"),Object(c.b)("h4",{className:"name",id:"src"},Object(c.b)("span",{className:"type-signature"}),"src",Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"description"},"Synchronise wmm-audio elements *src* attribute with inner audio -elements *src* attrubute."),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line17"},"line 17"))))),Object(c.b)("h3",{className:"subsection-title"},"Methods"),Object(c.b)("h4",{className:"name",id:"addEventListener"},Object(c.b)("span",{className:"type-signature"}),"addEventListener",Object(c.b)("span",{className:"signature"},"(name, action)"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"description"},"Event listener for monetization and video events. Binding to monetization events ('monetizationStopped', 'monetized', 'monetizeFailed') allows tracking of monetization state, while all other events are passed to the inner <audio> element and can be used to track the state of the media. E.g. https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events"),Object(c.b)("h5",null,"Parameters:"),Object(c.b)("table",{className:"params"},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Name"),Object(c.b)("th",null,"Type"),Object(c.b)("th",{className:"last"},"Description"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"name"},Object(c.b)("code",null,"name")),Object(c.b)("td",{className:"type"},Object(c.b)("span",{className:"param-type"},"string")),Object(c.b)("td",{className:"description last"},"Event name")),Object(c.b)("tr",null,Object(c.b)("td",{className:"name"},Object(c.b)("code",null,"action")),Object(c.b)("td",{className:"type"},Object(c.b)("span",{className:"param-type"},"function")),Object(c.b)("td",{className:"description last"},"The action to execute on event.")))),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line58"},"line 58"))))),Object(c.b)("h4",{className:"name",id:"connectedCallback"},Object(c.b)("span",{className:"type-signature"}),"connectedCallback",Object(c.b)("span",{className:"signature"},"()"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"description"},"Initializes monetization and styles when component is inserted into DOM."),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line33"},"line 33"))))),Object(c.b)("h4",{className:"name",id:"disconnectedCallback"},Object(c.b)("span",{className:"type-signature"}),"disconnectedCallback",Object(c.b)("span",{className:"signature"},"()"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"description"},"Stops monetization and disconnects the media stream when component is removed from DOM."),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line44"},"line 44"))))),Object(c.b)("h4",{className:"name",id:"removeEventListener"},Object(c.b)("span",{className:"type-signature"}),"removeEventListener",Object(c.b)("span",{className:"signature"},"(name, action)"),Object(c.b)("span",{className:"type-signature"})),Object(c.b)("div",{className:"description"},"Remove monetization or video element listener"),Object(c.b)("h5",null,"Parameters:"),Object(c.b)("table",{className:"params"},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Name"),Object(c.b)("th",null,"Type"),Object(c.b)("th",{className:"last"},"Description"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"name"},Object(c.b)("code",null,"name")),Object(c.b)("td",{className:"type"},Object(c.b)("span",{className:"param-type"},"string")),Object(c.b)("td",{className:"description last"},"Event name")),Object(c.b)("tr",null,Object(c.b)("td",{className:"name"},Object(c.b)("code",null,"action")),Object(c.b)("td",{className:"type"},Object(c.b)("span",{className:"param-type"},"function")),Object(c.b)("td",{className:"description last"},"The action to execute on event.")))),Object(c.b)("dl",{className:"details"},Object(c.b)("dt",{className:"tag-source"},"Source:"),Object(c.b)("dd",{className:"tag-source"},Object(c.b)("ul",{className:"dummy"},Object(c.b)("li",null,Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html"},"WmmAudio.js"),", ",Object(c.b)("a",{href:"pathname:///jsdoc/WmmAudio.js.html#line71"},"line 71")))))))))}r.isMDXComponent=!0},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var s=a(0),n=a.n(s);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),r=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=r(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,s=e.mdxType,c=e.originalType,b=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=r(a),u=s,j=o["".concat(b,".").concat(u)]||o[u]||d[u]||c;return a?n.a.createElement(j,l(l({ref:t},m),{},{components:a})):n.a.createElement(j,l({ref:t},m))}));function j(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=a.length,b=new Array(c);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,b[1]=l;for(var m=2;m<c;m++)b[m]=a[m];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);