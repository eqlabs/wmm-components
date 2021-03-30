---
id: streamingFileMeta
title: streamingFileMeta.js
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
<h4 className="name" id="getMeta"><span className="type-signature"></span>getMeta<span className="signature">(fileName)</span><span className="type-signature"></span></h4>
<div className="description">
Get cached file meta info. Includes following properties:
seconds, fullPath, type, mime, fileSize and pricePerByte.
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
<td className="name"><code>fileName</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last">file name</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/streamingFileMeta.js.html">streamingFileMeta.js</a>, <a href="pathname:///jsdoc/streamingFileMeta.js.html#line19">line 19</a>
</li></ul></dd>
</dl>
<h4 className="name" id="initStreamingMeta"><span className="type-signature"></span>initStreamingMeta<span className="signature">(mediaPath, config)</span><span className="type-signature"></span></h4>
<div className="description">
Reads all media files in *mediaPath* and caches their meta information,
such has fileSize, media length in seconds, pricePerByte, etc.
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
<td className="name"><code>mediaPath</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last">path to folder where media files are stored.</td>
</tr>
<tr>
<td className="name"><code>config</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">including *pricePerMinute* or *pricePerMB* property.</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/streamingFileMeta.js.html">streamingFileMeta.js</a>, <a href="pathname:///jsdoc/streamingFileMeta.js.html#line33">line 33</a>
</li></ul></dd>
</dl>
<h5>Returns:</h5>
<div className="param-desc">
Promise indicating if meta information has been read.
</div>
</article>
</section>
</div>

