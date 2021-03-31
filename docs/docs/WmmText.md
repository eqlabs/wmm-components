---
id: WmmText
title: WmmText.js
---

<!-- DO NOT EDIT - this is generated from source code using updateDocs.js -->

<div id="main">
<h1 className="page-title">Class: WmmText</h1>
<section>
<header>
<h2><span className="attribs"><span className="type-signature"></span></span>WmmText<span className="signature">()</span><span className="type-signature"></span></h2>
<div className="class-description">Creates a monetized text component &lt;wmm-text&gt;<br/>
This component loads new paragraphs with scrolling<br/>
(i.e. when there is room to show more text).<br/>
Attributes:<br/>
* src: enpoint for retrieving the paragraphs.<br/>
* paymentUrl: Payment pointer URL, can also include receipt service url.<br/>
* media: The text can be also passed in media attribute, which don't require a backend at all, but is not secure as it is directly accessible from the browser.<br/></div>
</header>
<article>
<div className="container-overview">
<h2>Constructor</h2>
<h4 className="name" id="WmmText"><span className="type-signature"></span>new WmmText<span className="signature">()</span><span className="type-signature"></span></h4>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line34">line 34</a>
</li></ul></dd>
</dl>
</div>
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="attributeChangedCallback"><span className="type-signature"></span>attributeChangedCallback<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Native event that fires when element attribute changes.
Handle 'media' attribute when changed.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line76">line 76</a>
</li></ul></dd>
</dl>
<h4 className="name" id="connectedCallback"><span className="type-signature"></span>connectedCallback<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Initializes component when inserted into DOM.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line47">line 47</a>
</li></ul></dd>
</dl>
<h4 className="name" id="disconnectedCallback"><span className="type-signature"></span>disconnectedCallback<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Stops monetization when component is removed from DOM.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line68">line 68</a>
</li></ul></dd>
</dl>
<h4 className="name" id="initNotifications"><span className="type-signature"></span>initNotifications<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Binds to default notifications.
Shown on 'paragraphPending' event and hidden on 'paragraphLoaded' event.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line155">line 155</a>
</li></ul></dd>
</dl>
<h4 className="name" id="loadParagraph"><span className="type-signature">(async) </span>loadParagraph<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Load the next paragragh, add it to DOM and start observing when it becomes visible
(which will cause another paragraph to be loaded).
When paragrah is loaded from backend, 'paragraphLoading' and 'paragraphLoaded'
events will be emitted.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line115">line 115</a>
</li></ul></dd>
</dl>
<h4 className="name" id="parseMedia"><span className="type-signature"></span>parseMedia<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Initialize frontend mode, if 'media' attribute exists.
In frontend mode the text is parsed from 'media' attribute,
and not loaded from the backend.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line85">line 85</a>
</li></ul></dd>
</dl>
<h4 className="name" id="startLoadingText"><span className="type-signature"></span>startLoadingText<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
Creates an IntersectionObserver, that calls loadParagraph()
when the last paragragh is visible on the screen.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmText.js.html">WmmText.js</a>, <a href="pathname:///jsdoc/WmmText.js.html#line95">line 95</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

