﻿( function($) {
  'use strict';

$(function(e) {
	
	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=90
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
	});
	
	$('.navbar-nav a ').on('click', function(){
		if ( $('body').width() < 768 ) {
			$('#navigation').removeClass('shownav')
            $('.nav-stacked .container').toggleClass('hide')
		}
	});
	
	/*-------------------------------------------------------------------------------
		Navigation
	-------------------------------------------------------------------------------*/
	$('#menu-toggle-bar').on('click', function(e) {
        $('.nav-stacked .container').toggleClass('hide');
	 	  $("#navigation").toggleClass("shownav");
	});
	$('#menu-toggle-close').on('click', function(e) {
		   $("#navigation").removeClass("shownav");
	});

	/*-------------------------------------------------------------------------------
	 Timer
	-------------------------------------------------------------------------------*/
 	var austDay = new Date();
	austDay = new Date('2017-06-08 08:00');
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
 
	/*-------------------------------------------------------------------------------
	  Tab li Add Class
	-------------------------------------------------------------------------------*/
$('.conf-close').on('click', function(e) {
	if ( $(this).hasClass('menu-down') ) {
		$(this).removeClass('menu-down');
	} else {
		$(this).addClass('menu-down');    
	}
});	
	
/*-------------------------------------------------------------------------------
  Background slider
-------------------------------------------------------------------------------*/
   
  // $("#slideshow").owlCarousel({
	// autoPlay : 5000,
	// stopOnHover : false,
	// navigation:false,
	// paginationSpeed : 1000,
	// goToFirstSpeed : 2000,
	// singleItem : true,
	// autoHeight : true,
	// transitionStyle:"fadeUp"
  // });
 
 
 /*------------------------------------------------------------------
	Countdown
	-------------------------------------------------------------------*/
 	var endDateString = '2017-06-08 08:00';
	var endDate = new Date(endDateString.replace(/-/g, '/'));
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div class='countdown-amount'>" + this.leadingZeros(data.days, 2) + " <span class='countdown-period'>Days</span></div><div class='countdown-amount'>" + this.leadingZeros(data.hours, 2) + " <span class='countdown-period'>Hours</span></div><div class='countdown-amount'>" + this.leadingZeros(data.min, 2) + " <span class='countdown-period'>Minutes</span></div><div class='countdown-amount'>" + this.leadingZeros(data.sec, 2) + " <span class='countdown-period'>Seconds</span></div>");
	  }
	});	
  
  
  /*------------------------------------------------------------------
	back to top
	-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});



 /*-------------------------------------------------------------------------------
  Google map
	-------------------------------------------------------------------------------*/

	if ($('#js-gmap').length > 0){
		var map;
		map = new GMaps({
			el: '#js-gmap',
			lat: 46.752870,
			lng: 23.605845,
			scrollwheel:false,
			zoom: 16,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: true
		});
		var image = 'assets/images/js_heroes_pin.png';
		var infoWindow = new google.maps.InfoWindow({
		});
		map.addMarker({
            lat: 46.752870,
            lng: 23.605845,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			infoWindow:{
				content: '<div class="map-info"><span>Trifoiului Street number 3, Cluj-Napoca, Romania<br><b>Grand Hotel Italia</b></span></div>'
			}
		});
	}

 /*-------------------------------------------------------------------------------
  Ajax Form
	-------------------------------------------------------------------------------*/

	if ($('#js-ajax-form').length) {
		$('#js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.modal').modal('hide');
							$('#success').modal('show');
						},

						error: function(){
							$('.modal').modal('hide');
							$('#error').modal('show');
						}
					});
				}
			});
		});
	}
/*-------------------------------------------------------------------------------
  Paypal Form
	-------------------------------------------------------------------------------*/

	if ($('#paypal-form').length) {
		$('#paypal-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			});
		});
	}

});

})(jQuery);