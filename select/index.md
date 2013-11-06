---
layout: default
title: Select jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers select jQuery plugins.
base_url: "../"
seo_url: "/select/"
---

### About *select*

This **jQuery plugin** allows you to add a custom **select** HTML element to your **Bootstrap** form.
This custom select HTML element can be fully customized to display the options matching
the look and feel you want using HTML and CSS.


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
      <p>Simple example for adding a select HTML element.</p>
      <div class="bfh-selectbox" data-name="selectbox1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
        <option value="11">Option 11</option>
        <option value="12">Option 12</option>
        <option value="13">Option 13</option>
        <option value="14">Option 14</option>
        <option value="15">Option 15</option>
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-selectbox" data-name="selectbox1"&gt;
  &lt;option value="1"&gt;Option 1&lt;/option&gt;
  &lt;option value="2"&gt;Option 2&lt;/option&gt;
  &lt;option value="3"&gt;Option 3&lt;/option&gt;
  &lt;option value="4"&gt;Option 4&lt;/option&gt;
  &lt;option value="5"&gt;Option 5&lt;/option&gt;
  &lt;option value="6"&gt;Option 6&lt;/option&gt;
  &lt;option value="7"&gt;Option 7&lt;/option&gt;
  &lt;option value="8"&gt;Option 8&lt;/option&gt;
  &lt;option value="9"&gt;Option 9&lt;/option&gt;
  &lt;option value="10"&gt;Option 10&lt;/option&gt;
  &lt;option value="11"&gt;Option 11&lt;/option&gt;
  &lt;option value="12"&gt;Option 12&lt;/option&gt;
  &lt;option value="13"&gt;Option 13&lt;/option&gt;
  &lt;option value="14"&gt;Option 14&lt;/option&gt;
  &lt;option value="15"&gt;Option 15&lt;/option&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Simple example for adding a select HTML element and selecting a default option.</p>
      <div class="bfh-selectbox" data-name="selectbox2" data-value="12">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
        <option value="11">Option 11</option>
        <option value="12">Option 12</option>
        <option value="13">Option 13</option>
        <option value="14">Option 14</option>
        <option value="15">Option 15</option>
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-selectbox" data-name="selectbox2" data-value="12"&gt;
  &lt;option value="1"&gt;Option 1&lt;/option&gt;
  &lt;option value="2"&gt;Option 2&lt;/option&gt;
  &lt;option value="3"&gt;Option 3&lt;/option&gt;
  &lt;option value="4"&gt;Option 4&lt;/option&gt;
  &lt;option value="5"&gt;Option 5&lt;/option&gt;
  &lt;option value="6"&gt;Option 6&lt;/option&gt;
  &lt;option value="7"&gt;Option 7&lt;/option&gt;
  &lt;option value="8"&gt;Option 8&lt;/option&gt;
  &lt;option value="9"&gt;Option 9&lt;/option&gt;
  &lt;option value="10"&gt;Option 10&lt;/option&gt;
  &lt;option value="11"&gt;Option 11&lt;/option&gt;
  &lt;option value="12"&gt;Option 12&lt;/option&gt;
  &lt;option value="13"&gt;Option 13&lt;/option&gt;
  &lt;option value="14"&gt;Option 14&lt;/option&gt;
  &lt;option value="15"&gt;Option 15&lt;/option&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Simple example for adding a select HTML element with a filter.</p>
      <div class="bfh-selectbox" data-name="selectbox3" data-value="12" data-filter="true">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
        <option value="11">Option 11</option>
        <option value="12">Option 12</option>
        <option value="13">Option 13</option>
        <option value="14">Option 14</option>
        <option value="15">Option 15</option>
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-selectbox" data-name="selectbox3" data-value="12" data-filter="true"&gt;
  &lt;option value="1"&gt;Option 1&lt;/option&gt;
  &lt;option value="2"&gt;Option 2&lt;/option&gt;
  &lt;option value="3"&gt;Option 3&lt;/option&gt;
  &lt;option value="4"&gt;Option 4&lt;/option&gt;
  &lt;option value="5"&gt;Option 5&lt;/option&gt;
  &lt;option value="6"&gt;Option 6&lt;/option&gt;
  &lt;option value="7"&gt;Option 7&lt;/option&gt;
  &lt;option value="8"&gt;Option 8&lt;/option&gt;
  &lt;option value="9"&gt;Option 9&lt;/option&gt;
  &lt;option value="10"&gt;Option 10&lt;/option&gt;
  &lt;option value="11"&gt;Option 11&lt;/option&gt;
  &lt;option value="12"&gt;Option 12&lt;/option&gt;
  &lt;option value="13"&gt;Option 13&lt;/option&gt;
  &lt;option value="14"&gt;Option 14&lt;/option&gt;
  &lt;option value="15"&gt;Option 15&lt;/option&gt;
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
      <td>String. Class name for the caret icon of the toggle. <em>Default: 'caret'</em></td>
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
      <td>value</td>
      <td>String. Initial value to select. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>filter</td>
      <td>Boolean. Set to display a filter to search the options. <em>Default: false</em></td>
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
      <td>$().bfhselectbox('toggle')</td>
      <td>Toggles the select options.</td>
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
      <td>change.bfhselectbox</td>
      <td>This event fires immediately when an option is selected.</td>
    </tr>
    <tr>
      <td>show.bfhselectbox</td>
      <td>This event fires immediately when the show instance method is called.</td>
    </tr>
    <tr>
      <td>shown.bfhselectbox</td>
      <td>This event is fired when the select has been made visible to the user (will wait for CSS transitions, to complete).</td>
    </tr>
    <tr>
      <td>hide.bfhselectbox</td>
      <td>This event is fired immediately when the hide instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bfhselectbox</td>
      <td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete).</td>
    </tr>
  </tbody>
</table>
