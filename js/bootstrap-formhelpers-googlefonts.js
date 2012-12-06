/* ==========================================================
 * bootstrap-formhelpers-googlefonts.js
 * https://github.com/vlamanna/BootstrapFormHelpers
 * ==========================================================
 * Copyright 2012 Vincent Lamanna
 * contributed by Aaron Collegeman, Squidoo, 2012
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


 /* FONTS CLASS DEFINITION
  * ====================== */

  var GoogleFonts = function (element, options) {
    this.options = $.extend({}, $.fn.googlefonts.defaults, options)
    this.$element = $(element)
    this.familyList = {}
      
    if (this.options.families) {
      this.options.families = this.options.families.split(',')
      for (var i in GoogleFontsList.items) {
        var font = GoogleFontsList.items[i];
        if ($.inArray(font.family, this.options.families) >= 0) {
          this.familyList[font.family] = {
            'font': GoogleFontsList.items[i],
            'i': parseInt(i)
          };
        }
      }
    } else {
      for (var i in GoogleFontsList.items) {
        var font = GoogleFontsList.items[i];
        this.familyList[font.family] = {
          'font': GoogleFontsList.items[i],
          'i': parseInt(i)
        };
      }
    }

    if (this.$element.is("select")) {
      this.addFonts()
    }
    
    if (this.$element.is("span")) {
      this.displayFont()
    }
    
    if (this.$element.hasClass("selectbox")) {
      this.addBootstrapFonts()
    }
  }

  GoogleFonts.prototype = {

    constructor: GoogleFonts

    , addFonts: function () {
      var value = this.options.family
      
      this.$element.html('')
      this.$element.append('<option value=""></option>')
      for (var f in this.familyList) {
        var entry = this.familyList[f];
        this.$element.append('<option value="' + entry.font.family + '">' + entry.font.family + '</option>')
      }
      
      this.$element.val(value)
    }
    
    , addBootstrapFonts: function() {
      var $input
      , $toggle
      , $options
      
      var value = this.options.family
      
      $input = this.$element.find('input[type="hidden"]')
      $toggle = this.$element.find('.selectbox-option')
      $options = this.$element.find('[role=options]')
      
      $options.html('')
      $options.append('<li><a tabindex="-1" href="#" data-option="" style="background-image: none;"></a></li>')
      for (var f in this.familyList) {
        var entry = this.familyList[f];
        $options.append('<li><a tabindex="-1" href="#" style="background-position: 0 -' + ((entry.i * 30) - 2) + 'px;" data-option="' + entry.font.family + '">' + entry.font.family + '</a></li>')
      }
      
      $toggle.data('option', value)
      
      if (value) {
        $toggle.html(this.familyList[value].font.family)
      }
      
      $input.val(value)
    }
    
    , displayFont: function () {
      var value = this.options.family
      
      this.$element.html(this.familyList[font].font.family)
    }

  }


 /* FONTS PLUGIN DEFINITION
  * ======================= */

  $.fn.googlefonts = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('googlefonts')
        , options = typeof option == 'object' && option
      this.type = 'googlefonts';
      if (!data) $this.data('googlefonts', (data = new GoogleFonts(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.valHooks.googlefonts = {
    get: function(el) {
      return $(el).find('input[type="hidden"]').val();
    },
    set: function(el, val) {
      var $el = $(el);
      $el.find('input[type="hidden"]').val(val);
      $el.find('.selectbox-option').text(val);
    }
  }

  $.fn.googlefonts.Constructor = GoogleFonts

  $.fn.googlefonts.defaults = {
    family: "",
    families: ""
  }
  

 /* FONTS DATA-API
  * ============== */

  $(window).on('load', function () {
    $('form select.googlefonts, span.googlefonts, div.googlefonts').each(function () {
      var $googlefonts = $(this)

      $googlefonts.googlefonts($googlefonts.data())
    })
  })


}(window.jQuery);
