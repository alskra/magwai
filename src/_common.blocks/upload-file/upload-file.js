function readFile (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(input).closest('.upload-file').find('.upload-file__btn_preview').css({backgroundImage: 'url(' + e.target.result + ')', backgroundSize: 'cover'});
            $(input).closest('.upload-file').addClass('upload-file_has-value').find('.upload-file__src').text(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
    else{
        $(input).closest('.upload-file').find('.upload-file__btn_preview').css({backgroundImage: '', backgroundSize: ''});
        $(input).closest('.upload-file').removeClass('upload-file_has-value').find('.upload-file__src').text('');
    }
}
$(function () {
    $('body').on('change', '.upload-file .upload-file__field', function (){
        readFile(this);
    });
});