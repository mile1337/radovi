( function( $ ) {

/*---- Offcanvas ----*/

$('.offcanvas-toggle').on('click', function() {
  $('body').toggleClass('offcanvas-expanded');
});

$('.offcanvas-toggle').on('click', function(){
	$(this).toggleClass('offcanvas-toggle--active');
});


/*---- Navigation ----*/

( function(){
		var $document = $(window),
		$element = $('.header--fixed'),
		className = 'header--visible';

		$document.scroll(function() {
			$element.toggleClass(className, $document.scrollTop() >= 350);
		});
	})();


/*---- Slick slider ----*/

$('.reference-slider').slick({
		adaptiveHeight: true,
		prevArrow: '<img src="img/icons/prev-ico.png" class="slick-arrow slick-prev">',
		nextArrow: '<img src="img/icons/next-ico.png" class="slick-arrow slick-next">'
	});


/*$(document).ready(function() {
  $( '.selectmenu-js' ).selectmenu();
});*/

$(document).ready(function() {
  $(".selectmenu-js").select2();
});

} )( jQuery );
