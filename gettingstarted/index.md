---
layout: default
title: Getting Started
description: Getting started with Bootstrap Form Helpers
base_url: "../"
seo_url: "/gettingstarted/"
---


### Getting started with Bootstrap Form Helpers

Getting started with Bootstrap Form Helpers is fairly easy. Have a quick look at how it
works below and you should be all set.


### Quick start

Two quick start options are available:

<!--* [Download the latest release](https://github.com/vlamanna/BootstrapFormHelpers/archive/master.zip).-->
* Clone the repo: `git clone git@github.com:vlamanna/BootstrapFormHelpers.git`

It is also possible to install through [Bower](http://bower.io/) and
[Composer](http://getcomposer.org/).


### What's included

Within the download you'll find the following directories and files, logically grouping
common assets and providing both compiled and minified variations. You'll see something
like this:

    BootstrapFormHelpers/
    |--- dist/
    |    |--- css/
    |         |--- bootstrap-formhelpers.css
    |         |--- bootstrap-formhelpers.min.css
    |    |--- img/
    |         |--- bootstrap-formhelpers-countries.flags.png
    |         |--- bootstrap-formhelpers-currencies.flags.png
    |         |--- bootstrap-formhelpers-googlefonts.png
    |    |--- js/
    |         |--- bootstrap-formhelpers.js
    |         |--- bootstrap-formhelpers.min.js
    
We provide compiled CSS and JS (`bootstrap-formhelpers.*`), as well as compiled and
minified CSS and JS (`bootstrap-formhelpers.min.*`).


### Basic template

Make use of a super basic HTML template, or dive into our documentation. We encourage
folks to iterate on the given examples and not simply use them as an end result.

Copy and paste the HTML from below to get started with a bare bones Bootstrap Form
Helpers document.

	<!DOCTYPE html>
	<html>
	  <head>
		<title>Bootstrap Form Helpers Basic Template</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
		
		<!-- Bootstrap Form Helpers -->
		<link href="css/bootstrap-form-helpers.min.css" rel="stylesheet" media="screen">

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		  <script src="js/html5shiv.js"></script>
		  <script src="js/respond.min.js"></script>
		<![endif]-->
	  </head>
	  <body>
		<h1>Hello, world!</h1>

		<!-- jQuery -->
		<script src="js/jquery-1.10.2.min.js"></script>
		
		<!-- Bootstrap -->
		<script src="js/bootstrap.min.js"></script>
		
		<!-- Bootstrap Form Helpers -->
		<script src="js/bootstrap-formhelpers.min.js"></script>
	  </body>
	</html>


### Compiling CSS and JavaScript

Bootstrap Form Helpers uses [Grunt](http://gruntjs.com/) with convenient methods for
working with the framework. It's how we compile our code, run tests, and more. To use
it, install the required dependencies as directed and then run some Grunt commands.

**Install Grunt**

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/BootstrapFormHelpers` directory, then run `npm install`. npm
will look at `package.json` and automatically install the necessary local dependencies.

When completed, you'll be able to run the various Grunt commands provided from the command line.

*Unfamiliar with `npm`? Don't have node installed?* That's a-okay. npm stands for
[node packaged modules](http://npmjs.org/) and is a way to manage development
dependencies through node.js. [Download and install node.js](http://nodejs.org/download/)
before proceeding.

**Available Grunt commands**

*Build* - `grunt`

Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. Uses
[recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).

*Only compile CSS and JavaScript* - `grunt dist`

`grunt dist` creates the `/dist` directory with compiled files. Uses [recess](http://twitter.github.io/recess/)
and [UglifyJS](http://lisperator.net/uglifyjs/).

*Tests* - `grunt test`

Runs [JSHint](http://jshint.com/).

*Watch* - `grunt watch`

This is a convenience method for watching just Less files and automatically building
them whenever you save.

**Troubleshooting dependencies**

Should you encounter problems with installing dependencies or running Grunt commands,
uninstall all previous dependency versions (global and local). Then, rerun `npm install`.