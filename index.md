---
layout: default
title: jQuery plugins
description: Extend Bootstrap's components with Bootstrap Form Helpers custom jQuery plugins.
base_url: "./"
seo_url: "/"
---

### About Bootstrap Form Helpers

**Bootstrap** Form Helpers is a collection of **jQuery plugins** to help you build
better forms. The plugins can be used individually but some of them work together
like Countries and States. The collection includes:

* A custom select element
* A country picker
* A state picker
* A currency picker
* A phone input
* A language picker
* A timezone picker
* A Google font picker
* A date picker
* A time picker
* A font picker
* A font size picker

These [*jQuery plugins*](http://plugins.jquery.com) are based on
[*Bootstrap*](https://github.com/twbs/bootstrap).

The plugins are distributed for free but you can contribute and make them better.


### Quick start

Two quick start options are available:

* [Download the latest release](https://github.com/vlamanna/BootstrapFormHelpers/archive/master.zip).
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


### Requirements

The following libraries are required for these plugins to work:

* [jQuery](http://jquery.com/) - v1.10.2
* [Bootstrap](http://getbootstrap.com/) - v3.0.0


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
	

### Browser support

Bootstrap Form Helpers is built to work best in the latest desktop and mobile browsers.

**Supported browsers**

Specifically, we support the latest versions of the following:

* Chrome (Mac, Windows, iOS, and Android)
* Safari (Mac and iOS only, as Windows has more or less been discontinued)
* Firefox (Mac, Windows)
* Internet Explorer
* Opera (Mac, Windows)

Unofficially, Bootstrap Form Helpers should look and behave well enough in Chromium
for Linux and Internet Explorer 7, though they are not officially supported.


### Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/vlamanna/BootstrapFormHelpers/issues).
Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines),
written by [Nicolas Gallagher](https://github.com/necolas/).


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
