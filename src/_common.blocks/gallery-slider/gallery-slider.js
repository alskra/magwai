$(function () {
    $('.gallery-slider').each(function () {
        $(this).find('.gallery-slider__view').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            fade: true,
            cssEase: 'ease',
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            autoplay: false,
            autoplaySpeed: 5000,
            zIndex: 1,
            lazyLoad: 'ondemand',
            asNavFor: $(this).find('.gallery-slider__thumb-inner'),
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).parent().removeClass('loading loading_before');
        });

        $(this).find('.gallery-slider__thumb-inner').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            fade: false,
            cssEase: 'ease',
            slidesToShow: 3,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: '<button type="button" class="slick-prev icon icon-angle-right"></button>',
            nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
            autoplay: false,
            autoplaySpeed: 5000,
            zIndex: 1,
            lazyLoad: 'ondemand',
            asNavFor: $(this).find('.gallery-slider__view'),
            focusOnSelect: true,
            responsive: [

            ]
        }).on('lazyLoaded', function (event, slick, image, imageSource) {
            $(image).parent().removeClass('loading loading_before');
        });
    });
});