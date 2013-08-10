/*!
* mejs-feature-logo.js
* Add any image logo to your players for MediaElement.js.
*
* Copyright 2013, Greg (gfborn@gmail.com)
* Licensed under the MIT license.
*/

(function($){
  MediaElementPlayer.prototype.buildlogo = function(player, controls, layers, media){
    if(logo_image){
      var loop = $('<div class="mejs-overlay mejs-layer-logo">' +
        '<div class="mejs-overlay-logo"><img src="' + player.options.logo.image + '" /></div>' +
        '</div>')
        // append it to the layer's list
        .appendTo(layers)
        // add a click toggle event
        .click(function(){
          window.open(player.options.logo.link, '_blank');
        });
      }
  };
})(jQuery);