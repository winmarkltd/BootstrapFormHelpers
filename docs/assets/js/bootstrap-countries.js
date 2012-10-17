/* ==========================================================
 * bootstrap-countries.js v1.0.0
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
    
    if (this.$element.is("select")) {
      this.addCountries()
    }
    
    if (this.$element.is("span")) {
      this.displayCountry()
    }
  }

  Countries.prototype = {

    constructor: Countries

    , addCountries: function () {
      var value = this.options.country
      
      this.$element.html('')
      this.$element.append('<option value=""></option>')
      for (var country in CountriesList) {
        this.$element.append('<option value="' + country + '">' + CountriesList[country] + '</option>')
      }
      
      this.$element.val(value)
    }
    
    , displayCountry: function () {
      var value = this.options.country
      
      this.$element.html(CountriesList[value])
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
    country: ""
  }
  

 /* COUNTRY DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.countries').each(function () {
      var $countries = $(this)

      $countries.countries($countries.data())
    })
    
    $('span.countries').each(function () {
      var $countries = $(this)

      $countries.countries($countries.data())
    })
  })


}(window.jQuery);