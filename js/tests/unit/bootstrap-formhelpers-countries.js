$(function () {

  'use strict';
  
  module('bootstrap-formhelpers-countries');

  test('should provide no conflict', function () {
    var bfhcountries;

    bfhcountries = $.fn.bfhcountries.noConflict();
    ok(!$.fn.bfhcountries, 'bfhcountries was set back to undefined (org value)');
    $.fn.bfhcountries = bfhcountries;
  });

  test('should be defined on jquery object', function () {
    ok($(document.body).bfhcountries, 'bfhcountries method is defined');
  });

  test('should return element', function () {
    var el;
    
    el = $('<div />');
    ok(el.bfhcountries()[0] === el[0], 'same element returned');
  });
  
  test('should display country name', function() {
    var countriesHTML = '<span class="bfh-countries" data-country="US"></span>',
      countries = $(countriesHTML).bfhcountries({country: 'US'});

    ok(countries.html() === 'United States', 'country name displayed');
  });
  
  test('should display country name with flag', function() {
    var countriesHTML = '<span class="bfh-countries" data-country="US" data-flags="true"></span>',
      countries = $(countriesHTML).bfhcountries({country: 'US', flags: true});

    ok(countries.html() === '<i class="glyphicon bfh-flag-US"></i> United States', 'country name displayed with flag');
  });
  
  test('should fill select with a list of countries', function() {
    var countriesHTML = '<select class="bfh-countries"></select>',
      countries = $(countriesHTML).bfhcountries();

    ok(countries.find('option').size() === 242, 'correct number of elements shown');
    ok(countries.find('option:selected').text() === '', 'correct option selected');
    ok(countries.val() === '', 'correct element value');
    ok(countries.find('option[value="US"]').text() === 'United States', 'valid country shown');
  });
  
  test('should fill select with a list of countries with preselected country', function() {
    var countriesHTML = '<select class="bfh-countries" data-country="US"></select>',
      countries = $(countriesHTML).bfhcountries({country: 'US'});
      
    ok(countries.find('option').size() === 242, 'correct number of elements shown');
    ok(countries.find('option:selected').text() === 'United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    ok(countries.find('option[value="US"]').text() === 'United States', 'valid country shown');
  });
  
  test('should fill select with predefined list of countries', function() {
    var countriesHTML = '<select class="bfh-countries" data-available="US,CA,MX"></select>',
      countries = $(countriesHTML).bfhcountries({available: 'US,CA,MX'});
      
    ok(countries.find('option').size() === 4, 'correct number of elements shown');
    ok(countries.find('option:selected').text() === '', 'correct option selected');
    ok(countries.val() === '', 'correct element value');
    ok(countries.find('option[value="US"]').text() === 'United States', 'valid country shown');
  });
  
  test('should fill select with a list of countries without a blank option', function() {
    var countriesHTML = '<select class="bfh-countries" data-country="US" data-blank="false"></select>',
      countries = $(countriesHTML).bfhcountries({country: 'US', blank: false});

    ok(countries.find('option').size() === 241, 'correct number of elements shown');
    ok(countries.find('option:selected').text() === 'United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    ok(countries.find('option[value="US"]').text() === 'United States', 'valid country shown');
  });
  
  test('should fill bfhselectbox with a list of countries', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries">' +
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
      countries = $(countriesHTML).bfhcountries();

    ok(countries.find('.bfh-selectbox-options > div > ul > li').size() === 242, 'correct number of elements shown');
    ok(countries.find('.bfh-selectbox-option').html() === '', 'correct option selected');
    ok(countries.val() === '', 'correct element value');
    ok(countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').html() === 'United States', 'valid country shown');
  });
  
  test('should fill bfhselectbox with a list of countries with preselected country', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries" data-country="US">' +
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
      countries = $(countriesHTML).bfhcountries({country: 'US'});
      
    ok(countries.find('.bfh-selectbox-options > div > ul > li').size() === 242, 'correct number of elements shown');
    ok(countries.find('.bfh-selectbox-option').html() === 'United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    ok(countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').html() === 'United States', 'valid country shown');
  });
  
  test('should fill bfhselectbox with predefined list of countries', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries" data-available="US,CA,MX">' +
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
      countries = $(countriesHTML).bfhcountries({available: 'US,CA,MX'});
      
    ok(countries.find('.bfh-selectbox-options > div > ul > li').size() === 4, 'correct number of elements shown');
    ok(countries.find('.bfh-selectbox-option').html() === '', 'correct option selected');
    ok(countries.val() === '', 'correct element value');
    ok(countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').html() === 'United States', 'valid country shown');
  });
  
  test('should fill bfhselectbox with a list of countries without a blank option', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries" data-country="US" data-blank="false">' +
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
      countries = $(countriesHTML).bfhcountries({country: 'US', blank: false});

    ok(countries.find('.bfh-selectbox-options > div > ul > li').size() === 241, 'correct number of elements shown');
    ok(countries.find('.bfh-selectbox-option').html() === 'United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    ok(countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').html() === 'United States', 'valid country shown');
  });
  
  test('should fill bfhselectbox with a list of countries with flags', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries" data-country="US" data-flags="true">' +
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
      countries = $(countriesHTML).bfhcountries({country: 'US', flags: true});

    ok(countries.find('.bfh-selectbox-options > div > ul > li').size() === 242, 'correct number of elements shown');
    ok(countries.find('.bfh-selectbox-option').html() === '<i class="glyphicon bfh-flag-US"></i>United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    ok(countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').html() === '<i class="glyphicon bfh-flag-US"></i>United States', 'valid country shown');
  });
  
  test('in bfhselectbox should have value after selecting a country', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries">' +
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
      countries = $(countriesHTML).appendTo('#qunit-fixture').bfhcountries();
      
    countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').click();
    ok(countries.find('.bfh-selectbox-option').html() === 'United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    
    countries.remove();
  });
  
  test('in bfhselectbox should have value after selecting a country with flags', function() {
    var countriesHTML = '<div class="bfh-selectbox bfh-countries" data-flags="true">' +
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
      countries = $(countriesHTML).appendTo('#qunit-fixture').bfhcountries({flags: true});
      
    countries.find('.bfh-selectbox-options > div > ul > li > a[data-option="US"]').click();
    ok(countries.find('.bfh-selectbox-option').html() === '<i class="glyphicon bfh-flag-US"></i>United States', 'correct option selected');
    ok(countries.val() === 'US', 'correct element value');
    
    countries.remove();
  });

});