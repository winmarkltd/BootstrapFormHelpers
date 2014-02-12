---
layout: relay
title: Color Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers color picker jQuery plugins.
base_url: "../"
seo_url: "/colorpicker/"
---

### About *color picker*

This **jQuery plugin** allows you to add a **color picker** to your **Bootstrap** form.
This color picker can be fully customized to match the look and feel you want using HTML and CSS.


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
      <p>Simple example for adding a color picker.</p>
      <div class="bfh-colorpicker" data-name="colorpicker1">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-colorpicker" data-name="colorpicker1"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Simple example for adding a color picker and selecting a default color.</p>
      <div class="bfh-colorpicker" data-name="colorpicker2" data-color="#FF0000">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-colorpicker" data-name="colorpicker2" data-color="#FF0000"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Simple example for adding a color picker that doesn't close when selecting a color.</p>
      <div class="bfh-colorpicker" data-name="colorpicker3" data-close="false">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-colorpicker" data-name="colorpicker3" data-close="false"&gt;
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
      <td>align</td>
      <td>String. Alignment for the icon 'left' or 'right'. <em>Default: 'left'</em></td>
    </tr>
    <tr>
      <td>input</td>
      <td>String. Class name for styling the input. <em>Default: 'form-control'</em></td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>String. Text for the placeholder of the input. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>name</td>
      <td>String. Name of the input. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>color</td>
      <td>String. Initial color. <em>Default: '#000000'</em></td>
    </tr>
    <tr>
      <td>close</td>
      <td>Boolean. To close the popover on selecting a color. <em>Default: true</em></td>
    </tr>
  </tbody>
</table>


### Methods

<table class="table table-striped">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$().bfhcolorpicker('toggle')</td>
      <td>Toggles the popover.</td>
    </tr>
  </tbody>
</table>


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
      <td>change.bfhcolorpicker</td>
      <td>This event fires immediately when a color is selected.</td>
    </tr>
    <tr>
      <td>show.bfhcolorpicker</td>
      <td>This event fires immediately when the show instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bfhcolorpicker</td>
      <td>This event is fired when the select has been made visible to the user (will wait for CSS transitions, to complete).</td>
    </tr>
    <tr>
      <td>hide.bfhcolorpicker</td>
      <td>This event is fired immediately when the hide instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bfhcolorpicker</td>
      <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
    </tr>
  </tbody>
</table>
