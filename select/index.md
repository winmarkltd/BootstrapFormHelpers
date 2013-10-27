---
layout: default
title: Select jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers select jQuery plugins.
base_url: "../"
seo_url: "/select/"
---

### About *select*

This **jQuery plugin** allows you to add a custom **select** HTML element to your form.
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
	  <div class="bfh-selectbox">
		<input type="hidden" name="selectbox1" value="" />
		<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
		  <span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>
		  <b class="caret"></b>
		</a>
		<div class="bfh-selectbox-options">
		  <div role="listbox">
			<ul role="option">
			  <li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>
			  <li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>
			  <li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>
			  <li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>
			  <li><a tabindex="-1" href="#" data-option="5">Option 5</a></li>
			  <li><a tabindex="-1" href="#" data-option="6">Option 6</a></li>
			  <li><a tabindex="-1" href="#" data-option="7">Option 7</a></li>
			  <li><a tabindex="-1" href="#" data-option="8">Option 8</a></li>
			  <li><a tabindex="-1" href="#" data-option="9">Option 9</a></li>
			  <li><a tabindex="-1" href="#" data-option="10">Option 10</a></li>
			  <li><a tabindex="-1" href="#" data-option="11">Option 11</a></li>
			  <li><a tabindex="-1" href="#" data-option="12">Option 12</a></li>
			  <li><a tabindex="-1" href="#" data-option="13">Option 13</a></li>
			  <li><a tabindex="-1" href="#" data-option="14">Option 14</a></li>
			  <li><a tabindex="-1" href="#" data-option="15">Option 15</a></li>
			</ul>
		  </div>
		</div>
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox"&gt;
  &lt;input type="hidden" name="selectbox1" value=""&gt;
  &lt;a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#"&gt;
    &lt;span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""&gt;&lt;/span&gt;
    &lt;b class="caret"&gt;&lt;/b&gt;
  &lt;/a&gt;
  &lt;div class="bfh-selectbox-options"&gt;
    &lt;div role="listbox"&gt;
      &lt;ul role="option"&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="1"&gt;Option 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="2"&gt;Option 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="3"&gt;Option 3&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="4"&gt;Option 4&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="5"&gt;Option 5&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="6"&gt;Option 6&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="7"&gt;Option 7&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="8"&gt;Option 8&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="9"&gt;Option 9&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="10"&gt;Option 10&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="11"&gt;Option 11&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="12"&gt;Option 12&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="13"&gt;Option 13&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="14"&gt;Option 14&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="15"&gt;Option 15&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
	<form class="example form-inline">
	  <p>Simple example for adding a select HTML element and selecting a default option.</p>
	  <div class="bfh-selectbox">
		<input type="hidden" name="selectbox2" value="12">
		<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
		  <span class="bfh-selectbox-option bfh-selectbox-medium" data-option="12">Option 12</span>
		  <b class="caret"></b>
		</a>
		<div class="bfh-selectbox-options">
		  <div role="listbox">
			<ul role="option">
			  <li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>
			  <li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>
			  <li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>
			  <li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>
			  <li><a tabindex="-1" href="#" data-option="5">Option 5</a></li>
			  <li><a tabindex="-1" href="#" data-option="6">Option 6</a></li>
			  <li><a tabindex="-1" href="#" data-option="7">Option 7</a></li>
			  <li><a tabindex="-1" href="#" data-option="8">Option 8</a></li>
			  <li><a tabindex="-1" href="#" data-option="9">Option 9</a></li>
			  <li><a tabindex="-1" href="#" data-option="10">Option 10</a></li>
			  <li><a tabindex="-1" href="#" data-option="11">Option 11</a></li>
			  <li><a tabindex="-1" href="#" data-option="12">Option 12</a></li>
			  <li><a tabindex="-1" href="#" data-option="13">Option 13</a></li>
			  <li><a tabindex="-1" href="#" data-option="14">Option 14</a></li>
			  <li><a tabindex="-1" href="#" data-option="15">Option 15</a></li>
			</ul>
		  </div>
		</div>
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox"&gt;
  &lt;input type="hidden" name="selectbox2" value="12"&gt;
  &lt;a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#"&gt;
    &lt;span class="bfh-selectbox-option bfh-selectbox-medium" data-option="12"&gt;Option 12&lt;/span&gt;
    &lt;b class="caret"&gt;&lt;/b&gt;
  &lt;/a&gt;
  &lt;div class="bfh-selectbox-options"&gt;
    &lt;div role="listbox"&gt;
      &lt;ul role="option"&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="1"&gt;Option 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="2"&gt;Option 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="3"&gt;Option 3&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="4"&gt;Option 4&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="5"&gt;Option 5&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="6"&gt;Option 6&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="7"&gt;Option 7&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="8"&gt;Option 8&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="9"&gt;Option 9&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="10"&gt;Option 10&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="11"&gt;Option 11&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="12"&gt;Option 12&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="13"&gt;Option 13&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="14"&gt;Option 14&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="15"&gt;Option 15&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
	<form class="example form-inline">
	  <p>Simple example for adding a select HTML element with a filter.</p>
	  <div class="bfh-selectbox">
		<input type="hidden" name="selectbox3" value="12">
		<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
		  <span class="bfh-selectbox-option bfh-selectbox-medium" data-option="12">Option 12</span>
		  <b class="caret"></b>
		</a>
		<div class="bfh-selectbox-options">
		  <input type="text" class="bfh-selectbox-filter">
		  <div role="listbox">
			<ul role="option">
			  <li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>
			  <li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>
			  <li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>
			  <li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>
			  <li><a tabindex="-1" href="#" data-option="5">Option 5</a></li>
			  <li><a tabindex="-1" href="#" data-option="6">Option 6</a></li>
			  <li><a tabindex="-1" href="#" data-option="7">Option 7</a></li>
			  <li><a tabindex="-1" href="#" data-option="8">Option 8</a></li>
			  <li><a tabindex="-1" href="#" data-option="9">Option 9</a></li>
			  <li><a tabindex="-1" href="#" data-option="10">Option 10</a></li>
			  <li><a tabindex="-1" href="#" data-option="11">Option 11</a></li>
			  <li><a tabindex="-1" href="#" data-option="12">Option 12</a></li>
			  <li><a tabindex="-1" href="#" data-option="13">Option 13</a></li>
			  <li><a tabindex="-1" href="#" data-option="14">Option 14</a></li>
			  <li><a tabindex="-1" href="#" data-option="15">Option 15</a></li>
			</ul>
		  </div>
		</div>
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox"&gt;
  &lt;input type="hidden" name="selectbox3" value="12"&gt;
  &lt;a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#"&gt;
    &lt;span class="bfh-selectbox-option bfh-selectbox-medium" data-option="12"&gt;Option 12&lt;/span&gt;
    &lt;b class="caret"&gt;&lt;/b&gt;
  &lt;/a&gt;
  &lt;div class="bfh-selectbox-options"&gt;
    &lt;input type="text" class="bfh-selectbox-filter"&gt;
    &lt;div role="listbox"&gt;
      &lt;ul role="option"&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="1"&gt;Option 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="2"&gt;Option 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="3"&gt;Option 3&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="4"&gt;Option 4&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="5"&gt;Option 5&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="6"&gt;Option 6&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="7"&gt;Option 7&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="8"&gt;Option 8&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="9"&gt;Option 9&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="10"&gt;Option 10&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="11"&gt;Option 11&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="12"&gt;Option 12&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="13"&gt;Option 13&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="14"&gt;Option 14&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a tabindex="-1" href="#" data-option="15"&gt;Option 15&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
</div>


### Available languages

Not applicable.


### Options

None.


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