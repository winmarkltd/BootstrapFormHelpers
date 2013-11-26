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


+function ($) {

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

    setTime: function() {
      var time,
          today,
          timeParts;

      time = this.options.time;

      if (time === '' || time === 'now' || time === undefined) {
        today = new Date();

        if (time === 'now') {
          this.$element.val(formatTime(today.getHours(), today.getMinutes()));
        }

        this.$element.data('hour', today.getHours());
        this.$element.data('minute', today.getMinutes());
      } else {
        timeParts = String(time).split(':');

        this.$element.val(time);
        this.$element.data('hour', timeParts[0]);
        this.$element.data('minute', timeParts[1]);
      }
    },

    initPopover: function() {
      var iconLeft,
          iconRight,
          iconAddon;

      iconLeft = '';
      iconRight = '';
      iconAddon = '';
      if (this.options.icon !== '') {
        if (this.options.align === 'right') {
          iconRight = '<span class="input-group-addon"><i class="' + this.options.icon + '"></i></span>';
        } else {
          iconLeft = '<span class="input-group-addon"><i class="' + this.options.icon + '"></i></span>';
        }
        iconAddon = 'input-group';
      }

      this.$element.html(
        '<div class="' + iconAddon + ' bfh-timepicker-toggle" data-toggle="bfh-timepicker">' +
        iconLeft +
        '<input type="text" name="' + this.options.name + '" class="' + this.options.input + '" placeholder="' + this.options.placeholder + '" readonly>' +
        iconRight +
        '</div>' +
        '<div class="bfh-timepicker-popover">' +
        '<table class="table">' +
        '<tbody>' +
        '<tr>' +
        '<td class="hour">' +
        '<input type="text" class="' + this.options.input + ' bfh-number"  data-min="0" data-max="23" data-zeros="true" data-wrap="true">' +
        '</td>' +
        '<td class="separator">:</td>' +
        '<td class="minute">' +
        '<input type="text" class="' + this.options.input + ' bfh-number"  data-min="0" data-max="59" data-zeros="true" data-wrap="true">' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>'
      );

      this.$element
        .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', toggle, BFHTimePicker.prototype.toggle)
        .on('click.bfhtimepicker.data-api touchstart.bfhtimepicker.data-api', '.bfh-timepicker-popover > table', function() { return false; });

      this.$element.find('.bfh-number').each(function () {
        var $number;

        $number = $(this);

        $number.bfhnumber($number.data());
        
        $number.on('change', BFHTimePicker.prototype.change);
      });
      
      this.setTime();

      this.updatePopover();
    },

    updatePopover: function() {
      var hour,
          minute;

      hour = this.$element.data('hour');
      minute = this.$element.data('minute');

      this.$element.find('.hour input[type=text]').val(hour).change();
      this.$element.find('.minute input[type=text]').val(minute).change();
    },
    
    change: function() {
      var $this,
          $parent,
          $timePicker;

      $this = $(this);
      $parent = getParent($this);
      
      $timePicker = $parent.data('bfhtimepicker');
      
      if ($timePicker && $timePicker !== 'undefined') {
        $parent.val($parent.find('.hour input[type=text]').val() + ':' + $parent.find('.minute input[type=text]').val());

        $parent.trigger('change.bfhtimepicker');
      }

      return false;
    },

    toggle: function(e) {
      var $this,
          $parent,
          isActive;

      $this = $(this);
      $parent = getParent($this);

      if ($parent.is('.disabled') || $parent.attr('disabled') !== undefined) {
        return true;
      }

      isActive = $parent.hasClass('open');

      clearMenus();

      if (!isActive) {
        $parent.trigger(e = $.Event('show.bfhtimepicker'));

        if (e.isDefaultPrevented()) {
          return true;
        }

        $parent
          .toggleClass('open')
          .trigger('shown.bfhtimepicker');

        $this.focus();
      }

      return false;
    }
  };

  function formatTime(hour, minute) {
    hour = String(hour);
    if (hour.length === 1) {
      hour = '0' + hour;
    }

    minute = String(minute);
    if (minute.length === 1) {
      minute = '0' + minute;
    }

    return hour + ':' + minute;
  }
  
  function clearMenus() {
    var $parent;

    $(toggle).each(function (e) {
      $parent = getParent($(this));

      if (!$parent.hasClass('open')) {
        return true;
      }

      $parent.trigger(e = $.Event('hide.bfhtimepicker'));

      if (e.isDefaultPrevented()) {
        return true;
      }

      $parent
        .removeClass('open')
        .trigger('hidden.bfhtimepicker');
    });
  }

  function getParent($this) {
    return $this.closest('.bfh-timepicker');
  }


  /* TIMEPICKER PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.bfhtimepicker;

  $.fn.bfhtimepicker = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhtimepicker');
      options = typeof option === 'object' && option;
      this.type = 'bfhtimepicker';

      if (!data) {
        $this.data('bfhtimepicker', (data = new BFHTimePicker(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhtimepicker.Constructor = BFHTimePicker;

  $.fn.bfhtimepicker.defaults = {
    icon: 'glyphicon glyphicon-time',
    align: 'left',
    input: 'form-control',
    placeholder: '',
    name: '',
    time: 'now'
  };


  /* TIMEPICKER NO CONFLICT
   * ========================== */

  $.fn.bfhtimepicker.noConflict = function () {
    $.fn.bfhtimepicker = old;
    return this;
  };


  /* TIMEPICKER VALHOOKS
   * ========================== */

  var origHook;
  if ($.valHooks.div){
    origHook = $.valHooks.div;
  }
  $.valHooks.div = {
    get: function(el) {
      if ($(el).hasClass('bfh-timepicker')) {
        return $(el).find('.bfh-timepicker-toggle > input[type="text"]').val();
      } else if (origHook) {
        return origHook.get(el);
      }
    },
    set: function(el, val) {
      if ($(el).hasClass('bfh-timepicker')) {
        $(el).find('.bfh-timepicker-toggle > input[type="text"]').val(val);
      } else if (origHook) {
        return origHook.set(el,val);
      }
    }
  };


  /* TIMEPICKER DATA-API
   * ============== */

  $(document).ready( function () {
    $('div.bfh-timepicker').each(function () {
      var $timepicker;

      $timepicker = $(this);

      $timepicker.bfhtimepicker($timepicker.data());
    });
  });


  /* APPLY TO STANDARD TIMEPICKER ELEMENTS
   * =================================== */

  $(document)
    .on('click.bfhtimepicker.data-api', clearMenus);

}(window.jQuery);
