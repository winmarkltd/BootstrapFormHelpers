---
layout: default
title: Number Input jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers number input jQuery plugins.
base_url: "../"
seo_url: "/number/"
---

### About *number input*

This **jQuery plugin** allows you to add a **number input** to easily edit numeric values
in your **Bootstrap** form.


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
	  <p>Simple example for formatting a number in input text</p>
	  <input type="text" class="form-control bfh-number">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-number"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
	<form class="example form-inline">
	  <p>Example for formatting a number in input text with a predefined number</p>
	  <input type="text" class="form-control bfh-number" value="5">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-number" value="5"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
	<form class="example form-inline">
	  <p>Example for formatting a number with min and max values</p>
	  <input type="text" class="form-control bfh-number" data-min="5" data-max="25">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-number" data-min="5" data-max="25"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
	  <p>Example for formatting a number with number wrapping around</p>
	  <input type="text" class="form-control bfh-number" data-min="5" data-max="25" data-wrap="true">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-number" data-min="5" data-max="25" data-wrap="true"&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
	<form class="example form-inline">
	  <p>Example for formatting a number with leading zeros</p>
	  <input type="text" class="form-control bfh-number" data-zeros="true" data-min="5" data-max="25">
	</form>
	<pre class="prettyprint">&lt;input type="text" class="form-control bfh-number" data-zeros="true" data-min="5" data-max="25"&gt;</pre>
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
      <td>min</td>
      <td>Integer. To restrict the minimum selectable number. <em>Default: 0</em></td>
    </tr>
    <tr>
      <td>max</td>
      <td>Integer. To restrict the maximum selectable number. <em>Default: 9999</em></td>
    </tr>
    <tr>
      <td>zeros</td>
      <td>Boolean. To show leading zeros. <em>Default: false</em></td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>Boolean. To have keyboard events enabled. <em>Default: true</em></td>
    </tr>
    <tr>
      <td>buttons</td>
      <td>Boolean. To show increment and decrement buttons. <em>Default: true</em></td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>Boolean. To have the number wrap around when reaching min or max. <em>Default: false</em></td>
    </tr>
  </tbody>
</table>


### Methods

None.


### Events

None.
