---
layout: default
title: State Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers state picker jQuery plugins.
base_url: "../"
seo_url: "/state/"
---

### About *state picker*

This **jQuery plugin** allows you to add a **state picker** to easily display a list
of states in your **Bootstrap** form. This state picker can be used along with our [*select jQuery plugin*](../select/)
as well as our [*country picker jQuery plugin*](../country/).


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
  <li>
    <a href="#example6" data-toggle="tab">Example 6</a>
  </li>
</ul>
<div id="example-content" class="tab-content">
  <div class="tab-pane fade in active" id="example1">
    <form class="example form-inline">
      <p>Example for loading the list of states for a country and selecting a default state</p>
	  <select class="form-control bfh-states" data-country="US" data-state="CA"></select>
	</form>
	<pre class="prettyprint">&lt;select class="form-control bfh-states" data-country="US" data-state="CA"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of states for a country and selecting a default state in JavaScript</p>
	  <button onclick="$('#states1').bfhstates({country: 'US', state: 'CA'});return false;" class="btn">Load States</button>
	  <br><br>
	  <select id="states1" class="form-control"></select>
	</form>
	<pre class="prettyprint">&lt;button onclick="$('#states1').bfhstates({country: 'US', state: 'CA'})" class="btn"&gt;
  Load States
&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;select id="states1" class="form-control"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of states using Bootstrap Form Helpers' Select Box</p>
	  <div class="bfh-selectbox bfh-states" data-country="US" data-state="CA">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div class="bfh-selectbox bfh-states" data-country="US" data-state="CA"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for loading the list of states based on a country selector</p>
	  <select id="countries_states1" class="form-control bfh-countries" data-country="US"></select>
	  <br><br>
	  <select class="form-control bfh-states" data-country="countries_states1"></select>
	</form>
	<pre class="prettyprint">&lt;select id="countries_states1" class="form-control bfh-countries" data-country="US"&gt;&lt;/select&gt;
&lt;br&gt;&lt;br&gt;
&lt;select class="form-control bfh-states" data-country="countries_states1"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example5">
    <form class="example form-inline">
      <p>Example for loading the list of states based on a country select using Bootstrap Form Helpers Select Box</p>
	  <div id="countries_states2" class="bfh-selectbox bfh-countries" data-country="US">
	  </div>
	  <br><br>
	  <div class="bfh-selectbox bfh-states" data-country="countries_states2">
	  </div>
	</form>
	<pre class="prettyprint">&lt;div id="countries_states2" class="bfh-selectbox bfh-countries" data-country="US"&gt;
&lt;/div&gt;
&lt;br&gt;&lt;br&gt;
&lt;div class="bfh-selectbox bfh-states" data-country="countries_states2"&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example6">
    <form class="example form-inline">
      <p>Example for displaying the state name from a state and country code</p>
	  <span class="bfh-states" data-country="US" data-state="CA"></span>
	</form>
	<pre class="prettyprint">&lt;span class="bfh-states" data-country="US" data-state="CA"&gt;&lt;/span&gt;</pre>
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
      <td>country</td>
      <td>Two letters country code or ID of a bfh-countries HTML element. To filter based on a country. Required. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>state</td>
      <td>Two letters state code. To select a state. Required if blank is to false. <em>Default: ''</em></td>
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
