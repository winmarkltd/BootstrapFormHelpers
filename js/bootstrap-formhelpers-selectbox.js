/* ==========================================================
 * bootstrap-formhelpers-selectbox.js v1.3.1
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SELECTBOX CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=selectbox]'
    , SelectBox = function (element) {
      }

  SelectBox.prototype = {

    constructor: SelectBox

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
        
        $parent.find('[role=options] > li > [data-option="' + $this.find('.selectbox-option').data('option') + '"]').focus()
      }

      return false
    }

  , filter: function(e) {
    var $this
      , $parent
      , $items
      
    $this = $(this)
    
    $parent = $this.closest('.selectbox')
    
    $items = $('[role=options] li a', $parent)
    
    $items.hide()
    
    $items.filter(function() { return ($(this).text().toUpperCase().indexOf($this.val().toUpperCase()) != -1) }).show()
  }
  
  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode) && !/[A-z]/.test(String.fromCharCode(e.which))) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = $this.closest('.selectbox')

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=options] li a', $parent).filter(':visible')

      if (!$items.length) return

      $('body').off('mouseenter.selectbox.data-api', '[role=options] > li > a', SelectBox.prototype.mouseenter)
      
      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (/[A-z]/.test(String.fromCharCode(e.which))) {
      	var $subItems = $items.filter(function() { return ($(this).text().charAt(0).toUpperCase() == String.fromCharCode(e.which)) })
        var selectedIndex = $subItems.index($subItems.filter(':focus'))
        if (!~selectedIndex) index = $items.index($subItems)
        else if (selectedIndex >= $subItems.length - 1) index = $items.index($subItems)
        else index++
      }
      if (!~index) index = 0
      
      $items
        .eq(index)
        .focus()
        
      $('body').on('mouseenter.selectbox.data-api', '[role=options] > li > a', SelectBox.prototype.mouseenter)
    }
    
    , mouseenter: function (e) {
	  var $this
	  
	  $this = $(this)
	  
	  if ($this.is('.disabled, :disabled')) return
	  
	  $this.focus()
    }
    
    , select: function (e) {
      var $this
        , $parent
        , $toggle
        , $input
      
      $this = $(this)
      
      e.preventDefault()
      e.stopPropagation()
      
      if ($this.is('.disabled, :disabled')) return
      
      $parent = $this.closest('.selectbox')
      $toggle = $parent.find('.selectbox-option')
      $input = $parent.find('input[type="hidden"]')
      
      $toggle.data('option', $this.data('option'))
      $toggle.html($this.html())
      
      $input.val($this.data('option'))
      $input.change()
      
      clearMenus()
    }

  }

  function clearMenus() {
    getParent($(toggle))
      .removeClass('open')
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* SELECTBOX PLUGIN DEFINITION
   * ========================== */

  $.fn.selectbox = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('selectbox')
      if (!data) $this.data('selectbox', (data = new SelectBox(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.selectbox.Constructor = SelectBox


  /* APPLY TO STANDARD SELECTBOX ELEMENTS
   * =================================== */

  $(function () {
    $('html')
      .on('click.selectbox.data-api', clearMenus)
    $('body')
      .on('click.selectbox.data-api touchstart.selectbox.data-api'  , toggle, SelectBox.prototype.toggle)
      .on('keydown.selectbox.data-api', toggle + ', [role=options]' , SelectBox.prototype.keydown)
      .on('mouseenter.selectbox.data-api', '[role=options] > li > a', SelectBox.prototype.mouseenter)
      .on('click.selectbox.data-api', '[role=options] > li > a', SelectBox.prototype.select)  
      .on('click.selectbox.data-api', '.selectbox-filter', function (e) { return false })
      .on('propertychange.selectbox.data-api change.selectbox.data-api input.selectbox.data-api paste.selectbox.data-api', '.selectbox-filter', SelectBox.prototype.filter)
  })

}(window.jQuery);