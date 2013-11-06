---
layout: default
title: Google Font Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers Google font picker jQuery plugins.
base_url: "../"
seo_url: "/googlefont/"
---

### About *Google font picker*

This **jQuery plugin** allows you to add a **Google font picker** to easily display a list
of Google fonts in your **Bootstrap** form. This font picker can be used along with our [*select jQuery plugin*](../select/).


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
      <p>Example for loading the list of fonts and selecting a default font</p>
	  <select class="form-control bfh-googlefonts" data-font="Lato"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-googlefonts" data-font="Lato"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of fonts, limited to a specific list of fonts</p>
	  <select class="form-control bfh-googlefonts" data-available="Open Sans,Josefin Slab,Lato"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-googlefonts" data-available="Open Sans,Josefin Slab,Lato"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of fonts, limited to a specific subset of fonts</p>
	  <select class="form-control bfh-googlefonts" data-subset="latin-ext"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-googlefonts" data-subset="latin-ext"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of fonts in JavaScript and selecting a default font</p>
	  <button onclick="$('#googlefonts1').bfhgooglefonts({font: 'Lato'});return false;" class="btn">Load fonts</button>
	  <br><br>
	  <select id="googlefonts1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#googlefonts1').bfhgooglefonts({font: 'Lato'})" class="btn"&gt;Load fonts&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="googlefonts1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
    <form class="example form-inline">
      <p>Example for loading the list of fonts using Bootstrap Form Helpers Select Box</p>
	  <div class="bfh-selectbox bfh-googlefonts" data-font="Lato">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-googlefonts" data-font="Lato"&gt;
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
      <td>font</td>
      <td>Font identifier. To select a font. Required when blank is set to false. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>available</td>
      <td>Comma separated list of font identifier. To restrict the list of fonts. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>subset</td>
      <td>Subset identifier. To select a subset. <em>Default: ''</em></td>
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
