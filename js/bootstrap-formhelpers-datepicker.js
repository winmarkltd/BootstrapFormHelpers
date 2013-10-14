/* ==========================================================
 * bootstrap-formhelpers-datepicker.js
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


  /* BFHDATEPICKER CLASS DEFINITION
   * ========================= */

  var toggle = '[data-toggle=bfh-datepicker]',
      BFHDatePicker = function (element, options) {
        this.options = $.extend({}, $.fn.bfhdatepicker.defaults, options);
        this.$element = $(element);
        this.initCalendar();
      };

  BFHDatePicker.prototype = {

    constructor: BFHDatePicker,

    daysInMonth: function(month, year) {
      return new Date(year, month, 0).getDate();
    },
  
    dayOfWeek: function(month, year, day) {
      return new Date(year, month, day).getDay();
    },
  
    formatDate: function(month, year, day) {
      var date;
      
      date = this.options.format;
      
      month += 1;
      month = String(month);
      day = String(day);
    
      if (month.length === 1) {
        month = '0' + month;
      }
      if (day.length === 1) {
        day = '0' + day;
      }
      
      date = date.replace('m', month);
      date = date.replace('y', year);
      date = date.replace('d', day);
    
      return date;
    },
  
    parse: function(element, date) {
      var format,
          monthPos,
          yearPos,
          dayPos,
          indexes,
          parts,
          i;
          
      format = this.options.format;
      monthPos = format.indexOf('m');
      yearPos = format.indexOf('y');
      dayPos = format.indexOf('d');
    
      indexes = [
        {'type': 'm', 'pos': monthPos},
        {'type': 'y', 'pos': yearPos},
        {'type': 'd', 'pos': dayPos}
      ];
    
      indexes.sort(function(a, b) {return a.pos - b.pos;});
    
      parts = date.match(/(\d+)/g);
    
      for (i=0; i < indexes.length; i=i+1) {
        if (indexes[i].type === element) {
          return Number(parts[i]).toString();
        }
      }
    },
  
    initCalendar: function() {
      var date,
          start,
          end,
          today;
      
      date = this.options.date;
      start = this.options.start;
      end = this.options.end;
      today = new Date();
    
      if (date === '' || date === 'today') {
        if (date === 'today') {
          this.$element.find('input[type=text]').val(this.formatDate(today.getMonth(), today.getFullYear(), today.getDate()));
        }
        
        this.$element.data('month', today.getMonth());
        this.$element.data('year', today.getFullYear());
      } else {
        this.$element.find('input[type=text]').val(date);
        this.$element.data('month', this.parse('m', date) - 1);
        this.$element.data('year', this.parse('y', date));
      }
    
      if (start !== '') {
        this.$element.data('lowerlimit', '1');
      
        if (start === 'today') {
          this.$element.data('lowerday', today.getDate());
          this.$element.data('lowermonth', today.getMonth());
          this.$element.data('loweryear', today.getFullYear());
        } else {
          this.$element.data('lowerday', this.parse('d', start));
          this.$element.data('lowermonth', this.parse('m', start) - 1);
          this.$element.data('loweryear', this.parse('y', start));
        }
      } else {
        this.$element.data('lowerlimit', '0');
      }
    
      if (end !== '') {
        this.$element.data('higherlimit', '1');
        
        if (end === 'today') {
          this.$element.data('higherday', today.getDate());
          this.$element.data('highermonth', today.getMonth());
          this.$element.data('higheryear', today.getFullYear());
        } else {
          this.$element.data('higherday', this.parse('d', end));
          this.$element.data('highermonth', this.parse('m', end) - 1);
          this.$element.data('higheryear', this.parse('y', end));
        }
      } else {
        this.$element.data('higherlimit', '0');
      }
    
      this.updateCalendar();
    },
  
    updateCalendar: function () {
      var $calendar,
          $daysHeader,
          $days,
          today,
          month,
          year,
          lowerlimit,
          lowerday,
          lowermonth,
          loweryear,
          higherlimit,
          higherday,
          highermonth,
          higheryear,
          numDaysPrevious,
          numDays,
          firstDay,
          lastDay,
          row,
          previousDay,
          day,
          i,
          j;
    
      today = new Date();
      month = this.$element.data('month');
      year = this.$element.data('year');
    
      lowerlimit = this.$element.data('lowerlimit');
      if (lowerlimit) {
        lowerday = this.$element.data('lowerday');
        lowermonth = this.$element.data('lowermonth');
        loweryear = this.$element.data('loweryear');
      }
    
      higherlimit = this.$element.data('higherlimit');
      if (higherlimit) {
        higherday = this.$element.data('higherday');
        highermonth = this.$element.data('highermonth');
        higheryear = this.$element.data('higheryear');
      }
    
      $calendar = this.$element.find('.bfh-datepicker-calendar');
    
      $calendar.find('table > thead > tr > th.month > span').text(BFHMonthsList[month]);
      $calendar.find('table > thead > tr > th.year > span').text(year);
      
      $daysHeader = $calendar.find('table > thead > tr.days-header');
      $daysHeader.html('');
      for (i=BFHDayOfWeekStart; i < BFHDaysList.length; i=i+1) {
        $daysHeader.append('<th>' + BFHDaysList[i] + '</th>');
      }
      for (i=0; i < BFHDayOfWeekStart; i=i+1) {
        $daysHeader.append('<th>' + BFHDaysList[i] + '</th>');
      }
      
      $days = $calendar.find('table > tbody');
      $days.html('');
      numDaysPrevious = this.daysInMonth(month, year);
      numDays = this.daysInMonth(month + 1, year);
      firstDay = this.dayOfWeek(month, year, 1);
      lastDay = this.dayOfWeek(month, year, numDays);
      row = '';
      for (i=0; i < (firstDay - BFHDayOfWeekStart + 7) % 7; i=i+1) {
        if (i === 0) {
          row += '<tr>';
        }
        previousDay = numDaysPrevious - (firstDay - BFHDayOfWeekStart + 7) % 7 + i + 1;
        row += '<td class="off">' + previousDay + '</td>';
      }
      for (i=1; i <= numDays; i=i+1) {
        day = this.dayOfWeek(month, year, i);
        if (day === BFHDayOfWeekStart) {
          row += '<tr>';
        }
        if (lowerlimit && (i < lowerday && month === lowermonth && year === loweryear || month < lowermonth || year < loweryear)) {
          row += '<td data-day="' + i + '" class="off">' + i + '</td>';
        } else if (higherlimit && (i > higherday && month === highermonth && year === higheryear || month > highermonth || year > higheryear)) {
          row += '<td data-day="' + i + '" class="off">' + i + '</td>';
        } else if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          row += '<td data-day="' + i + '" class="today">' + i + '</td>';
        } else {
          row += '<td data-day="' + i + '">' + i + '</td>';
        }
        if (day === (6 + BFHDayOfWeekStart) % 7) {
          row += '</tr>';
          $days.append(row);
          row = '';
        }
      }
      for (i=0, j=1; i < (7 - ((lastDay + 1 - BFHDayOfWeekStart + 7) % 7)) % 7; i=i+1, j=j+1) {
        row += '<td class="off">' + j + '</td>';
        if (i === (7 - ((lastDay + 1 - BFHDayOfWeekStart + 7) % 7)) % 7 - 1) {
          row += '</tr>';
          $days.append(row);
        }
      }

    },
  
    previousMonth: function () {
      var $this,
          $parent,
          $datePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-datepicker');
    
      if ($parent.data('month') === 0) {
        $parent.data('month', 11);
        $parent.data('year', Number($parent.data('year')) - 1);
      } else {
        $parent.data('month', Number($parent.data('month')) - 1);
      }
    
      $datePicker = $parent.data('bfhdatepicker');
      $datePicker.updateCalendar();
    
      return false;
    },
  
    nextMonth: function () {
      var $this,
          $parent,
          $datePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-datepicker');
    
      if ($parent.data('month') === 11) {
        $parent.data('month', 0);
        $parent.data('year', Number($parent.data('year')) + 1);
      } else {
        $parent.data('month', Number($parent.data('month')) + 1);
      }
    
      $datePicker = $parent.data('bfhdatepicker');
      $datePicker.updateCalendar();
    
      return false;
    },
  
    previousYear: function () {
      var $this,
          $parent,
          $datePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-datepicker');
    
      $parent.data('year', Number($parent.data('year')) - 1);
    
      $datePicker = $parent.data('bfhdatepicker');
      $datePicker.updateCalendar();
    
      return false;
    },
  
    nextYear: function () {
      var $this,
          $parent,
          $datePicker;
      
      $this = $(this);
      $parent = $this.closest('.bfh-datepicker');
    
      $parent.data('year', Number($parent.data('year')) + 1);
    
      $datePicker = $parent.data('bfhdatepicker');
      $datePicker.updateCalendar();
    
      return false;
    },
  
    select: function () {
      var $this,
          $parent,
          $datePicker,
          month,
          year,
          day;
    
      $this = $(this);
      $parent = $this.closest('.bfh-datepicker');
      $datePicker = $parent.data('bfhdatepicker');
      month = $parent.data('month');
      year = $parent.data('year');
      day = $this.data('day');
    
      $parent.find('input[type=text]').val($datePicker.formatDate(month, year, day)).trigger('change');
    
      if ($datePicker.options.close) {
        $datePicker.toggle();
      }
    
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


  /* DATEPICKER PLUGIN DEFINITION
   * ========================== */

  $.fn.bfhdatepicker = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;
          
      $this = $(this);
      data = $this.data('bfhdatepicker');
      options = typeof option === 'object' && option;
        
      if (!data) {
        $this.data('bfhdatepicker', (data = new BFHDatePicker(this, options)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };

  $.fn.bfhdatepicker.Constructor = BFHDatePicker;

  $.fn.bfhdatepicker.defaults = {
    format: 'm/d/y',
    date: '',
    start: '',
    end: '',
    close: 1
  };
  
  
  /* DATEPICKER DATA-API
   * ============== */

  $(window).on('load', function () {
    $('div.bfh-datepicker').each(function () {
      var $datepicker;
      
      $datepicker = $(this);

      $datepicker.bfhdatepicker($datepicker.data());
    });
  });
  
  
  /* APPLY TO STANDARD DATEPICKER ELEMENTS
   * =================================== */
   
  $(function () {
    $('html')
      .on('click.bfhdatepicker.data-api', clearMenus);
    $('body')
      .on('click.bfhdatepicker.data-api focus.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', toggle, BFHDatePicker.prototype.toggle)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar .month > .previous', BFHDatePicker.prototype.previousMonth)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar .month > .next', BFHDatePicker.prototype.nextMonth)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar .year > .previous', BFHDatePicker.prototype.previousYear)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar .year > .next', BFHDatePicker.prototype.nextYear)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar td:not(.off)', BFHDatePicker.prototype.select)
      .on('click.bfhdatepicker.data-api touchstart.bfhdatepicker.data-api', '.bfh-datepicker-calendar > table.calendar', function() { return false; });
  });

}(window.jQuery);
