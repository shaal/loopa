/* general javascript can be insterted here */

// smooth scrolling to internal page anchors
jQuery('a[href^="#"]').click(function(event){
    event.preventDefault();
    jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top}, 500);
});

//https://www.drupal.org/docs/8/api/javascript-api/javascript-api-overview
(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
/*
    	// init controller
    	var controller = new ScrollMagic.Controller({loglevel: 3});

    	// build tween
    	var tween = TweenMax.to(".page-header", 0.5, {backgroundColor: "black"});

    	// build scene
    	var scene = new ScrollMagic.Scene({triggerElement: ".view-front-page-slideshow", duration: 300, loglevel: 3})
    					.setTween(tween)
    					.setPin(".page-header")
    					.addIndicators() // add indicators (requires plugin)
    					.addTo(controller);

    	// checkbox actions
    	$("form.loglevel input[type=checkbox]").on("change", function (e) {
    		var
    			target = $(this).attr("id") == "logcontroller" ? controller : scene,
    			level = $(this).prop("checked") ? 3 : 0;

    		target.loglevel(level);
    	});
*/
    }
  };
})(jQuery, Drupal);
