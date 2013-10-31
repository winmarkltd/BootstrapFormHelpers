---
layout: default
title: Language Picker jQuery plugins
description: Extend Bootstrap with Bootstrap Form Helpers language picker jQuery plugins.
base_url: "../"
seo_url: "/language/"
---

### About *language picker*

This **jQuery plugin** allows you to add a **language picker** to easily display a list
of languages in your form. This language picker can be used along with our [*select jQuery plugin*](../select/).
There is also an option to display the country flags.


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
      <p>Example for loading the list of languages and selecting a default language</p>
      <select class="form-control bfh-languages" data-language="en"></select>
    </form>
    <pre class="prettyprint">&lt;select class="form-control bfh-languages" data-language="en"&gt;&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example2">
    <form class="example form-inline">
      <p>Example for loading the list of languages with country names</p>
      <select class="form-control bfh-languages" data-language="en_US" data-available="en_US,fr_CA,es_MX">
      </select>
    </form>
    <pre class="prettyprint">&lt;select class="form-control bfh-languages" data-language="en_US" data-available="en_US,fr_CA,es_MX"&gt;
&lt;/select&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example3">
    <form class="example form-inline">
      <p>Example for loading the list of languages and flags using Bootstrap Form Helpers' Select Box</p>
      <div class="bfh-selectbox bfh-languages" data-language="en_US" data-available="en_US,fr_CA,es_MX" data-flags="true">
        <input type="hidden" value="">
        <a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">
          <span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>
          <b class="caret"></b>
        </a>
        <div class="bfh-selectbox-options">
          <div role="listbox">
            <ul role="option">
            </ul>
          </div>
        </div>
      </div>
    </form>
    <pre class="prettyprint">&lt;div class="bfh-selectbox bfh-languages" data-language="en_US" data-available="en_US,fr_CA,es_MX" data-flags="true"&gt;
  &lt;input type="hidden" value=""&gt;
  &lt;a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#"&gt;
    &lt;span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""&gt;&lt;/span&gt;
    &lt;b class="caret"&gt;&lt;/b&gt;
  &lt;/a&gt;
  &lt;div class="bfh-selectbox-options"&gt;
    &lt;div role="listbox"&gt;
      &lt;ul role="option"&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
  </div>
  <div class="tab-pane fade" id="example4">
    <form class="example form-inline">
      <p>Example for displaying the language name and flag from language code</p>
      <span class="bfh-languages" data-language="en_US" data-flags="true"></span>
    </form>
    <pre class="prettyprint">&lt;span class="bfh-languages" data-language="en_US" data-flags="true"&gt;&lt;/span&gt;</pre>
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
      <td>language</td>
      <td>Two letters country code. Can also append _ with two letters country code to display country code or flag. To select a language. Required when blank is set to false. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>available</td>
      <td>Comma separated list of two letters language code. Can also append _ with two letters country code to display country code or flag. To restrict the list of languages. <em>Default: ''</em></td>
    </tr>
    <tr>
      <td>flags</td>
      <td>Boolean. To show the country flags. <em>Default: false</em></td>
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