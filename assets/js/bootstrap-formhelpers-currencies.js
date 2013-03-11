/* ==========================================================
 * bootstrap-formhelpers-currencies.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2013 Vincent Lamanna
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

  var BFHCurrencies = function (element, options) {
    this.options = $.extend({}, $.fn.bfhcurrencies.defaults, options)
    this.$element = $(element)

	if (this.options.currencylist) {
		this.currencyList = []
		this.options.currencylist = this.options.currencylist.split(',')
        for (var currency in BFHCurrenciesList) {
			if ($.inArray(currency, this.options.currencylist) >= 0) {
				this.currencyList[currency] = BFHCurrenciesList[currency]
			}
		}
	} else {
		this.currencyList = BFHCurrenciesList
	}

    if (this.$element.is("select")) {
      this.addCurrencies()
    }

    if (this.$element.is("span")) {
      this.displayCurrency()
    }

    if (this.$element.hasClass("bfh-selectbox")) {
      this.addBootstrapCurrencies()
    }
  }

  BFHCurrencies.prototype = {

    constructor: BFHCurrencies

    , addCurrencies: function () {
      var value = this.options.currency

      this.$element.html('')
      this.$element.append('<option value=""></option>')
      for (var currency in this.currencyList) {
        this.$element.append('<option value="' + this.currencyList[currency]['code_iso'] + '">' + this.currencyList[currency]['devise'] + '</option>')
      }

      this.$element.val(value)
    }

    , addBootstrapCurrencies: function() {
      var $input
      , $toggle
      , $options

      var value = this.options.currency

      $input = this.$element.find('input[type="hidden"]')
      $toggle = this.$element.find('.bfh-selectbox-option')
      $options = this.$element.find('[role=option]')

      $options.html('')
      $options.append('<li><a tabindex="-1" href="#" data-option=""></a></li>')
      for (var currency in this.currencyList) {
        if (this.options.flagscurrencies == true) {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + this.currencyList[currency]['code_iso'] + '"><i class="icon-flag-' + this.currencyList[currency]['flag'] + '"></i>' + this.currencyList[currency]['devise'] + '</a></li>')
        } else if (this.options.flagscountries == true) {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + this.currencyList[currency]['code_iso'] + '"><i class="icon-flag-' + currency + '"></i>' + this.currencyList[currency]['devise'] + '</a></li>')
        } else {
          $options.append('<li><a tabindex="-1" href="#" data-option="' + this.currencyList[currency]['code_iso'] + '">' + this.currencyList[currency]['devise'] + '</a></li>')
        }
      }

      $toggle.data('option', value)

      if (value) {
        if (this.options.flagscurrencies == true) {
          $toggle.html('<i class="icon-flag-' + this.currencyList[value]['flag'] + '"></i> ' + this.currencyList[value]['devise'])
        } else if (this.options.flagscountries == true) {
          $toggle.html('<i class="icon-flag-' + value + '"></i> ' + this.currencyList[value]['devise'])
        } else {
          $toggle.html(this.currencyList[value]['devise'])
        }
      }

      $input.val(value)
    }

    , displayCurrency: function () {
      var value = this.options.currency

      if (this.options.flagscurrencies == true) {
        this.$element.html('<i class="icon-flag-' + this.currencyList[value]['flag'] + '"></i> ' + this.currencyList[value]['devise'])
      } else if (this.options.flagscountries == true) {
          this.$element.html('<i class="icon-flag-' + value + '"></i> ' + this.currencyList[value]['devise'])
      } else {
        this.$element.html(this.currencyList[value]['devise'])
      }
    }

  }


 /* CURRENCY PLUGIN DEFINITION
  * ======================= */

  $.fn.bfhcurrencies = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('bfhcurrencies')
        , options = typeof option == 'object' && option

      if (!data) $this.data('bfhcurrencies', (data = new BFHCurrencies(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.bfhcurrencies.Constructor = BFHCurrencies

  $.fn.bfhcurrencies.defaults = {
    currency: "",
    currencyList: "",
    flagscurrencie: false,
    flagscountries: false
  }


 /* CURRENCY DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.bfh-currencies, span.bfh-currencies, div.bfh-currencies').each(function () {
      var $currencies = $(this)

      $currencies.bfhcurrencies($currencies.data())
    })
  })


}(window.jQuery);
