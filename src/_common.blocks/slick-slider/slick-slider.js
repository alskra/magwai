$(function () {
    $('.slick-slider').on('touchmove', function (e) {
        e.stopPropagation();
    })
});