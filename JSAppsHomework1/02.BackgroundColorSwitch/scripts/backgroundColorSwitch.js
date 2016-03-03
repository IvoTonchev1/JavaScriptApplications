$(document).ready(function () {
    'use strict';

    function paint() {
        var input = $('#name'),
            name = input.val(),
            color = $('#color').val(),
            elementsToPaint = $('.' + name);

        elementsToPaint.css('background-color', color);
        input.val('');
    }

    $('#paint').click(paint);
});