$(function(){
	animateSlide();
});

function animateSlide(){
	setTimeout(function(){
		var current = $('#slides li.active');
		var next = current.next();

		if(!next.length){
			next = $('#slides li:first');
		}
		current.removeClass('active');
		next.addClass('active');
		animateSlide();
	}, 6000);
}
