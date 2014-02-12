---
layout: relay
title: Currency Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers currency picker jQuery plugins.
base_url: "../"
seo_url: "/currency/"
---

### About *currency picker*

This **jQuery plugin** allows you to add a **currency picker** to easily display a list
of currencies in your **Bootstrap** form. This currency picker can be used along with our [*select jQuery plugin*](../select/).
There is also an option to display the currency or country flags.


### Examples

<ul id="example-tab" class="nav nav-tabs">
  <li class="active">
    <a href="#example1" data-toggle="tab">Example 1</a>
  </li>
  <li>
    <a href="#example2" data-toggle="tab">Example 2</a>
  </li>
  <li>
    <a href="#example3" data-toggle="tab">Example 3</a>
  </li>
  <li>
    <a href="#example4" data-toggle="tab">Example 4</a>
  </li>
  <li>
    <a href="#example5" data-toggle="tab">Example 5</a>
  </li>
</ul>
<div id="example-content" class="tab-content">
  <div class="tab-pane fade in active" id="example1">
	<form class="example form-inline">
	  <p>Example for loading the list of currencies and selecting a default currency</p>
	  <select class="form-control bfh-currencies" data-currency="EUR"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-currencies" data-currency="EUR"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
	<form class="example form-inline">
	  <p>Example for loading the list of currencies, limited to a specific list of currencies</p>
	  <select class="form-control bfh-currencies" data-available="USD,AUD,EUR"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-currencies" data-available="USD,AUD,EUR"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
	<form class="example form-inline">
	  <p>Example for loading the list of currencies in JavaScript and selecting a default currency</p>
	  <button onclick="$('#currencies1').bfhcurrencies({currency: 'USD'});return false;" class="btn">Load Currencies</button>
	  <br><br>
	  <select id="currencies1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#currencies1').bfhcurrencies({currency: 'USD'})" class="btn"&gt;
  Load Currencies
&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="currencies1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
	<form class="example form-inline">
	  <p>Example for loading the list of currencies and currencies flags using Bootstrap Form Helpers' Select Box</p>
	  <div class="bfh-selectbox bfh-currencies" data-currency="EUR" data-flags="true">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-currencies" data-currency="EUR" data-flags="true"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
	<form class="example form-inline">
	  <p>Example for displaying the currency name and currency flag from a currency code</p>
	  <span class="bfh-currencies" data-currency="XCD" data-flags="true"></span>
	</form>
	<pre class="prettyprint">&lt;span class="bfh-currencies" data-currency="XCD" data-flags="true"&gt;&lt;/span&gt;</pre>
  </div>
</div>


### Available languages

* English (US)


### Options

<table class="table table-striped">
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>currency</td>
      <td>Three letters currency code. To select a currency. Required when blank is set to false. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>available</td>
      <td>Comma separated list of three letters currency code. To restrict the list of currencies. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>flags</td>
      <td>Boolean. To show the currency or country flags. <em>Default: false</em></td>
    </tr>
    <tr>
      <td>blank</td>
      <td>Boolean. To show a blank option. <em>Default: true</em></td>
    </tr>
  </tbody>
</table>

If using our select jQuery plugin, [refer to this documentation for a list of additional options](../select/).


### Methods

If using our select jQuery plugin, [refer to this documentation for a list of methods](../select/).


### Events

If using our select jQuery plugin, [refer to this documentation for a list of events](../select/).
