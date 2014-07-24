$(function(){
	if($('#wedding-day').length){
		$.lightbox();

		$(document).on('touchstart', '#picture-lightbox .picture', function(e){
			$(this).toggleClass('touch-hover');
		});
	}
});
