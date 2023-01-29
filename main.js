$(function () {
    $('.offer__box').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
});

$('.menu').click (function(){
    $(this).toggleClass('open');
});

$(function setEqualWidth() {
	if ($(window).width() <= 768) {
        $(".menu").prepend($(".header__menu-list"));
		$(".menu").prepend($(".header__menu-catalog-list"));
		$(".menu").prepend($(".header__search"));
	}
	$(window).on('load', setEqualWidth);
	$(window).on('resize', function() {
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function() {
			setEqualWidth();
		}, 500);
	})
});
