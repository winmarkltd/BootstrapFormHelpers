/* ==========================================================
 * bootstrap-phone.js v1.0.0
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


 /* PHONE CLASS DEFINITION
  * ====================== */

  var Phone = function (element, options) {
    this.options = $.extend({}, $.fn.phone.defaults, options)
    this.$element = $(element)
    if (this.$element.is("input:text")) {
      this.$element.on('keydown.phone.data-api', {phoneObject: this}, this.keydown)
      
      var country = this.options.country
      
      var formObject = this.$element.closest('form')
      
      if (country != "") {
		var countryObject = formObject.find('#' + country)
		
		if (countryObject.length != 0) {
		  this.options.format = PhoneFormatList[countryObject.val()]
		  countryObject.on('change.phone.data-api', {phoneObject: this}, this.changeCountry)
		} else {
		  this.options.format = PhoneFormatList[country]
		}
	  }
      
      var old_val = this.$element.val;
	  this.$element.val = function () {
	    if (typeof arguments[0] != "undefined") {
	      return old_val.apply(this, arguments);
	    } else {
	      this.data('number')
	    }
	  }
      
      this.addFormatter()
    }
    
    if (this.$element.is("span")) {
      this.displayFormatter()
    }
  }

  Phone.prototype = {

    constructor: Phone

  , getFormattedNumber: function() {
    var format = this.options.format
    var phoneNumber = new String(this.options.number)
    var formattedNumber = ""
    
    var j = 0
    this.options.maxChars = 0
    for (var i = 0; i < format.length; i++) {
      if (format.charAt(i) != "x") {
        formattedNumber += format.charAt(i)
      } else {
        this.options.maxChars++
        if (phoneNumber.charAt(j) == "") {
          formattedNumber += " "
        } else {
          formattedNumber += phoneNumber.charAt(j)
          j++
        }
      }
    }
    
    return formattedNumber
  }
  
  , addFormatter: function () {
    var formattedNumber = this.getFormattedNumber()
    
    this.$element.val(formattedNumber)
  }
  
  , displayFormatter: function () {
    var formattedNumber = this.getFormattedNumber()
    
    this.$element.html(formattedNumber)
  }
  
  , changeCountry: function (e) {
      var $this = $(this)
      var phoneObject = e.data.phoneObject
      
      this.options.format = PhoneFormatList[$this.val()]
      
      phoneObject.addFormatter()
  }
  
  , keydown: function (e) {
      var $this

      e.preventDefault()
      e.stopPropagation()
      
      if (e.keyCode != 8 && (e.keyCode < 48 || e.keyCode > 57)) return

      $this = e.data.phoneObject

      if ($this.$element.is('.disabled, :disabled')) return
      
      if (!$this.$element.is(':visible')) return
      
      if (e.keyCode >= 48 && e.keyCode <= 57) {
        var digit = e.keyCode - 48
        if ($this.options.number.length < $this.options.maxChars) {
          $this.options.number += digit
          $this.addFormatter()
        }
      } else {
        if ($this.options.number.length > 0) {
          $this.options.number = $this.options.number.slice(0, -1)
          $this.addFormatter()
        }
      }
      
      $this.$element.data('number', $this.options.number)
    }

  }


 /* PHONE PLUGIN DEFINITION
  * ======================= */

  $.fn.phone = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('phone')
        , options = typeof option == 'object' && option
      if (!data) $this.data('phone', (data = new Phone(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.phone.Constructor = Phone

  $.fn.phone.defaults = {
    format: "",
    number: "",
    country: "",
    maxChars: 0
  }


 /* PHONE DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form input:text.phone').each(function () {
      var $phone = $(this)

      $phone.phone($phone.data())
    })
    
    $('span.phone').each(function() {
      var $phone = $(this)
      
      $phone.phone($phone.data())
    })
  })

}(window.jQuery);