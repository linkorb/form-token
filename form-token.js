(function ($) {
    $('form').each(function () {
        if ($(this).attr('method').toLowerCase() == 'post') {
            $(this).append(
                $('<input>').attr({
                    type: 'hidden',
                    name: '__form_token',
                    value: formToken,
                })
            );
        }
    });
})(jQuery);