/* ==========================================================
 * bootstrap-formhelpers-timepicker.js
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


 /* TIMEPICKER CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=timepicker]'
    , TimePicker = function (element, options) {
        this.options = $.extend({}, $.fn.timepicker.defaults, options)
    	this.$element = $(element)
        this.initPopover()
      }

  TimePicker.prototype = {

    constructor: TimePicker
  
  , initPopover: function() {
    var time = this.options.time
    
    if (time == "") {
      var today = new Date()
    
      this.$element.data('hour', today.getHours())
      this.$element.data('minute', today.getMinutes())
    } else {
      this.$element.find('.timepicker-toggle').val(time)
      var timeParts = new String(time).split(":")
      this.$element.data('hour', timeParts[0])
      this.$element.data('minute', timeParts[1])
    }
    
    this.updatePopover()
  }
  
  , updatePopover: function() {
    var hour = this.$element.data('hour')
    var minute = this.$element.data('minute')
    
    hour = new String(hour)
    if (hour.length == 1) {
      hour = "0" + hour
    }
    
    minute = new String(minute)
    if (minute.length == 1) {
      minute = "0" + minute
    }
    
    this.$element.find('.hour > input[type=text]').val(hour)
    this.$element.find('.minute > input[type=text]').val(minute)
    this.$element.find('.timepicker-toggle').val(hour + ":" + minute)
  }
  
  , previousHour: function (e) {
    var $this = $(this)
      , $parent
      , $timePicker
      
    $parent = $this.closest('.timepicker')
    
    if ($parent.data('hour') == 0) {
      $parent.data('hour', 23)
    } else {
      $parent.data('hour', new Number($parent.data('hour')) - 1)
    }
    
    $timePicker = $parent.data('timepicker')
    $timePicker.updatePopover()
    
    return false;
  }
  
  , nextHour: function (e) {
    var $this = $(this)
      , $parent
      , $timePicker
      
    $parent = $this.closest('.timepicker')
    
    if ($parent.data('hour') == 23) {
      $parent.data('hour', 0)
    } else {
      $parent.data('hour', new Number($parent.data('hour')) + 1)
    }
    
    $timePicker = $parent.data('timepicker')
    $timePicker.updatePopover()
    
    return false;
  }
  
  , previousMinute: function (e) {
    var $this = $(this)
      , $parent
      , $timePicker
      
    $parent = $this.closest('.timepicker')
    
    if ($parent.data('minute') == 0) {
      $parent.data('minute', 59)
    } else {
      $parent.data('minute', new Number($parent.data('minute')) - 1)
    }
    
    $timePicker = $parent.data('timepicker')
    $timePicker.updatePopover()
    
    return false;
  }
  
  , nextMinute: function (e) {
    var $this = $(this)
      , $parent
      , $timePicker
      
    $parent = $this.closest('.timepicker')
    
    if ($parent.data('minute') == 59) {
      $parent.data('minute', 0)
    } else {
      $parent.data('minute', new Number($parent.data('minute')) + 1)
    }
    
    $timePicker = $parent.data('timepicker')
    $timePicker.updatePopover()
    
    return false;
  }
  
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
      }

      return false
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


  /* TIMEPICKER PLUGIN DEFINITION
   * ========================== */

  $.fn.timepicker = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('timepicker')
        , options = typeof option == 'object' && option
        
      if (!data) $this.data('timepicker', (data = new TimePicker(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.timepicker.Constructor = TimePicker

  $.fn.timepicker.defaults = {
    time: ""
  }
  
  /* APPLY TO STANDARD TIMEPICKER ELEMENTS
   * =================================== */

  $(window).on('load', function () {
    $('div.timepicker').each(function () {
      var $timepicker = $(this)

      $timepicker.timepicker($timepicker.data())
    })
  })
  
  $(function () {
    $('html')
      .on('click.timepicker.data-api', clearMenus)
    $('body')
      .on('click.timepicker.data-api touchstart.timepicker.data-api', toggle, TimePicker.prototype.toggle)
      .on('click.timepicker.data-api touchstart.timepicker.data-api', 'table.timepicker-table .hour > .previous', TimePicker.prototype.previousHour)
      .on('click.timepicker.data-api touchstart.timepicker.data-api', 'table.timepicker-table .hour > .next', TimePicker.prototype.nextHour)
      .on('click.timepicker.data-api touchstart.timepicker.data-api', 'table.timepicker-table .minute > .previous', TimePicker.prototype.previousMinute)
      .on('click.timepicker.data-api touchstart.timepicker.data-api', 'table.timepicker-table .minute > .next', TimePicker.prototype.nextMinute)
  })

}(window.jQuery);