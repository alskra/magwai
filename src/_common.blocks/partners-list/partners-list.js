$(function () {
    if (document.documentElement.style.maskImage !== undefined || document.documentElement.style.webkitMaskImage !== undefined){
        $('.partners-list__item').each(function () {
            $(this).addClass('partners-list__item_mask-image').css('mask-image', $(this).css('background-image'));
        });
    }
    $('.partners-list__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'ease',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev icon icon-angle-right"></button>',
        nextArrow: '<button type="button" class="slick-next icon icon-angle-right"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: $screenSm - 1,
                settings: {
                    dots: false,
                    slidesToShow: 3
                }
            }
        ]
    });
});