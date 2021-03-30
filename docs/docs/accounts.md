---
id: accounts
title: accounts.js
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
<h4 className="name" id="accounts"><span className="type-signature">(constant) </span>accounts<span className="type-signature"></span></h4>
<div className="description">
Handles user specific accounts with **balance**s that increase
with **deposit**s from receipt verified WebMonetization payments
and are **deduct**ed when streaming media data to the client.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/accounts.js.html">accounts.js</a>, <a href="pathname:///jsdoc/accounts.js.html#line7">line 7</a>
</li></ul></dd>
</dl>
<h4 className="name" id="paywallThreshold"><span className="type-signature"></span>paywallThreshold<span className="type-signature"></span></h4>
<div className="description">
paywallThreshold has two functions:
1. Speed up the inital load of media by allowing some content to be loaded
before the wallet is ready to pay (this can take few seconds).
2. Create a "preview" mode where some content can be shown also to users
that don't have wallet set up, while instructing them to set up a wallet
once the initial balance has run out.
</div>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/accounts.js.html">accounts.js</a>, <a href="pathname:///jsdoc/accounts.js.html#line17">line 17</a>
</li></ul></dd>
</dl>
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="balance"><span className="type-signature"></span>balance<span className="signature">(userId)</span><span className="type-signature"> &rarr; &#123;number&#125;</span></h4>
<div className="description">
Get users specific account balance. Creates and returns
initial amount for new users ("paywallThreshold"),
if user don't exist.
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
<a href="pathname:///jsdoc/accounts.js.html">accounts.js</a>, <a href="pathname:///jsdoc/accounts.js.html#line27">line 27</a>
</li></ul></dd>
</dl>
<h5>Returns:</h5>
<div className="param-desc">
users balance
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span className="param-type">number</span>
</dd>
</dl>
<h4 className="name" id="deposit"><span className="type-signature"></span>deposit<span className="signature">(userId, amount)</span><span className="type-signature"> &rarr; &#123;number&#125;</span></h4>
<div className="description">
Increments user specific account with given amount.
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
<td className="name"><code>userId</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last"></td>
</tr>
<tr>
<td className="name"><code>amount</code></td>
<td className="type">
<span className="param-type">number</span>
</td>
<td className="description last">amount to be deposited</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/accounts.js.html">accounts.js</a>, <a href="pathname:///jsdoc/accounts.js.html#line39">line 39</a>
</li></ul></dd>
</dl>
<h5>Returns:</h5>
<div className="param-desc">
users balance after the deposit.
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span className="param-type">number</span>
</dd>
</dl>
<h4 className="name" id="spend"><span className="type-signature"></span>spend<span className="signature">(userId, amount)</span><span className="type-signature"> &rarr; &#123;boolean&#125;</span></h4>
<div className="description">
Deducts given amount from users account, if the accounts balance is
equal or larger to the given amount.
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
<td className="name"><code>userId</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last"></td>
</tr>
<tr>
<td className="name"><code>amount</code></td>
<td className="type">
<span className="param-type">number</span>
</td>
<td className="description last">to be spent</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/accounts.js.html">accounts.js</a>, <a href="pathname:///jsdoc/accounts.js.html#line51">line 51</a>
</li></ul></dd>
</dl>
<h5>Returns:</h5>
<div className="param-desc">
true for succesfull action, false for failure.
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span className="param-type">boolean</span>
</dd>
</dl>
</article>
</section>
</div>

