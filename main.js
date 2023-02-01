const form = document.getElementById("questionForm");

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

$('.menu').click(function () {
    $(this).toggleClass('open');
});

$(function setEqualWidth() {
    if ($(window).width() <= 768) {
        $(".menu").prepend($(".header__menu-list"));
        $(".menu").prepend($(".header__menu-catalog-list"));
        $(".menu").prepend($(".header__search"));
    }
    $(window).on('load', setEqualWidth);
    $(window).on('resize', function () {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function () {
            setEqualWidth();
        }, 500);
    })
});

$(".button__popup").click(function () {
    $(".popup__question").fadeIn(500);
});

$(".close").click(function () {
    $(".popup__question").fadeOut(500);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();

})

$(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $(".popup__question"); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
})

$(document).on('keyup', function(e) {
	if ( e.key == "Escape" ) {
		$(".popup__question").hide();
	}
});