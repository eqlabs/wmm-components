---
id: WmmVideo
---
<!--link type="text/css" rel="stylesheet" href="/jsDoc.css"></link-->
<div id="main">
<h1 className="page-title">Class: WmmVideo</h1>
<section>
<header>
<h2><span className="attribs"><span className="type-signature"></span></span>WmmVideo<span className="signature">()</span><span className="type-signature"></span></h2>
<div className="class-description">Creates a web monetized video element. E.g.:
<pre>&lt;wmm-video
src="video file source; if full URL is used, the recipe verification will use the same host for verification"
paymentUrl="Payment pointer URL, can also include receipt service url"
skipVerification="if true, don't send receipts to backend for verifications"&gt;</pre></div>
</header>
<article>
<div className="container-overview">
<h2>Constructor</h2>
<h4 className="name" id="WmmVideo"><span className="type-signature"></span>new WmmVideo<span className="signature">()</span><span className="type-signature"></span></h4>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmVideo.js.html">WmmVideo.js</a>, <a href="pathname:///jsdoc/WmmVideo.js.html#line12">line 12</a>
</li></ul></dd>
</dl>
</div>
<h3 className="subsection-title">Methods</h3>
<h4 className="name" id="addEventListener"><span className="type-signature"></span>addEventListener<span className="signature">(name, action)</span><span className="type-signature"></span></h4>
<div className="description">
Event listener for monetization and video events.
Binding to monetization events ('monetizationStopped', 'monetized', 'monetizeFailed')
allows tracking of monetization state, while all other events are passed
to the inner &lt;video&gt; element and can be used to track the state of the media.
E.g. https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
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
<td className="name"><code>name</code></td>
<td className="type">
<span className="param-type">string</span>
</td>
<td className="description last">Event name</td>
</tr>
<tr>
<td className="name"><code>action</code></td>
<td className="type">
<span className="param-type">function</span>
</td>
<td className="description last">The action to execute on event.</td>
</tr>
</tbody>
</table>
<dl className="details">
<dt className="tag-source">Source:</dt>
<dd className="tag-source"><ul className="dummy"><li>
<a href="pathname:///jsdoc/WmmVideo.js.html">WmmVideo.js</a>, <a href="pathname:///jsdoc/WmmVideo.js.html#line47">line 47</a>
</li></ul></dd>
</dl>
</article>
</section>
</div>

