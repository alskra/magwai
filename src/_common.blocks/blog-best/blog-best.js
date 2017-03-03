$(function () {
   $(window).on('resize.replaceBlogBest', function () {
       if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)')){
           $('.blog-best').appendTo('.content__column_center');
       }
       else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)')){
           $('.blog-best').appendTo('.content__column-header');
       }
   }).trigger('resize.replaceBlogBest');
});