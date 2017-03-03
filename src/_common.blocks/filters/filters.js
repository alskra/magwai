$(function () {
    $(window).on('scroll.attachFilters', function () {
       $('.filters[data-section]').each(function () {
           var sect = $('#' + $(this).data('section'));
           var top = $(window).scrollTop() + 54 - $(this).offset().top;
           var bottom = $(window).scrollTop() + 54 - (sect.offset().top + sect.height() - 100);
           if (top >= 0 && bottom < 0){
               $(this).outerHeight($(this).outerHeight());
               $(this).addClass('filters_fixed').find('.filters__inner').outerWidth($(this).outerWidth());
           }
           else {
               $(this).outerHeight('');
               $(this).removeClass('filters_fixed').find('.filters__inner').outerWidth('');
           }
       });
    });
    $(window).on('resize.correctlyFilters', function () {
        $(this).trigger('scroll.attachFilters');
    })
});