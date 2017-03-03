$(function () {
    $(window).on('resize.initColScroll', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
            $('.content__column-scroll').removeClass('ps-scroll').perfectScrollbar('destroy');
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
            $('.content__column-scroll').addClass('ps-scroll');
        }
    }).trigger('resize.initColScroll');
});