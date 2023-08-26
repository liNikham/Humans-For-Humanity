$(document).ready(function(){

		  var $body       = $('body');
		  var $btnOpen    = $('.toggle-btn');

		  $btnOpen.click(function() {
		    $body.toggleClass('open-login');
		  });
		});