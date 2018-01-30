( function( $ ) {

/*---- Navigation ----*/

( function(){
		var $document = $(window),
		$element = $('.header--fixed'),
		className = 'header--visible';

		$document.scroll(function() {
			$element.toggleClass(className, $document.scrollTop() >= 620);
		});
	})();

/*----- contact buttons offset -----*/

( function(){
		var $document = $(window),
		$element = $('.btn--chat'),
		className = 'btn--visible';

		$document.scroll(function() {
			$element.toggleClass(className, $document.scrollTop() >= 820);
		});
	})();

/*---- Slick slider ----*/


$(function () {
    var slickOpts = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true
    };  
    $('.linen-slider').slick(slickOpts);
    
});

/*---- Offcanvas ----*/

$('.offcanvas-toggle').on('click', function() {
  $('body').toggleClass('offcanvas-expanded');
});

$('.offcanvas-toggle').on('click', function(){
		$(this).toggleClass('offcanvas-toggle--active');
		$(this).toggleClass('offcanvas-toggle--focus');
})


} )( jQuery );