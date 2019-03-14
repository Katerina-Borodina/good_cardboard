$(document).ready(function() {
    $('.header-contacts__button').on('click', function () {
        $('.overlay').show();
    });
    $('.popup-close').on('click', function () {
        $('.overlay').hide();
    });
});

$(document).ready(function(){
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            },
            {
                breakpoint: 992,
                settings: 'unslick'
            }
        ],
        prevArrow: '<div class="slider-arrow_main slider-arrow_main__left"></div>',
        nextArrow: '<div class="slider-arrow_main slider-arrow_main__right"></div>'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right"></div>'
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<div class="slider-arrow_main slider-arrow_main__left"></div>',
        nextArrow: '<div class="slider-arrow_main slider-arrow_main__right"></div>'
    });
});

$(function() {
    var link = $('.m-menu-link');
    var close = $('.close-menu');
    var menu = $('.m-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu_activ');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu_activ');
    });
});
