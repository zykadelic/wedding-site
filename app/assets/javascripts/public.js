$(function(){
	if(!$('html').hasClass('csstransitions')){
		$('#slides li.active').css('opacity', 1);
		$('#slides li:not(.active)').css('opacity', 0);
	}
	animateSlide(1000);
});

function animateSlide(animationSpeed){
	setTimeout(function(){
		var current	= $('#slides li.active');
		var next	= current.next();

		if(!next.length){
			next = $('#slides li:first');
		}

		if($('html').hasClass('csstransitions')){
			current.removeClass('active');
			next.addClass('active');
		}else{
			next.addClass('active').animate({ opacity: 1 }, animationSpeed);
			current.animate({ opacity: 0 }, animationSpeed, function(){
				current.removeClass('active');
			});
		}

		animateSlide(animationSpeed);
	}, 6000);
}
