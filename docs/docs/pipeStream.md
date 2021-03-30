---
id: pipeStream
title: pipeStream.js
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
<h4 className="name" id="createStream"><span className="type-signature"></span>createStream<span className="signature">(path)</span><span className="type-signature"></span></h4>
<div className="description">
Creates readStream from a file.
'highWaterMark' determines the size of data (and payment) chunks.
For audio streaming it's recommended to keep it small (2**13),
since big chunks can cause errors in payment calculation.
On the other hand for video streaming bigger chunks (e.g. 2**16),
can speed up the stream loading.
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
<td className="name"><code>path</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last">to the file</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/pipeStream.js.html">pipeStream.js</a>, <a href="pathname:///jsdoc/pipeStream.js.html#line14">line 14</a>
</li></ul></dd>
</dl>
<h4 className="name" id="pipeMediaIntoStream"><span className="type-signature"></span>pipeMediaIntoStream<span className="signature">(meta, stream, userId)</span><span className="type-signature"></span></h4>
<div className="description">
Listen to file stream *readable* event for piping the data, and close the stream
when no more data to be read.
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
<td className="name"><code>meta</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">streamingFileMeta, including *pricePerByte* property</td>
</tr>
<tr>
<td className="name"><code>stream</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">node.js Readable stream</td>
</tr>
<tr>
<td className="name"><code>userId</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last"></td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/pipeStream.js.html">pipeStream.js</a>, <a href="pathname:///jsdoc/pipeStream.js.html#line40">line 40</a>
</li></ul></dd>
</dl>
<h4 className="name" id="pipeStream"><span className="type-signature">(async) </span>pipeStream<span className="signature">(meta, stream, userId)</span><span className="type-signature"></span></h4>
<div className="description">
Calculates cost of data stream chunk and pipes the stream if is able to pay
that cost. Otherwise waits for new payments and retries in 400ms.
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
<td className="name"><code>meta</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">streamingFileMeta, including *pricePerByte* property</td>
</tr>
<tr>
<td className="name"><code>stream</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">node.js Readable stream</td>
</tr>
<tr>
<td className="name"><code>userId</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last"></td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/pipeStream.js.html">pipeStream.js</a>, <a href="pathname:///jsdoc/pipeStream.js.html#line59">line 59</a>
</li></ul></dd>
</dl>
<h4 className="name" id="prepareStreamCtx"><span className="type-signature"></span>prepareStreamCtx<span className="signature">(ctx, meta)</span><span className="type-signature"></span></h4>
<div className="description">
Set request headers and longer than default timeout for wainting payments.
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
<td className="name"><code>ctx</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">node.js request context</td>
</tr>
<tr>
<td className="name"><code>meta</code></td>
<td className="type">
<span className="param-type">object</span>
</td>
<td className="description last">streamingFileMeta, including *fileSize* and *mime* properties</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/pipeStream.js.html">pipeStream.js</a>, <a href="pathname:///jsdoc/pipeStream.js.html#line27">line 27</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

