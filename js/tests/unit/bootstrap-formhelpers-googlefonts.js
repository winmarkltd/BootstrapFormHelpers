$(function () {

  'use strict';
  
  module('bootstrap-formhelpers-googlefonts');

  test('should provide no conflict', function () {
    var bfhgooglefonts;

    bfhgooglefonts = $.fn.bfhgooglefonts.noConflict();
    ok(!$.fn.bfhgooglefonts, 'bfhgooglefonts was set back to undefined (org value)');
    $.fn.bfhgooglefonts = bfhgooglefonts;
  });

  test('should be defined on jquery object', function () {
    ok($(document.body).bfhgooglefonts, 'bfhgooglefonts method is defined');
  });

  test('should return element', function () {
    var el;
    
    el = $('<div />');
    ok(el.bfhgooglefonts()[0] === el[0], 'same element returned');
  });
  
  test('should fill select with a list of fonts', function() {
    var googlefontsHTML = '<select class="bfh-googlefonts"></select>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts();

    ok(googlefonts.find('option').size() === 625, 'correct number of elements shown');
    ok(googlefonts.find('option:selected').text() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('option[value="Lato"]').text() === 'Lato', 'valid font shown');
  });
  
  test('should fill select with a list of fonts with preselected font', function() {
    var googlefontsHTML = '<select class="bfh-googlefonts" data-font="Lato"></select>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({font: 'Lato'});
      
    ok(googlefonts.find('option').size() === 625, 'correct number of elements shown');
    ok(googlefonts.find('option:selected').text() === 'Lato', 'correct option selected');
    ok(googlefonts.val() === 'Lato', 'correct element value');
    ok(googlefonts.find('option[value="Lato"]').text() === 'Lato', 'valid font shown');
  });
  
  test('should fill select with predefined list of fonts', function() {
    var googlefontsHTML = '<select class="bfh-googlefonts" data-available="Open Sans,Josefin Slab,Lato"></select>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({available: 'Open Sans,Josefin Slab,Lato'});
      
    ok(googlefonts.find('option').size() === 4, 'correct number of elements shown');
    ok(googlefonts.find('option:selected').text() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('option[value="Lato"]').text() === 'Lato', 'valid font shown');
  });
  
  test('should fill select with list of fonts from a subset', function() {
    var googlefontsHTML = '<select class="bfh-googlefonts" data-subset="latin-ext"></select>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({subset: 'latin-ext'});
    
    ok(googlefonts.find('option').size() === 281, 'correct number of elements shown');
    ok(googlefonts.find('option:selected').text() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('option[value="Abril Fatface"]').text() === 'Abril Fatface', 'valid font shown');
  });
  
  test('should fill select with a list of fonts without a blank option', function() {
    var googlefontsHTML = '<select class="bfh-googlefonts" data-font="Lato" data-blank="false"></select>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({font: 'Lato', blank: false});

    ok(googlefonts.find('option').size() === 624, 'correct number of elements shown');
    ok(googlefonts.find('option:selected').text() === 'Lato', 'correct option selected');
    ok(googlefonts.val() === 'Lato', 'correct element value');
    ok(googlefonts.find('option[value="Lato"]').text() === 'Lato', 'valid font shown');
  });
  
  test('should fill bfhselectbox with a list of fonts', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts();

    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li').size() === 625, 'correct number of elements shown');
    ok(googlefonts.find('.bfh-selectbox-option').html() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Lato"]').html() === 'Lato', 'valid font shown');
  });
  
  test('should fill bfhselectbox with a list of fonts with preselected font', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts" data-font="Lato">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({font: 'Lato'});
      
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li').size() === 625, 'correct number of elements shown');
    ok(googlefonts.find('.bfh-selectbox-option').html() === 'Lato', 'correct option selected');
    ok(googlefonts.val() === 'Lato', 'correct element value');
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Lato"]').html() === 'Lato', 'valid font shown');
  });
  
  test('should fill bfhselectbox with predefined list of fonts', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts" data-available="Open Sans,Josefin Slab,Lato">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({available: 'Open Sans,Josefin Slab,Lato'});
      
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li').size() === 4, 'correct number of elements shown');
    ok(googlefonts.find('.bfh-selectbox-option').html() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Lato"]').html() === 'Lato', 'valid font shown');
  });
  
  test('should fill select with list of fonts from a subset', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts" data-subset="latin-ext">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({subset: 'latin-ext'});
      
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li').size() === 281, 'correct number of elements shown');
    ok(googlefonts.find('.bfh-selectbox-option').html() === '', 'correct option selected');
    ok(googlefonts.val() === '', 'correct element value');
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Abril Fatface"]').html() === 'Abril Fatface', 'valid font shown');
  });
  
  test('should fill bfhselectbox with a list of fonts without a blank option', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts" data-font="Lato" data-blank="false">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).bfhgooglefonts({font: 'Lato', blank: false});

    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li').size() === 624, 'correct number of elements shown');
    ok(googlefonts.find('.bfh-selectbox-option').html() === 'Lato', 'correct option selected');
    ok(googlefonts.val() === 'Lato', 'correct element value');
    ok(googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Lato"]').html() === 'Lato', 'valid font shown');
  });
  
  test('in bfhselectbox should have value after selecting a font', function() {
    var googlefontsHTML = '<div class="bfh-selectbox bfh-googlefonts">' +
      '<input type="hidden" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium" data-option=""></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      googlefonts = $(googlefontsHTML).appendTo('#qunit-fixture').bfhgooglefonts();
      
    googlefonts.find('.bfh-selectbox-options > div > ul > li > a[data-option="Lato"]').click();
    ok(googlefonts.find('.bfh-selectbox-option').html() === 'Lato', 'correct option selected');
    ok(googlefonts.val() === 'Lato', 'correct element value');
    
    googlefonts.remove();
  });

});