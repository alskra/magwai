$(function () {
    var slideout;

    $(document).on('click.menuToggle', function (e) {
        var target = $(e.target);
        if (target.closest('.menu__btn').length && target.closest('.menu__item').hasClass('menu__item_submenu')){
            e.preventDefault();
            $('.menu__submenu').not(target.closest('.menu__btn').next('.menu__submenu').slideToggle(150).closest('.menu__item').toggleClass('menu__item_opened').end())
                .slideUp(150).closest('.menu__item').removeClass('menu__item_opened');
        }
        else if (!target.closest('.menu').length){
            $('.menu__submenu').slideUp(150).closest('.menu__item').removeClass('menu__item_opened');
        }
    });

    $(window).on('resize.initMenu', function () {
        if (Modernizr.mq('(max-width: ' + ($screenMd-1) + 'px)') && !slideout && $('.menu').length){
            $('.menu').insertBefore('.wrapper');

            slideout = new Slideout({
                'panel': document.querySelector('.wrapper'),
                'menu': document.querySelector('.menu'),
                'padding': 256,
                'tolerance': 70
            });

            $('body').on('click', '.toggle-menu', function (e) {
                e.preventDefault();
                slideout.toggle();
            });

            slideout.on('beforeopen', function() {
                $('.toggle-menu').addClass('toggle-menu_opened');
                $('.header').css({'position': 'absolute', 'top': $(window).scrollTop()});
                $('.filters_fixed .filters__inner').css({'position': 'absolute', 'top': $(window).scrollTop() + 54});
            });

            slideout.on('beforeclose', function() {
                $('.toggle-menu').removeClass('toggle-menu_opened');
            });

            slideout.on('translate', function(translated) {
                $('.header').css({'position': 'absolute', 'top': $(window).scrollTop()});
                $('.filters_fixed .filters__inner').css({'position': 'absolute', 'top': $(window).scrollTop() + 54});
            });

            slideout.on('close', function() {
                $('.header').css({'position': '', 'top': ''});
                $('.filters_fixed .filters__inner').css({'position': '', 'top': ''});
            });
        }
        else if (Modernizr.mq('(min-width: ' + ($screenMd) + 'px)') && $('.menu').length){
            $('.menu').prependTo('.header__inner');

            if (slideout){
                slideout.destroy();
                slideout = undefined;
                $('.slideout-menu, .slideout-panel').removeClass('slideout-menu slideout-panel slideout-menu-left slideout-menu-right slideout-panel-left slideout-panel-right');
                $('body').off('click', '.toggle-menu');
            }
        }
    }).trigger('resize.initMenu');
});