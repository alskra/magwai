function reInitTooltip() {
    $('.js-tooltip').tooltip({container: 'body'});
    setTimeout(function () {
        reInitTooltip();
    }, 100);
}
$(function () {
    reInitTooltip();
});