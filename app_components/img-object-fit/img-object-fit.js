//ObjectFit - use classes 'contain' and 'scale-down' for scale IMG
function objectFit(img){
    if (document.documentElement.style.objectFit === undefined || document.documentElement.style.objectPosition === undefined){
        var src=$(img).attr('src');
        var style=$(img).attr('style');
        if (!style){style=''}
        $(img).attr('style', 'display: block !important; width: auto !important; height: auto !important; border: 0 !important; margin: 0 !important; padding: 0 !important;');
        var width=$(img).width();
        var height=$(img).height();
        $(img).attr('style', style).data({'naturalWidth': width, 'naturalHeight': height});
        $(img).css({'paddingLeft':'100%', 'visibility':'visible', 'backgroundImage':'url("'+ src +'")', 'backgroundSize':''});
        if ($(img).hasClass('scale-down') && width<$(img).innerWidth() && height<$(img).innerHeight()){
            $(img).css({'backgroundSize':'auto'});
        }
    }
    else{
        $(img).css({'visibility':'visible'});
    }
}
if (document.documentElement.style.objectFit === undefined || document.documentElement.style.objectPosition === undefined){
    $(window).on('resize.objectFit', function () {
        $('.img-object-fit').each(function () {
            if ($(this).hasClass('scale-down') && $(this).data('naturalWidth')<$(this).innerWidth() && $(this).data('naturalHeight')<$(this).innerHeight()){
                $(this).css({'backgroundSize':'auto'});
            }
            else {
                $(this).css({'backgroundSize':''});
            }
        })
    });
}