$(function () {

  'use strict';
  
  module('bootstrap-formhelpers-select');

  test('should provide no conflict', function () {
    var bfhselectbox;

    bfhselectbox = $.fn.bfhselectbox.noConflict();
    ok(!$.fn.bfhselectbox, 'bfhselectbox was set back to undefined (org value)');
    $.fn.bfhselectbox = bfhselectbox;
  });

  test('should be defined on jquery object', function () {
    ok($(document.body).bfhselectbox, 'bfhselectbox method is defined');
  });

  test('should return element', function () {
    var el;
    
    el = $('<div />');
    ok(el.bfhselectbox()[0] === el[0], 'same element returned');
  });
  
  test('should not open select box if target is disabled', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a disabled="disabled" class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).find('[data-toggle="bfh-selectbox"]').bfhselectbox().click();

    ok(!selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
  });
  
  test('should not open select box if target is disabled', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle disabled" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).find('[data-toggle="bfh-selectbox"]').bfhselectbox().click();

    ok(!selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
  });
  
  test('should add class open to options if clicked', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).find('[data-toggle="bfh-selectbox"]').bfhselectbox().click();
      
    ok(selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
  });
  
  test('should add and remove class open to options if toggled', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).appendTo('#qunit-fixture');
      
    selectbox.bfhselectbox('toggle');
    ok(selectbox.hasClass('open'), 'open class added on toggle');
    
    selectbox.bfhselectbox('toggle');
    ok(!selectbox.hasClass('open'), 'open class removed on toggle');
    
    selectbox.remove();
  });
  
  test('should add class open to options if focused', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .focus();
      
    ok(selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on focus');
    selectbox.remove();
  });
  
  test('should test if element has a # before assuming it\'s a selector', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="/foo/">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).find('[data-toggle="bfh-selectbox"]').bfhselectbox().click();
      
    ok(selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
  });
  
  test('should remove open class if body clicked', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .click();
      
    ok(selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
    $('body').click();
    ok(!selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class removed');
    selectbox.remove();
  });
  
  test('should remove open class if option selected', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .click();
      
    ok(selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class added on click');
    selectbox.parent('.bfh-selectbox').find('[data-option="1"]').click();
    ok(!selectbox.parent('.bfh-selectbox').hasClass('open'), 'open class removed');
    selectbox.remove();
  });
  
  test('should remove open class if body clicked, with multiple select boxes', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox1" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox2" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML).appendTo('#qunit-fixture').find('[data-toggle="bfh-selectbox"]'),
      first = selectbox.first(),
      last = selectbox.last();
      
    ok(selectbox.length === 2, 'Should be two select boxes');
      
    first.click();
    ok(first.parents('.open').length === 1, 'open class added on click');
    ok($('#qunit-fixture .open').length === 1, 'only one object is open');
    $('body').click();
    ok($('#qunit-fixture .open').length === 0, 'open class removed');

    last.click();
    ok(last.parent('.open').length === 1, 'open class added on click');
    ok($('#qunit-fixture .open').length === 1, 'only one object is open');
    $('body').click();
    ok($('#qunit-fixture .open').length === 0, 'open class removed');

    $('#qunit-fixture').html('');
  });
  
  test('should have value after init', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="2">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox();
      
    ok(selectbox.parent('.bfh-selectbox').val() === '2', 'value is 2');
    selectbox.remove();
  });
  
  test('should have value after selecting an option', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="2">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .click();
    
    selectbox.parent('.bfh-selectbox').find('[data-option="1"]').click();
    ok(selectbox.parent('.bfh-selectbox').val() === '1', 'value is 1');
    selectbox.remove();
  });
  
  test('should have selected option after setting value', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="2">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .click();
    
    selectbox.parent('.bfh-selectbox').find('[data-option="1"]').click();
    ok(selectbox.find('span').text() === 'Option 1', 'selected option is 1');
    selectbox.remove();
  });
  
  test('should filter elements', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="2">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox()
        .click();
    
    selectbox.parent('.bfh-selectbox').find('.bfh-selectbox-filter').val('Option 1').change();
    ok(selectbox.parent('.bfh-selectbox').find('[role="option"] > li > a:visible').length === 1, 'options are filtered');
    selectbox.remove();
  });
  
  test('should fire show and hide event', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox();
        
    stop();

    selectbox
      .parent('.bfh-selectbox')
      .bind('show.bfhselectbox', function () {
        ok(true, 'show was called');
      })
      .bind('hide.bfhselectbox', function () {
        ok(true, 'hide was called');
        start();
      });

    selectbox.click();
    $(document.body).click();
    
    selectbox.remove();
  });
  
  test('should fire shown and hiden event', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox();
        
    stop();

    selectbox
      .parent('.bfh-selectbox')
      .bind('shown.bfhselectbox', function () {
        ok(true, 'shown was called');
      })
      .bind('hidden.bfhselectbox', function () {
        ok(true, 'hidden was called');
        start();
      });

    selectbox.click();
    $(document.body).click();
    
    selectbox.remove();
  });
  
  test('should fire change event', function () {
    var selectboxHTML = '<div class="bfh-selectbox">' +
      '<input type="hidden" name="selectbox" value="">' +
      '<a class="bfh-selectbox-toggle" role="button" data-toggle="bfh-selectbox" href="#">' +
      '<span class="bfh-selectbox-option bfh-selectbox-medium"></span>' +
      '<b class="caret"></b>' +
      '</a>' +
      '<div class="bfh-selectbox-options">' +
      '<input type="text" class="bfh-selectbox-filter">' +
      '<div role="listbox">' +
      '<ul role="option">' +
      '<li><a tabindex="-1" href="#" data-option="1">Option 1</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="2">Option 2</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="3">Option 3</a></li>' +
      '<li><a tabindex="-1" href="#" data-option="4">Option 4</a></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>',
      selectbox = $(selectboxHTML)
        .appendTo('#qunit-fixture')
        .find('[data-toggle="bfh-selectbox"]')
        .bfhselectbox();
        
    stop();

    selectbox
      .parent('.bfh-selectbox')
      .bind('change.bfhselectbox', function () {
        ok(true, 'change was called');
        start();
      });

    selectbox.click();
    selectbox.parent('.bfh-selectbox').find('[data-option="1"]').click();
    
    selectbox.remove();
  });

});