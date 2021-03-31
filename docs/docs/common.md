---
id: common
title: common.js
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
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="bindNotifications"><span className="type-signature"></span>bindNotifications<span className="signature">(wmm, inside)</span><span className="type-signature"></span></h4>
<div className="description">
Binds monetization state notifications to a given component.
The notification is shown when an error event is emitted from the component,
and hidden when an OK event is emitted.
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
<td className="description last">WmmAudio, WmmVideo or WmmText instance.</td>
</tr>
<tr>
<td className="name"><code>inside</code></td>
<td className="type">
<span className="param-type">boolean</span>
</td>
<td className="description last">adds notification inside the element as its last child</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/common.js.html">common.js</a>, <a href="pathname:///jsdoc/common.js.html#line59">line 59</a>
</li></ul></dd>
</dl>
<h4 className="name" id="getErrorStateText"><span className="type-signature"></span>getErrorStateText<span className="signature">()</span><span className="type-signature"> &rarr; &#123;string&#125;</span></h4>
<div className="description">
Maps Web Monetization state (in document.monetization) to a text that
can be notified to the user.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/common.js.html">common.js</a>, <a href="pathname:///jsdoc/common.js.html#line34">line 34</a>
</li></ul></dd>
</dl>
<h5>Returns:</h5>
<div className="param-desc">
Monetization state text
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span className="param-type">string</span>
</dd>
</dl>
<h4 className="name" id="setUrl"><span className="type-signature"></span>setUrl<span className="signature">(wmm, url)</span><span className="type-signature"></span></h4>
<div className="description">
A helper for setting WMM web component *src*. Adds userId to the URL
and starts loading the content either by passing the URL to the inner
media element (in case of audio and video) or by calling a specific
load method (in case of text).
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
<td className="description last">WmmAudio, WmmVideo or WmmText instance.</td>
</tr>
<tr>
<td className="name"><code>url</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last">URL or</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/common.js.html">common.js</a>, <a href="pathname:///jsdoc/common.js.html#line12">line 12</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

