---
id: receipt
title: receipt.js
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
<h4 className="name" id="assumedAssetScale"><span className="type-signature">(constant) </span>assumedAssetScale<span className="type-signature"></span></h4>
<div className="description">
assetScale can't be verified using receipt service (https://github.com/coilhq/receipt-verifier/issues/27)
so it is hard coded and assumed to be 9 (this is used by coil wallet)
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/receipt.js.html">receipt.js</a>, <a href="pathname:///jsdoc/receipt.js.html#line8">line 8</a>
</li></ul></dd>
</dl>
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="verifyReceipt"><span className="type-signature"></span>verifyReceipt<span className="signature">('monetizationprogress', backends)</span><span className="type-signature"></span></h4>
<div className="description">
Verifies receipt by sending it to the recipt verifier service and modifying the users account balance accordigly.
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
<td className="name"><code>'monetizationprogress'</code></td>
<td className="type">
<span className="param-type">*</span>
</td>
<td className="description last">event's detail property, with userId included.</td>
</tr>
<tr>
<td className="name"><code>backends</code></td>
<td className="type">
<span className="param-type">*</span>
</td>
<td className="description last">JSON config</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/receipt.js.html">receipt.js</a>, <a href="pathname:///jsdoc/receipt.js.html#line15">line 15</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

