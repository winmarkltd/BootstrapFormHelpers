/* ==========================================================
 * bootstrap-formhelpers-phone.js
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


  /* PHONE CLASS DEFINITION
   * ====================== */

  var BFHPhone = function (element, options) {
    var country,
        formObject,
        countryObject;
        
    this.options = $.extend({}, $.fn.bfhphone.defaults, options);
    this.$element = $(element);
    
    if (this.$element.is('input[type="text"]') || this.$element.is('input[type="tel"]')) {
      country = this.options.country;
      formObject = this.$element.closest('form');
      
      if (country !== '') {
        countryObject = formObject.find('#' + country);

        if (countryObject.length !== 0) {
          this.options.format = BFHPhoneFormatList[countryObject.val()];
        } else {
          this.options.format = BFHPhoneFormatList[country];
        }
      }
      
      if(!this.options.number && this.$element.val()) {
        this.options.number = this.$element.val().replace(/\D/g, '');
      }
      
      this.addFormatter();
    }
    
    if (this.$element.is('span')) {
      this.displayFormatter();
    }
  };

  BFHPhone.prototype = {

    constructor: BFHPhone,

    getFormattedNumber: function() {
      var format,
          phoneNumber,
          formattedNumber,
          newNumber,
          j,
          i;
          
      format = this.options.format;
      phoneNumber = String(this.options.number);
      formattedNumber = '';
    
      newNumber = '';
      for (i = 0; i < phoneNumber.length; i=i+1) {
        if (/[0-9]/.test(phoneNumber.charAt(i))) {
          newNumber += phoneNumber.charAt(i);
        }
      }
      phoneNumber = newNumber;
    
      for (i = 0, j = 0; i < format.length; i=i+1) {
        if (/[0-9]/.test(format.charAt(i))) {
          if (format.charAt(i) === phoneNumber.charAt(j)) {
            formattedNumber += phoneNumber.charAt(j);
            j = j + 1;
          } else {
            formattedNumber += format.charAt(i);
          }
        } else if (format.charAt(i) !== 'd') {
          if (phoneNumber.charAt(j) !== '' || format.charAt(i) === '+') {
            formattedNumber += format.charAt(i);
          }
        } else {
          if (phoneNumber.charAt(j) === '') {
            formattedNumber += '';
          } else {
            formattedNumber += phoneNumber.charAt(j);
            j = j + 1;
          }
        }
      }
    
      return formattedNumber;
    },
  
    addFormatter: function () {
      var formattedNumber;
      
      formattedNumber = this.getFormattedNumber();
    
      this.$element.addClass('disabled');
      this.$element.val(formattedNumber);
      this.$element.removeClass('disabled');
    },
  
    displayFormatter: function () {
      var formattedNumber;
      
      formattedNumber = this.getFormattedNumber();
    
      this.$element.html(formattedNumber);
    },
  
    changeCountry: function () {
      var $this,
          phoneObject;
          
      $this = $(this);
      phoneObject = $(this).data('bfhphone');
      
      phoneObject.options.format = BFHPhoneFormatList[$this.val()];
      
      phoneObject.addFormatter();
    },
  
    change: function() {
      var $this,
          start,
          end,
          replaceAtEnd,
          number,
          newNumber,
          i;
    
      $this = $(this).data('bfhphone');
    
      if ($this.$element.is('.disabled, :disabled')) {
        return false;
      }
    
      start = $this.$element[0].selectionStart;
      end = $this.$element[0].selectionEnd;
        
      replaceAtEnd = false;
      if (start === $this.$element.val().length) {
        replaceAtEnd = true;
      }
        
      number = $this.$element.val();
      newNumber = '';
      for (i = 0; i < number.length; i=i+1) {
        if (/[0-9]/.test(number.charAt(i))) {
          newNumber += number.charAt(i);
        }
      }
    
      if ($this.$element.data('number') === newNumber) {
        return false;
      }
    
      $this.options.number = newNumber;
    
      $this.addFormatter();
    
      $this.$element.data('number', $this.options.number);
    
      if (replaceAtEnd) {
        start = $this.$element.val().length;
        end = $this.$element.val().length;
      }
    
      $this.$element[0].setSelectionRange(start, end);
    
      return false;
    }

  };


  /* PHONE PLUGIN DEFINITION
   * ======================= */

  $.fn.bfhphone = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;
          
      $this = $(this);
      data = $this.data('bfhphone');
      options = typeof option === 'object' && option;
      
      if (!data) {
        $this.data('bfhphone', (data = new BFHPhone(this, options)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };

  $.fn.bfhphone.Constructor = BFHPhone;

  $.fn.bfhphone.defaults = {
    format: '',
    number: '',
    country: ''
  };


  /* PHONE DATA-API
   * ============== */

  $(window).on('load', function () {
    $('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function () {
      var $phone;
      
      $phone = $(this);

      $phone.bfhphone($phone.data());
    });
  });
  
  
  /* APPLY TO STANDARD PHONE ELEMENTS
   * =================================== */
   
  $(function () {
    $('body')
      .on('propertychange.bfhphone.data-api change.bfhphone.data-api input.bfhphone.data-api keyup.bfhphone.data-api', '.bfh-phone', BFHPhone.prototype.change)
      .on('change.bfhphone.data-api', '.bfh-country', BFHPhone.prototype.changeCountry);
  });

}(window.jQuery);
