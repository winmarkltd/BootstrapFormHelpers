---
layout: nitsef
title: jQuery plugins
description: Extend Bootstrap's components with Bootstrap Form Helpers custom jQuery plugins.
base_url: "./"
seo_url: "/"
---

 <!-- Boot Navigation -->
{% include boot-nav-main.html %}
<div class="well bootheader row">
  <div class="container">
    <div class="col-lg-5 text-center row"> <img src="{{ page.base_url }}assets/img/boot_logo.png" alt="Logo" height="107" width="107">
      <h1>Extend Bootstrap</h1>
      <h4>now with 15 custom jQuery plugins</h4>
      <p>
       <a onclick="ga('send', 'event', 'button', 'click', 'buy-small');" href="/buy/"> <button type="button" class="btn btn-success bootheader_buttons">BUY NOW<br><span style="font-size:10px;">Get Full Package</span></button></a>
        or
        <a onclick="ga('send', 'event', 'button', 'click', 'buy-small');" href="/freedownload"><button type="button" class="btn btn-default bootheader_buttons">DOWNLOAD<br><span style="font-size:10px;">Get 7 Free Plugins</span></button></a>
      </p>
      <small><em>Today Only! Huge savings when you buy a commercial license!</em></small></div>
    <!-- Col 4 Header -->
    <div class="col-lg-7 text-center"><img src="{{ page.base_url }}assets/img/imac.png" alt="iMac" class="imac" height="473" width="650"></div>
    <!-- Col 8 Header--> 
  </div>
</div>
<!-- End of Boot Header -->

<div class="container">
  <div class="col-lg-8 row pull-top">
    <h2>About Bootstrap Form Helpers</h2>
    Bootstrap Form Helpers is a collection of jQuery plugins to help you build better forms. The plugins can be used individually
    but some of them work together like Countries and States. </div>
  <div class="clearfix"></div>
  <p> <strong>The collection includes:</strong></p>


<!-- Include the List -->
 {% include boot-plugin-list.html %}
 
 <div class="well well-sm separate text-center panel panel-danger"><span class=glyphicon glyphicon-heart"></span> Russian Country list added</div>
  </div>
  
  <div class="well well-sm separate text-center">These jQuery plugins are based on Bootstrap &amp; are distributed for free. Commercial license is available for commercial purposes...
   <a onclick="ga('send', 'event', 'button', 'click', 'buy-small');" href="/buy"> <button type="button" class="btn btn-success">Buy Now</button></a>
  </div>
</div>
<!-- Container-->

<div class="well code">
  <div class="boot_slider">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> 
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active"><img src="{{ page.base_url }}assets/img/boot_slide1.jpg" alt="..."></div>
        <div class="item "> <img src="{{ page.base_url }}assets/img/boot_slide2.jpg" alt="..."> </div>
        <div class="item "> <img src="{{ page.base_url }}assets/img/boot_slide3.jpg" alt="..."></div>
        <div class="item "> <img src="{{ page.base_url }}assets/img/boot_slide4.jpg" alt="..."> </div>
      </div>
      
      <!-- Controls --> 
      <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a> </div>
  </div>
</div>
</div>
<!-- Code -->

<div class="container">
  <div class="separate">
    <div class="container text-center">
      <h2>Getting Started</h2>
      Check out our Getting Started guide for all the information on getting setup with Bootstrap Form Helpers.<br>
      Be sure to checkout the Browser Support and Requirements below.
      <p class="separate">
        <a href="/gettingstarted/#jquery-plugins"><button type="button" class="btn btn-success bootheader_buttons btn-lg">Click Here to Start</button></a>
      </p>
    </div>
  </div>
  <!-- Getting Started -->
  
  <div class="separate">
    <div class="col-lg-6">
      <div class="panel panel-default">
        <div class="panel-heading text-center">
          <h3>Browser Support</h3>
        </div>
        <div class="panel-body">
          <p><strong>Bootstrap Form Helpers</strong> is built to work best in the latest desktop and mobile browsers.</p>
          <p>Specifically, we support the latest versions of the following:</p>
        </div>
        <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-check"></span> <strong>Chrome</strong> <em>(Mac, Windows, iOS, and Android)</em></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-check"></span> <strong>Safari</strong> <em>(Mac and iOS only)</em></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-check"></span> <strong>Firefox</strong> <em>(Mac, Windows)</em></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-check"></span> <strong>Opera</strong> <em>(Mac, Windows)</em></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-check"></span> <strong>Internet Explorer</strong></li>
        </ul>
        <div class="panel-body"> Unofficially, Bootstrap Form Helpers should look and behave well enough in Chromium for Linux and Internet Explorer 7,
          though they are not officially supported. </div>
      </div>
    </div>
  </div>
  <!-- Browser Support -->
  
  <div class="separate">
    <div class="col-lg-6">
      <div class="panel panel-success">
        <div class="panel-heading text-center">
          <h3>Requirements</h3>
        </div>
        <div class="panel-body">
          <p> The following libraries are required for these plugins to work:</p>
        </div>
        <ul class="list-group">
          <li class="list-group-item"><span class="glyphicon glyphicon-hand-right"></span> <a href="#">Bootstrap - v3.0.0</a></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-hand-right"></span> <a href="#"> jQuery - v1.10.2</a></li>
        </ul>
        <div class="panel-body">
          <p>You can also get CDN Version of these libraries <a href="http://www.bootstrapcdn.com" target="_blank">here</a></p>
        </div>
      </div>
    </div>
  </div>
  <!--Requirements -->
  
  <div class="separate">
    <div class="col-lg-6">
      <div class="panel panel-default">
        <div class="panel-heading text-center">
          <h3>Bugs and Feature Request</h3>
        </div>
        <div class="panel-body">
          <p>Have a bug or a feature request? <a href="https://github.com/vlamanna/BootstrapFormHelpers/issues" target="_blank">Please open a new issue</a>.</p>
          <p> Before opening any issue, please search for existing issues and read the <a href="https://github.com/necolas/issue-guidelines" target="_blank">Issue Guidelines</a>, written by <a href="https://github.com/necolas/" target="_blank">Nicolas Gallagher</a>.</p>
        </div>
      </div>
    </div>
  </div>
  <!--Bugs and Feature Request-->
  <div class="clearfix"></div>
  <div class="separate">
    <div class="panel panel-primary text-center">
      <div class="panel-heading">
        <h3>Need Support?</h3>
      </div>
      <div class="panel-body">
        <p>Premium support is available for people having a commercial license of the library. To
          request support visit our <a href="./support/">support page</a>.</p>
        <p>If you don't have a commercial
          license,</p>
        <p>
         <a href="./buy/" onclick="ga('send', 'event', 'button', 'click', 'buy');" class="btn btn-success btn-lg">Buy Now</a>
        </p>
      </div>
    </div>
  </div>
  <div class="separate">
    <div class="panel panel-default text-center">
      <div class="panel-heading">
        <h3>License</h3>
      </div>
      <div class="panel-body">
        <p>Bootstrap Form Helpers is released under the Apache 2 license and is copyright 2013 Bootstrap Form Helpers.</p>
        <p> Bootstrap Form Helpers is available for free for personal or company internal use. A commercial license is available for people
          who wants to use it for commercial purposes. The commercial license comes with premium support. </p>
      </div>
    </div>
  </div>
  <!--Support--> 
</div>