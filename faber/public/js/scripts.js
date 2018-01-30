( function( $ ) {

/*---- Offcanvas ----*/

$('.offcanvas-toggle').on('click', function() {
  $('body').toggleClass('offcanvas-expanded');
});

$('.offcanvas-toggle').on('click', function(){
	$(this).toggleClass('offcanvas-toggle--active');
});

/*---- Slider ----*/

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
});


} )( jQuery );
