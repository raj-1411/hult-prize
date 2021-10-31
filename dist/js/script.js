/* Statistic js */

$.fn.jQuerySimpleCounter = function( options ) {
	var settings = $.extend({
		start:  0,
		end:    100,
		easing: 'swing',
		duration: 400,
		complete: ''
	}, options );

	var thisElement = $(this);

	$({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};


$('#number1').jQuerySimpleCounter({end: 10000,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 100,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 300,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 100000,duration: 1000});

/* Statistic js ends */

/* Sponsor starts */

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	navText: [
	  "<i class='fa fa-caret-left'></i>",
	  "<i class='fa fa-caret-right'></i>"
	],
	autoplay: true,
	autoplayHoverPause: true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 3
	  },
	  1000: {
		items: 5
	  }
	}
  })

/* Sponsor ends */