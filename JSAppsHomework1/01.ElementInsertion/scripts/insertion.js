$(document).ready(function () {
    'use strict';

    var liBefore = $('<li>')
        .text('List item inserted using before()')
        .addClass('dynamicallyAdded'),
        liToAfter = $('<li>')
            .text('List item inserted using after()')
            .addClass('dynamicallyAdded'),
        textToPrepend = $('<span>')
            .text('Prepended text using prepend()')
            .addClass('dynamicallyAdded'),
        textToAppend = $('<span>')
            .text('Appended text using append()')
            .addClass('dynamicallyAdded');

    $('#center')
        .before(liBefore)
        .after(liToAfter)
        .prepend(textToPrepend)
        .append(textToAppend);
});