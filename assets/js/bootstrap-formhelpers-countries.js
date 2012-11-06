/* ==========================================================
 * bootstrap-formhelpers-countries.js v1.3.1
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


 /* COUNTRIES CLASS DEFINITION
  * ====================== */

  var Countries = function (element, options) {
    this.options = $.extend({}, $.fn.countries.defaults, options)
    this.$element = $(element)
    
	if (this.options.countrylist) {
		this.countryList = []
		this.options.countrylist = this.options.countrylist.split(',')
        for (var country in CountriesList) {
			if ($.inArray(country, this.options.countrylist) >= 0) {
				this.countryList[country] = CountriesList[country]
			}
		}
	} else {
		this.countryList = CountriesList
	}

    if (this.$element.is("select")) {
      this.addCountries()
    }
    
    if (this.$element.is("span")) {
      this.displayCountry()
    }
    
    if (this.$element.hasClass("selectbox")) {
      this.addBootstrapCountries()
    }
  }

  Countries.prototype = {

    constructor: Countries

    , addCountries: function () {
      var value = this.options.country
      
      this.$element.html('')
      this.$element.append('<option value=""></option>')
      for (var country in this.countryList) {
        this.$element.append('<option value="' + country + '">' + this.countryList[country] + '</option>')
      }
      
      this.$element.val(value)
    }
    
    , addBootstrapCountries: function() {
      var $input
      , $toggle
      , $options
      
      var value = this.options.country
      
      $input = this.$element.find('input[type="hidden"]')
      $toggle = this.$element.find('.selectbox-option')
      $options = this.$element.find('[role=options]')
      
      $options.html('')
      $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>')
      for (var country in this.countryList) {
        if (this.options.flags == true) {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '"><i class="icon-flag-' + country + '"></i>' + this.countryList[country] + '</a></li>')
        } else {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + country + '">' + this.countryList[country] + '</a></li>')
        }
      }
      
      $toggle.data('option', value)
      
      if (value) {
        if (this.options.flags == true) {
          $toggle.html('<i class="icon-flag-' + value + '"></i> ' + this.countryList[value])
        } else {
          $toggle.html(this.countryList[value])
        }
      }
      
      $input.val(value)
    }
    
    , displayCountry: function () {
      var value = this.options.country
      
      if (this.options.flags == true) {
        this.$element.html('<i class="icon-flag-' + value + '"></i> ' + this.countryList[value])
      } else {
        this.$element.html(this.countryList[value])
      }
    }

  }


 /* COUNTRY PLUGIN DEFINITION
  * ======================= */

  $.fn.countries = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('countries')
        , options = typeof option == 'object' && option
        
      if (!data) $this.data('countries', (data = new Countries(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.countries.Constructor = Countries

  $.fn.countries.defaults = {
    country: "",
	countryList: "",
    flags: false
  }
  

 /* COUNTRY DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.countries, span.countries, div.countries').each(function () {
      var $countries = $(this)

      $countries.countries($countries.data())
    })
  })


}(window.jQuery);
