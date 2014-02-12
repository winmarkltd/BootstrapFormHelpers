---
layout: relay
title: Slider jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers slider jQuery plugins.
base_url: "../"
seo_url: "/slider/"
---

### About *slider*

This **jQuery plugin** allows you to add a **slider** to your **Bootstrap** form.
This slider can be fully customized to match the look and feel you want using HTML and CSS.


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
</ul>
<div id="example-content" class="tab-content">
  <div class="tab-pane fade in active" id="example1">
    <form class="example form-inline">
      <p>Simple example for adding a slider.</p>
      <div class="bfh-slider" data-name="slider1">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-slider" data-name="slider1"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Simple example for adding a slider and selecting a default value.</p>
      <div class="bfh-slider" data-name="slider2" data-value="12">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-slider" data-name="slider2" data-value="12"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Simple example for adding a slider with different min and max values.</p>
      <div class="bfh-slider" data-name="slider3" data-min="5" data-max="25">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-slider" data-name="slider3" data-min="5" data-max="25"&gt;
&lt;/div&gt;</pre>
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
      <td>name</td>
      <td>String. Name of the input. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>value</td>
      <td>String. Initial value to select. <em>Default: min</em></td>
    </tr>
    <tr>
      <td>min</td>
      <td>String. To restrict the minimum selectable value. <em>Default: 0</em></td>
    </tr>
    <tr>
      <td>max</td>
      <td>String. To restrict the maximum selectable value. <em>Default: 100</em></td>
    </tr>
  </tbody>
</table>


### Methods

None.


### Events

<table class="table table-striped">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>change.bfhslider</td>
      <td>This event fires immediately when a value is selected.</td>
    </tr>
  </tbody>
</table>
