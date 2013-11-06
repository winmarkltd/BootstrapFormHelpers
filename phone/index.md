---
layout: default
title: Phone Input jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers phone input jQuery plugins.
base_url: "../"
seo_url: "/phone/"
---

### About *phone input*

This **jQuery plugin** allows you to add a **phone input** to easily format phone numbers
in your **Bootstrap** form. This phone input can be used along with our [*country picker jQuery plugin*](../country/).


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
	  <p>Simple example for formatting a phone number in input text</p>
	  <input type="text" class="form-control bfh-phone" data-format="+1 (ddd) ddd-dddd">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-phone" data-format="+1 (ddd) ddd-dddd"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
	<form class="example form-inline">
	  <p>Example for formatting a phone number in input text with a predefined number</p>
	  <input type="text" class="form-control bfh-phone" value="5555555555" data-format="+1 (ddd) ddd-dddd">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-phone" value="5555555555" data-format="+1 (ddd) ddd-dddd"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
	<form class="example form-inline">
	  <p>Example for formatting a phone number based on a country</p>
	  <input type="text" class="form-control bfh-phone" data-country="US">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-phone" data-country="US"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
	  <p>Example for formatting a phone number based on a country picker</p>
	  <select id="countries_phone1" class="form-control bfh-countries" data-country="US"></select>
	  <br><br>
	  <input type="text" class="form-control bfh-phone" data-country="countries_phone1">
	</form>
	<pre class="prettyprint">&lt;select id="countries_phone1" class="form-control bfh-countries" data-country="US"&gt;&lt;/select&gt;
&lt;br&gt;&lt;br&gt;
&lt;input type="text" class="form-control bfh-phone" data-country="US"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
	<form class="example form-inline">
	  <p>Simple example for displaying a formatted phone number</p>
	  <span class="bfh-phone" data-format="+1 (ddd) ddd-dddd" data-number="15555555555"></span>
	</form>
	<pre class="prettyprint">&lt;span class="bfh-phone" data-format="+1 (ddd) ddd-dddd" data-number="15555555555"&gt;&lt;/span&gt;</pre>
  </div>
</div>


### Available languages

Not applicable.


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
      <td>number</td>
      <td>Integer. Phone number to display. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>format</td>
      <td>String. Format of the phone number. Use "d" for digits in the format. <em>Default: true</em></td>
    </tr>
  </tbody>
</table>


### Methods

None.


### Events

None.