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

+function ($) {

  'use strict';


  /* GOOGLE FONTS CLASS DEFINITION
   * ====================== */

  var BFHGoogleFonts = function (element, options) {
    this.options = $.extend({}, $.fn.bfhgooglefonts.defaults, options);
    this.$element = $(element);

    if (this.$element.is('select')) {
      this.addFonts();
    }

    if (this.$element.hasClass('bfh-selectbox')) {
      this.addBootstrapFonts();
    }
  };

  BFHGoogleFonts.prototype = {

    constructor: BFHGoogleFonts,

    getFonts: function() {
      var font,
          fonts;

      fonts = [];

      if (this.options.subset) {
        for (font in BFHGoogleFontsList.items) {
          if (BFHGoogleFontsList.items.hasOwnProperty(font)) {
            if ($.inArray(this.options.subset, BFHGoogleFontsList.items[font].subsets) >= 0) {
              fonts[BFHGoogleFontsList.items[font].family] = {
                'info': BFHGoogleFontsList.items[font],
                'index': parseInt(font, 10)
              };
            }
          }
        }
      } else if (this.options.available) {
        this.options.available = this.options.available.split(',');

        for (font in BFHGoogleFontsList.items) {
          if (BFHGoogleFontsList.items.hasOwnProperty(font)) {
            if ($.inArray(BFHGoogleFontsList.items[font].family, this.options.available) >= 0) {
              fonts[BFHGoogleFontsList.items[font].family] = {
                'info': BFHGoogleFontsList.items[font],
                'index': parseInt(font, 10)
              };
            }
          }
        }
      } else {
        for (font in BFHGoogleFontsList.items) {
          if (BFHGoogleFontsList.items.hasOwnProperty(font)) {
            fonts[BFHGoogleFontsList.items[font].family] = {
              'info': BFHGoogleFontsList.items[font],
              'index': parseInt(font, 10)
            };
          }
        }
      }

      return fonts;
    },

    addFonts: function () {
      var value,
          font,
          fonts;

      value = this.options.font;
      fonts = this.getFonts();

      this.$element.html('');

      if (this.options.blank === true) {
        this.$element.append('<option value=""></option>');
      }

      for (font in fonts) {
        if (fonts.hasOwnProperty(font)) {
          this.$element.append('<option value="' + fonts[font].info.family + '">' + fonts[font].info.family + '</option>');
        }
      }

      //Donna Start
      if (this.options.showCustom) {
        this.$element.append('<option value="Custom">Use Custom Font</option>');
      }

      if (this.options.showMore) {
        this.$element.append('<option value="Google">More Fonts...</option>');
      }
      //Donna End

      this.$element.val(value);
    },

    addBootstrapFonts: function() {
      var $input,
          $toggle,
          $options,
          value,
          font,
          fonts;

      value = this.options.font;
      $input = this.$element.find('input[type="hidden"]');
      $toggle = this.$element.find('.bfh-selectbox-option');
      $options = this.$element.find('[role=option]');
      fonts = this.getFonts();

      $options.html('');

      if (this.options.blank === true) {
        $options.append('<li><a tabindex="-1" href="#" data-option="" style="background-image: none;"></a></li>');
      }

      for (font in fonts) {
        if (fonts.hasOwnProperty(font)) {
          $options.append('<li><a tabindex="-1" href="#" style="background-position: 0 -' + ((fonts[font].index * 30) - 2) + 'px;" data-option="' + fonts[font].info.family + '">' + fonts[font].info.family + '</a></li>');
        }
      }

      //Donna Start
      if (this.options.showCustom) {
        $options.append('<li><a tabindex="-1" href="#" style=\'font-family: Custom\' data-option="Use Custom Font">Use Custom Font</a></li>');
      }

      if (this.options.showMore) {
        $options.append('<li><a tabindex="-1" href="#" style=\'font-family: Google\' data-option="More Fonts...">More Fonts...</a></li>');
      }
      //Donna End

      this.$element.val(value);
    }

  };


  /* GOOGLE FONTS PLUGIN DEFINITION
   * ======================= */

  var old = $.fn.bfhgooglefonts;

  $.fn.bfhgooglefonts = function (option) {
    return this.each(function () {
      var $this,
          data,
          options;

      $this = $(this);
      data = $this.data('bfhgooglefonts');
      options = typeof option === 'object' && option;

      if (!data) {
        $this.data('bfhgooglefonts', (data = new BFHGoogleFonts(this, options)));
      }
      if (typeof option === 'string') {
        data[option].call($this);
      }
    });
  };

  $.fn.bfhgooglefonts.Constructor = BFHGoogleFonts;

  $.fn.bfhgooglefonts.defaults = {
    font: '',
    available: '',
    subset: '',
    blank: true
  };


  /* GOOGLE FONTS NO CONFLICT
   * ========================== */

  $.fn.bfhgooglefonts.noConflict = function () {
    $.fn.bfhgooglefonts = old;
    return this;
  };


  /* GOOGLE FONTS DATA-API
   * ============== */

  $(document).ready( function () {
    $('form select.bfh-googlefonts, span.bfh-googlefonts, div.bfh-googlefonts').each(function () {
      var $googleFonts;

      $googleFonts = $(this);

      if ($googleFonts.hasClass('bfh-selectbox')) {
        $googleFonts.bfhselectbox($googleFonts.data());
      }
      $googleFonts.bfhgooglefonts($googleFonts.data());
    });
  });

}(window.jQuery);

/* Donna Start */
! function($) {

  'use strict';

  /* FONT LIST CLASS DEFINITION
   * ====================== */

  var BFHGoogleFontList = function(element, options) {
    var i, f, font, allhave;

    this.options = $.extend({}, $.fn.bfhgooglefontlist.defaults, options);
    this.$element = $(element);
    this.familyList = {};

    for (i in BFHGoogleFontsList.items) {
      if (BFHGoogleFontsList.items.hasOwnProperty(i)) {
        font = BFHGoogleFontsList.items[i];
        this.familyList[font.family] = {
          'font' : BFHGoogleFontsList.items[i],
          'i' : parseInt(i, 10)
        };
      }
    }

    this.addFonts();
  };

  BFHGoogleFontList.prototype = {

    constructor : BFHGoogleFontList,

    addFonts : function() {
      var value, f, $item, entry, self = this;

      value = this.options.family;

      this.$element.html('');
      var bindMe = function() {
        self.$element.trigger('select', $(this).data('option'));
      };
      for (f in this.familyList) {
        if (this.familyList.hasOwnProperty(f)) {
          entry = this.familyList[f];
          $item = $('<a href="#" class="list-group-item" style="background-position: 0 -' + ((entry.i * 30) - 2) + 'px;" data-option="' + entry.font.family + '">' + entry.font.family + '</a>');

          $item.bind('click', bindMe);
          this.$element.append($item);
        }
      }
    }
  };

  /* FONT LIST PLUGIN DEFINITION
   * ======================= */

  $.fn.bfhgooglefontlist = function(option) {
    return this.each(function() {
      var $this, data, options;

      $this = $(this);
      data = $this.data('bfhgooglefontlist');
      options = typeof option === 'object' && option;
      this.type = 'bfhgooglefontlist';

      if (!data) {
        $this.data('bfhgooglefontlist', ( data = new BFHGoogleFontList(this, options)));
      }
      if ( typeof option === 'string') {
        data[option]();
      }
    });
  };

  $.fn.bfhgooglefontlist.Constructor = BFHGoogleFontList;

  $.fn.bfhgooglefontlist.defaults = {
    family : ''
  };

  /* FONT LIST DATA-API
   * ============== */

  $(window).on('load', function() {
    $('div.bfh-googlefontlist').each(function() {
      var $googleFontList;

      $googleFontList = $(this);

      $googleFontList.bfhgooglefontlist($googleFontList.data());
    });
  });

}(window.jQuery);
/* Donna End */
