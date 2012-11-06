/* ==========================================================
 * bootstrap-formhelpers-states.js v1.3.1
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
      this.addStates()
    }
    
    if (this.$element.is("span")) {
      this.displayState()
    }
    
    if (this.$element.hasClass("selectbox")) {
      this.addBootstrapStates()
    }
  }

  States.prototype = {

    constructor: States

    , addStates: function () {
      var country = this.options.country
      
      if (country != "") {
		var formObject = this.$element.closest('form')
		var countryObject = formObject.find('#' + country)
		
		if (countryObject.length != 0) {
		  country = countryObject.val()
		  countryObject.on('change.countries.data-api', {stateObject: this}, this.changeCountry)
		}
	  }
      
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
    
    , addBootstrapStates: function() {
      var country = this.options.country
      
      if (country != "") {
        var formObject = this.$element.closest('form')
        var countryObject = formObject.find('#' + country)
        
        if (countryObject.length != 0) {
          country = countryObject.find('input[type="hidden"]').val()
          countryObject.find('input[type="hidden"]').on('change.countries.data-api', {stateObject: this}, this.changeBootstrapCountry)
        }
      }
      
      this.loadBootstrapStates(country)
    }
    
    , loadBootstrapStates: function(country) {
      var $input
      , $toggle
      , $options
      
      var value = this.options.state
      
      $input = this.$element.find('input[type="hidden"]')
      $toggle = this.$element.find('.selectbox-option')
      $options = this.$element.find('[role=options]')
      
      $options.html('')
      $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>')
      for (var state in StatesList[country]) {
        $options.append('<li><a tabindex="-1" href="#" data-option="' + state + '">' + StatesList[country][state] + '</a></li>')
      }
      
      $toggle.data('option', value)
      if (typeof StatesList[country][value] == "undefined") {
        $toggle.html('')
      } else {
        $toggle.html(StatesList[country][value])
      }
      
      $input.val(value)
    }
    
    , changeBootstrapCountry: function (e) {
        var $this = $(this)
        var stateObject = e.data.stateObject
        var country = $this.val()
        
        stateObject.loadBootstrapStates(country)
    }
    
    , displayState: function () {
      var country = this.options.country
      var value = this.options.state
      
      this.$element.html(StatesList[country][value])
    }

  }


 /* STATES PLUGIN DEFINITION
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
  

 /* STATES DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.states, span.states, div.states').each(function () {
      var $states = $(this)

      $states.states($states.data())
    })
  })


}(window.jQuery);