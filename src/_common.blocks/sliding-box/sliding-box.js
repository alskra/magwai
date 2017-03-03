$(function () {
    $('.sliding-box__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    fade: true
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).closest('.sliding-box').find('.sliding-box__ctrl-line').css('left', nextSlide*25 + '%');
    });

    $('body').on('click', '.sliding-box__ctrl', function (e) {
        e.preventDefault();
        var $slidingBox = $(this).closest('.sliding-box');
        $slidingBox.find('.sliding-box__slider').slick('slickGoTo', $slidingBox.find('.sliding-box__ctrl').index(this));
    });
});