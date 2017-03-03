//DropDown
$(function(){
    $('body').on('click.dropdown', '.dropdown__toggle', function(){
        $(this).closest('.dropdown').toggleClass('open');
    });
    $(document).click(function(event){
        $('.dropdown').not($(event.target).closest('.dropdown').add($(event.target).parents('.dropdown'))).removeClass('open');
    });
});