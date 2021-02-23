---
id: receipt
---
<!--link type="text/css" rel="stylesheet" href="/jsDoc.css"></link-->
<div id="main">

<section>
<header>
<h2></h2>
</header>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<h3 class="subsection-title">Members</h3>
<h4 class="name" id="assumedAssetScale"><span class="type-signature">(constant) </span>assumedAssetScale<span class="type-signature"></span></h4>
<div class="description">
assetScale can't be verified using receipt service (https://github.com/coilhq/receipt-verifier/issues/27)
so it is hard coded and assumed to be 9 (this is used by coil wallet)
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy"><li>
<a href="pathname:///jsdoc/receipt.js.html">receipt.js</a>, <a href="pathname:///jsdoc/receipt.js.html#line8">line 8</a>
</li></ul></dd>
</dl>
<h3 class="subsection-title">Methods</h3>
<h4 class="name" id="verifyReceipt"><span class="type-signature"></span>verifyReceipt<span class="signature">('monetizationprogress', backends)</span><span class="type-signature"></span></h4>
<div class="description">
Verifies receipt by sending it to the recipt verifier service and modifying the users account balance accordigly.
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>'monetizationprogress'</code></td>
<td class="type">
<span class="param-type">*</span>
</td>
<td class="description last">event's detail property, with userId included.</td>
</tr>
<tr>
<td class="name"><code>backends</code></td>
<td class="type">
<span class="param-type">*</span>
</td>
<td class="description last">JSON config</td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy"><li>
<a href="pathname:///jsdoc/receipt.js.html">receipt.js</a>, <a href="pathname:///jsdoc/receipt.js.html#line15">line 15</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

