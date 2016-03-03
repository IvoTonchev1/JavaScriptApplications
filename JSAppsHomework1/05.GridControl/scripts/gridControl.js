$(document).ready(function () {
    'use strict';

    function createRow(data, isHeader) {
        var row = $('<tr>');

        $.each(data, function (index, cellContent) {
            var cell;
            if (isHeader) {
                cell = $('<th>');
            } else {
                cell = $('<td>');
            }

            cell.text(cellContent);
            row.append(cell);
        });

        return row;
    }

    $.fn.grid = function () {
        this.addHeader = function (data) {
            var header = createRow(data, true);

            this.find('thead')
                .empty()
                .append(header);

            return this;
        };

        this.addRow = function (data) {
            var row = createRow(data, false);

            this.find('tbody')
                .append(row);

            return this;
        };

        return this.append('<thead>')
            .append('<tbody>')
    };

    $( '#myGrid' )
        .grid()
        .addHeader( [ 'Subject', 'Module', 'Students' ] )
        .addRow( [ 'C-Sharp', 'Fundamentals', 250 ] )
        .addRow( [ 'JS Apps', 'Front-End', 60 ] )
        .addRow( [ 'Databases', 'Back-End', 160 ] )
        .addHeader( [ 'Subject', 'Changed Header', 'Students' ] );
});