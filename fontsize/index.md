---
layout: relay
title: Font Size Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers font size picker jQuery plugins.
base_url: "../"
seo_url: "/fontsize/"
---

### About *font size picker*

This **jQuery plugin** allows you to add a **font size picker** to easily display a list
of font sizes in your **Bootstrap** form. This font size picker can be used along with our [*select jQuery plugin*](../select/).


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
</ul>
<div id="example-content" class="tab-content">
  <div class="tab-pane fade in active" id="example1">
    <form class="example form-inline">
      <p>Example for loading the list of font sizes and selecting a default font size</p>
	  <select class="form-control bfh-fontsizes" data-fontsize="12"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-fontsizes" data-fontsize="12"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of font sizes, limited to a specific list of font sizes</p>
	  <select class="form-control bfh-fontsizes" data-available="12,14,16"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-fontsizes" data-available="12,14,16"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of font sizes in JavaScript and selecting a default font size</p>
	  <button onclick="$('#fontsizes1').bfhfontsizes({fontsize: '12'});return false;" class="btn">Load font sizes</button>
	  <br><br>
	  <select id="fontsizes1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#fontsizes1').bfhfontsizes({fontsize: '12'})" class="btn"&gt;
  Load font sizes
&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="fontsizes1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of font sizes using Bootstrap Form Helpers Select Box</p>
	  <div class="bfh-selectbox bfh-fontsizes" data-fontsize="12">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-fontsizes" data-fontsize="12"&gt;
&lt;/div&gt;</pre>
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
      <td>fontsize</td>
      <td>Font size identifier. To select a font size. Required when blank is set to false. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>available</td>
      <td>Comma separated list of font size identifier. To restrict the list of font sizes. <em>Default: ''</em></td>
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
