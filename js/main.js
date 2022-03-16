$(function() {

    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="img/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="img/next.svg" alt=""></button>',

    });
    $('.burger__menu').click(function() {
        $('.header-nav').toggleClass('active');
        $('.burger__menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    })

});