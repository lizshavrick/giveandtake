$('input').on('input', function() {
    var v = $(this).val();
    $('p').css('font-size', v + 'em')
});