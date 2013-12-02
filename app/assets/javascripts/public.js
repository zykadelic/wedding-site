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

		setTimeout(function(){
			next.addClass('active');
			setTimeout(function(){
				current.css('display', 'none');
				animateSlide();
			}, 1000);
		}, 1);
	}, 6000);
}
