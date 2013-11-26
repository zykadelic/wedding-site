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

		current.add(next).css('display', 'block');
		current.removeClass('active');

		setTimeout(function(){ next.addClass('active') }, 1);
		setTimeout(function(){ current.css('display', 'none') }, 1000);

		animateSlide();
	}, 6000);
}
