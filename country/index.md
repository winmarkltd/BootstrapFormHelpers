---
layout: default
title: Country Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers country picker jQuery plugins.
base_url: "../"
seo_url: "/country/"
---

### About *country picker*

This **jQuery plugin** allows you to add a **country picker** to easily display a list
of countries in your form. This country picker can be used along with our [*select jQuery plugin*](../select/).
There is also an option to display the country flags.


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
      <p>Example for loading the list of countries and selecting a default country</p>
	  <select class="form-control bfh-countries" data-country="US"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-countries" data-country="US"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of countries, limited to a specific list of countries</p>
	  <select class="form-control bfh-countries" data-available="US,AG,AU"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-countries" data-available="US,AG,AU"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of countries in JavaScript and selecting a default country</p>
	  <button onclick="$('#countries1').bfhcountries({country: 'US'});return false;" class="btn">Load Countries</button>
	  <br><br>
	  <select id="countries1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#countries1').bfhcountries({country: 'US'})" class="btn"&gt;Load Countries&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="countries1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of countries and flags using Bootstrap Form Helpers Select Box</p>
	  <div class="bfh-selectbox bfh-countries" data-country="US" data-flags="true">
		<input type="hidden" value="">
		<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
		  <span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>
		  <b class="caret"></b>
		</a>
		<div class="bfh-selectbox-options">
		  <input type="text" class="bfh-selectbox-filter">
		  <div role="listbox">
			<ul role="option">
			</ul>
		  </div>
		</div>
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-countries" data-country="US" data-flags="true"&gt;
  &lt;input type="hidden" value=""&gt;
  &lt;a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#"&gt;
    &lt;span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""&gt;&lt;/span&gt;
    &lt;b class="caret"&gt;&lt;/b&gt;
  &lt;/a&gt;
  &lt;div class="bfh-selectbox-options"&gt;
    &lt;input type="text" class="bfh-selectbox-filter"&gt;
    &lt;div role="listbox"&gt;
      &lt;ul role="option"&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
    <form class="example form-inline">
      <p>Example for displaying the country name and flag from a country code</p>
	  <span class="bfh-countries" data-country="US" data-flags="true"></span>
	</form>
	<pre class="prettyprint">&lt;span class="bfh-countries" data-country="US" data-flags="true"&gt;&lt;/span&gt;</pre>
  </div>
</div>

### Available languages

* English (US)
* Arabic
* German (DE)
* Spanish (ES)
* Italian (IT)
* Portuguese (BR)
* Simplified Chinese (CN)
* Simplified Chinese (TW)


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
      <td>country</td>
      <td>Two letters country code. To select a country. Required when blank is set to false. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>available</td>
      <td>Comma separated list of two letters country code. To restrict the list of countries. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>flags</td>
      <td>Boolean. To show the country flags. <em>Default: false</em></td>
    </tr>
    <tr>
      <td>blank</td>
      <td>Boolean. To show a blank option. <em>Default: true</em></td>
    </tr>
  </tbody>
</table>


### Methods

None.


### Events

None.