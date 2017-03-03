$(function () {
    $(window).on('resize.replaceFooter', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
            $('.footer').appendTo('.wrapper');
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
            $('.footer').prependTo('.content__column-footer');
        }
    }).trigger('resize.replaceFooter');
});