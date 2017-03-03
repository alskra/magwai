$(function () {
   $('body').on('click', '.vacancy-item__title', function () {
       $(this).closest('.vacancy-item').toggleClass('vacancy-item_opened').find('.vacancy-item__collapsible').slideToggle(150);
   })
});