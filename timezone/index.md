---
layout: relay
title: Timezone Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers timezone picker jQuery plugins.
base_url: "../"
seo_url: "/timezone/"
---
<div class="container">
### About *timezone picker*

This **jQuery plugin** allows you to add a **timezone picker** to easily display a list
of timezones in your **Bootstrap** form. This timezone picker can be used along with our [*select jQuery plugin*](../select/)
as well as our [*country picker jQuery plugin*](../country/).


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
      <p>Example for loading the list of timezones for a country</p>
	  <select class="form-control bfh-timezones" data-country="US"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-timezones" data-country="US"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of timezones for a country in JavaScript</p>
	  <button onclick="$('#timezones1').bfhtimezones({country: 'US'});return false;" class="btn">Load Timezones</button>
	  <br><br>
	  <select id="timezones1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#timezones1').bfhtimezones({country: 'US'})" class="btn"&gt;
  Load Timezones
&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="timezones1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of timezones using Bootstrap Form Helpers' Select Box</p>
	  <div class="bfh-selectbox bfh-timezones" data-country="US">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-timezones" data-country="US"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of timezones based on a country selector</p>
	  <select id="countries_timezones1" class="form-control bfh-countries" data-country="US"></select>
	  <br><br>
	  <select class="form-control bfh-timezones" data-country="countries_timezones1"></select>
	</form>
	<pre class="prettyprint">&lt;select id="countries_timezones1" class="form-control bfh-countries" data-country="US"&gt;&lt;/select&gt;
&lt;br&gt;&lt;br&gt;
&lt;select class="form-control bfh-timezones" data-country="countries_timezones1"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
    <form class="example form-inline">
      <p>Example for loading the list of timezones based on a country select using Bootstrap Form Helpers Select Box</p>
	  <div id="countries_timezones2" class="bfh-selectbox bfh-countries" data-country="US">
	  </div>
	  <br><br>
	  <div class="bfh-selectbox bfh-timezones" data-country="countries_timezones2">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div id="countries_timezones2" class="bfh-selectbox bfh-countries" data-country="US"&gt;
&lt;/div&gt;
&lt;br&gt;&lt;br&gt;
&lt;div class="bfh-selectbox bfh-timezones" data-country="countries_timezones2"&gt;
&lt;/div&gt;</pre>
  </div>
</div>


### Available languages

* English (US)
* Simplified Chinese (CN)


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
      <td>Two letters country code or ID of a bfh-countries HTML element. To filter based on a country. Required. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>timezone</td>
      <td>Timezone identifier. To select a timezone. Required if blank is to false. <em>Default: ''</em></td>
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

</div>
