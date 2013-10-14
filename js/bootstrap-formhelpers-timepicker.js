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

  'use strict';


 /* TIMEPICKER CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=bfh-timepicker]',
      BFHTimePicker = function (element, options) {
        this.options = $.extend({}, $.fn.bfhtimepicker.defaults, options);
        this.$element = $(element);
        this.initPopover();
      };

  BFHTimePicker.prototype = {

    constructor: BFHTimePicker,
  
    initPopover: function() {
      var time,
          today,
          timeParts;
          
      time = this.options.time;
    
      if (time === '') {
        today = new Date();
    
        this.$element.data('hour', today.getHours());
        this.$element.data('minute', today.getMinutes());
      } else {
        timeParts = String(time).split(':');
        
        this.$element.find('.bfh-timepicker-toggle').val(time);
        this.$element.data('hour', timeParts[0]);
        this.$element.data('minute', timeParts[1]);
      }
    
      this.updatePopover();
    },
  
    updatePopover: function() {
      var hour,
          minute;
          
      hour = this.$element.data('hour');
      minute = this.$element.data('minute');
    
      hour = String(hour);
      if (hour.length === 1) {
        hour = '0' + hour;
      }
    
      minute = String(minute);
      if (minute.length === 1) {
        minute = '0' + minute;
      }
    
      this.$element.find('.hour > input[type=text]').val(hour);
      this.$element.find('.minute > input[type=text]').val(minute);
      this.$element.find('.bfh-timepicker-toggle > input[type=text]').val(hour + ':' + minute);
    },
  
    previousHour: function () {
      var $this,
          $parent,
          $timePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-timepicker');
    
      if ($parent.data('hour') === 0) {
        $parent.data('hour', 23);
      } else {
        $parent.data('hour', Number($parent.data('hour')) - 1);
      }
    
      $timePicker = $parent.data('bfhtimepicker');
      $timePicker.updatePopover();
    
      return false;
    },
  
    nextHour: function () {
      var $this,
          $parent,
          $timePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-timepicker');
    
      if ($parent.data('hour') === 23) {
        $parent.data('hour', 0);
      } else {
        $parent.data('hour', Number($parent.data('hour')) + 1);
      }
    
      $timePicker = $parent.data('bfhtimepicker');
      $timePicker.updatePopover();
    
      return false;
    },
  
    previousMinute: function () {
      var $this,
          $parent,
          $timePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-timepicker');
    
      if ($parent.data('minute') === 0) {
        $parent.data('minute', 59);
      } else {
        $parent.data('minute', Number($parent.data('minute')) - 1);
      }
    
      $timePicker = $parent.data('bfhtimepicker');
      $timePicker.updatePopover();
    
      return false;
    },
  
    nextMinute: function () {
      var $this,
          $parent,
          $timePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-timepicker');
    
      if ($parent.data('minute') === 59) {
        $parent.data('minute', 0);
      } else {
        $parent.data('minute', Number($parent.data('minute')) + 1);
      }
    
      $timePicker = $parent.data('bfhtimepicker');
      $timePicker.updatePopover();
    
      return false;
    },
  
    toggle: function (e) {
      var $this,
          $parent,
          isActive;

      $this = $(this);
      
      if ($this.is('.disabled, :disabled')) {
        return;
      }

      $parent = getParent($this);

      if (e && e.type !== 'click') {
        window.setTimeout(function() {
          $parent.addClass('open');
        }, 200);
        
        return false;
      }
      
      isActive = $parent.hasClass('open');

      clearMenus();

      if (!isActive) {
        $parent.toggleClass('open');
      }

      return false;
    }
  };

  function clearMenus() {
    getParent($(toggle)).removeClass('open');
  }

  function getParent($this) {
    var selector,
        $parent;

    selector = $this.attr('data-target');
    
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '');
    }

    $parent = $(selector);
    if (!$parent.length) {
      $parent = $this.parent();
    }

    return $parent;
  }


  /* TIMEPICKER PLUGIN DEFINITION
   * ========================== */

  $.fn.bfhtimepicker = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;
          
      $this = $(this);
      data = $this.data('bfhtimepicker');
      options = typeof option === 'object' && option;
        
      if (!data) {
        $this.data('bfhtimepicker', (data = new BFHTimePicker(this, options)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };

  $.fn.bfhtimepicker.Constructor = BFHTimePicker;

  $.fn.bfhtimepicker.defaults = {
    time: ''
  };
  
  
  /* TIMEPICKER DATA-API
   * ============== */

  $(window).on('load', function () {
    $('div.bfh-timepicker').each(function () {
      var $timepicker;
      
      $timepicker = $(this);

      $timepicker.bfhtimepicker($timepicker.data());
    });
  });
  
  
  /* APPLY TO STANDARD TIMEPICKER ELEMENTS
   * =================================== */
   
  $(function () {
    $('html')
      .on('click.bfhtimepicker.data-api', clearMenus);
    $('body')
      .on('click.bfhtimepicker.data-api focus.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', toggle, BFHTimePicker.prototype.toggle)
      .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table .hour > .previous', BFHTimePicker.prototype.previousHour)
      .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table .hour > .next', BFHTimePicker.prototype.nextHour)
      .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table .minute > .previous', BFHTimePicker.prototype.previousMinute)
      .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table .minute > .next', BFHTimePicker.prototype.nextMinute)
      .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table', function() { return false; });
  });

}(window.jQuery);
