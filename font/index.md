---
layout: default
title: Font Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers font picker jQuery plugins.
base_url: "../"
seo_url: "/font/"
---

### About *font picker*

This **jQuery plugin** allows you to add a **font picker** to easily display a list
of fonts in your form. This font picker can be used along with our [*select jQuery plugin*](../select/).


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
      <p>Example for loading the list of fonts and selecting a default font</p>
	  <select class="form-control bfh-fonts" data-font="Arial"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-fonts" data-font="Arial"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of fonts, limited to a specific list of fonts</p>
	  <select class="form-control bfh-fonts" data-available="Arial,Calibri,Helvetica"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-fonts" data-available="Arial,Calibri,Helvetica"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of fonts in JavaScript and selecting a default font</p>
	  <button onclick="$('#fonts1').bfhfonts({font: 'Arial'});return false;" class="btn">Load fonts</button>
	  <br><br>
	  <select id="fonts1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#fonts1').bfhfonts({font: 'Arial'})" class="btn"&gt;Load fonts&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="fonts1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of fonts using Bootstrap Form Helpers Select Box</p>
	  <div class="bfh-selectbox bfh-fonts" data-font="Arial">
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
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-fonts" data-font="Arial"&gt;
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
      <td>blank</td>
      <td>Boolean. To show a blank option. <em>Default: true</em></td>
    </tr>
  </tbody>
</table>


### Methods

None.


### Events

None.