---
layout: default
title: Time Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers time picker jQuery plugins.
base_url: "../"
seo_url: "/timepicker/"
---

### About *time picker*

This **jQuery plugin** allows you to add a **time picker** to make it easier to select
times to your **Bootstrap** form. This time picker can be fully customized to match the
look and feel you want using HTML and CSS.


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
      <p>Simplest example to display a time picker.</p>
      <div class="bfh-timepicker">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-timepicker"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example showing how to set a default time.</p>
      <div class="bfh-timepicker" data-time="08:00">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-timepicker" data-time="08:00"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example showing how to set time to now.</p>
      <div class="bfh-timepicker" data-time="now">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-timepicker" data-time="now"&gt;
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
      <td>icon</td>
      <td>String. Class name for the icon on the input. <em>Default: 'glyphicon glyphicon-time'</em></td>
    </tr>
    <tr>
      <td>input</td>
      <td>String. Class name for styling the input. <em>Default: 'form-control'</em></td>
    </tr>
    <tr>
      <td>name</td>
      <td>String. Name of the input. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>time</td>
      <td>String. Initial time. <em>Default: 'now'</em></td>
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
      <td>$().bfhtimepicker('toggle')</td>
      <td>Toggles the time picker.</td>
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
      <td>change.bfhtimepicker</td>
      <td>This event fires immediately when a time is selected.</td>
    </tr>
    <tr>
      <td>show.bfhtimepicker</td>
      <td>This event fires immediately when the show instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bfhtimepicker</td>
      <td>This event is fired when the select has been made visible to the user (will wait for CSS transitions, to complete).</td>
    </tr>
    <tr>
      <td>hide.bfhtimepicker</td>
      <td>This event is fired immediately when the hide instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bfhtimepicker</td>
      <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
    </tr>
  </tbody>
</table>
