/* ==========================================================
 * bootstrap-states.js v1.0.0
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


 /* STATES CLASS DEFINITION
  * ====================== */

  var States = function (element, options) {
    this.options = $.extend({}, $.fn.states.defaults, options)
    this.$element = $(element)
    
    if (this.$element.is("select")) {
      var country = this.options.country
      
      var formObject = this.$element.closest('form')
      var countryObject = formObject.find('#' + country)
      
      if (countryObject.length != 0) {
        this.options.country = countryObject.val()
        countryObject.on('change.countries.data-api', {stateObject: this}, this.changeCountry)
      }
      
      this.addStates()
    }
    
    if (this.$element.is("span")) {
      this.displayState()
    }
  }

  States.prototype = {

    constructor: States

    , addStates: function () {
      var country = this.options.country
      
      this.loadStates(country)
    }
    
    , loadStates: function (country) {
      var value = this.options.state
      
      this.$element.html('')
      this.$element.append('<option value=""></option>')
      for (var state in StatesList[country]) {
        this.$element.append('<option value="' + state + '">' + StatesList[country][state] + '</option>')
      }
      
      this.$element.val(value)
    }
    
    , changeCountry: function (e) {
        var $this = $(this)
        var stateObject = e.data.stateObject
        var country = $this.val()
        
        stateObject.loadStates(country)
    }
    
    , displayState: function () {
      var country = this.options.country
      var value = this.options.state
      
      this.$element.html(StatesList[country][value])
    }

  }


 /* COUNTRY PLUGIN DEFINITION
  * ======================= */

  $.fn.states = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('states')
        , options = typeof option == 'object' && option
        
      if (!data) $this.data('states', (data = new States(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.states.Constructor = States

  $.fn.states.defaults = {
    country: "",
    state: ""
  }
  

 /* COUNTRY DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.states').each(function () {
      var $states = $(this)

      $states.states($states.data())
    })
    
    $('span.states').each(function () {
      var $states = $(this)

      $states.states($states.data())
    })
  })


}(window.jQuery);