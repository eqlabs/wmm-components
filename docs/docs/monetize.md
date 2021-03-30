---
id: monetize
title: monetize.js
---

<!-- DO NOT EDIT - this is generated from source code using updateDocs.js -->

<div id="main">

<section>
<header>
<h2></h2>
</header>
<article>
<div className="container-overview">
<dl className="details">
</dl>
</div>
<h3 className="subsection-title">Members</h3>
<h4 className="name" id="monetizeEvents"><span className="type-signature">(constant) </span>monetizeEvents<span className="type-signature"></span></h4>
<div className="description">
A Set including names of all events that Web Monetization API
(document.monetization) emits.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/monetize.js.html">monetize.js</a>, <a href="pathname:///jsdoc/monetize.js.html#line9">line 9</a>
</li></ul></dd>
</dl>
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="initMediaMonetization"><span className="type-signature"></span>initMediaMonetization<span className="signature">(wmm)</span><span className="type-signature"></span></h4>
<div className="description">
Initializes monetization of WmmAudio or WmmVideo instance.
Monetization is started when the instance in inserted in DOM and only
one media can be monetizad at a time (limit of WM API).
For this reason, the monetize.js module tracks the currently active
media, and emits a 'mediaMonetizationStopped' event on the previously
active media, when a new media takes its place a the actively monetized
media.
</div>
<h5>Parameters:</h5>
<table className="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th className="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td className="name"><code>wmm</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">WmmAudio or WmmVideo instance</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/monetize.js.html">monetize.js</a>, <a href="pathname:///jsdoc/monetize.js.html#line44">line 44</a>
</li></ul></dd>
</dl>
<h4 className="name" id="updateMedia"><span className="type-signature"></span>updateMedia<span className="signature">()</span><span className="type-signature"></span></h4>
<div className="description">
This is a description of updateMedia
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/monetize.js.html">monetize.js</a>, <a href="pathname:///jsdoc/monetize.js.html#line21">line 21</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

