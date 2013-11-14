---
layout: default
title: Date Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers date picker jQuery plugins.
base_url: "../"
seo_url: "/datepicker/"
---

### About *date picker*

This **jQuery plugin** allows you to add a **date picker** to make it easier to select
dates to your **Bootstrap** form. This date picker can be fully customized to match the
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
      <p>Simplest example to display a date picker.</p>
      <div class="bfh-datepicker">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-datepicker"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example showing how to set a default date and format.</p>
      <div class="bfh-datepicker" data-format="y-m-d" data-date="today">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-datepicker" data-format="y-m-d" data-date="today"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example showing how to set a range and not close on selecting a date.</p>
      <div class="bfh-datepicker" data-min="01/15/2013" data-max="today" data-close="false">
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-datepicker" data-min="01/15/2013" data-max="today" data-close="false"&gt;
&lt;/div&gt;</pre>
  </div>
</div>


### Available languages

* English (US)
* Spanish (ES)
* Spanish (US)


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
      <td>String. Class name for the icon on the input. <em>Default: 'glyphicon glyphicon-calendar'</em></td>
    </tr>
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
      <td>date</td>
      <td>String. Initial date. <em>Default: 'today'</em></td>
    </tr>
    <tr>
      <td>format</td>
      <td>String. To change the date format. <em>Default: 'm/d/y'</em></td>
    </tr>
    <tr>
      <td>min</td>
      <td>String. To restrict the minimum selectable date. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>max</td>
      <td>String. To restrict the maximum selectable date. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>close</td>
      <td>Boolean. To close the calendar on selecting a date. <em>Default: true</em></td>
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
      <td>$().bfhdatepicker('toggle')</td>
      <td>Toggles the calendar.</td>
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
      <td>change.bfhdatepicker</td>
      <td>This event fires immediately when a date is selected.</td>
    </tr>
    <tr>
      <td>show.bfhdatepicker</td>
      <td>This event fires immediately when the show instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bfhdatepicker</td>
      <td>This event is fired when the select has been made visible to the user (will wait for CSS transitions, to complete).</td>
    </tr>
    <tr>
      <td>hide.bfhdatepicker</td>
      <td>This event is fired immediately when the hide instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bfhdatepicker</td>
      <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
    </tr>
  </tbody>
</table>
