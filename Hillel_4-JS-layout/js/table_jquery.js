;'use strict';


$(document).ready(() => {
    $('#homeworkJqueryTableButton').on('click', renderJQueryTablePage);
});

function renderJQueryTablePage() {

    $('#main-content').children('div').remove();
    $('#main-content').append($('<div/>').addClass('main-content__page'));

    const jqueryStudentsForm = new Form();
    jqueryStudentsForm.buildForm($('.main-content__page'), formInputsData);

    const storage = window.localStorage;

    if (storage.stringDataBase) {

        const stringDataBase = storage.getItem('stringDataBase');
        const dataBase = JSON.parse(stringDataBase);

        var jqueryStudentsTable = new Table();
        jqueryStudentsTable.buildTable($('.main-content__page'), dataBase);
        
    } else {

        const dataBase = [
            ['Number', 'First Name', 'Last Name', 'Age', 'Faculty of', 'Year', 'Site', 'Phone'],
            ['', 'Ivan', 'Ivanov', 19, 'Law', 2, 'https://jquery-docs.ru', '(009) 785-3407'], 
            ['', 'Petro', 'Petrov', 20, 'Electronics', 3, 'https://translate.google.com', '(009) 785-3407'], 
            ['', 'Egor', 'Kozlov', 25, 'Computers', 1, 'https://www.linkedin.com', '(986) 516-5651'], 
            ['', 'Gennadiy', 'Kusch', 17, 'Law', 5, 'https://learn.javascript.ru', '(009) 785-3407'], 
            ['', 'Lyubomir', 'Lyubomirov', 21, 'Phisics', 4, 'https://github.com', '(009) 785-3407']
        ];

        var jqueryStudentsTable = new Table();
        jqueryStudentsTable.buildTable($('.main-content__page'), dataBase);

        const stringDataBase = JSON.stringify(dataBase);
        storage.setItem('stringDataBase', stringDataBase);
    }

    $(document).ready(() => {

        $('.jquery-form').on('submit', () => {

            jqueryStudentsTable.submitStudent();
        });
    });    
}

class Table {

    buildTable(container, tableData) {

        const table = $('<table/>').addClass('jquery-table');
        
        $.each(tableData, function(rowIndex, currentRow) {
            
            const row = $('<tr/>');
            
            $.each(currentRow, function(colIndex, currentCell) { 
                
                row.append($('<t' + (rowIndex == 0 ? 'h' : 'd') + '/>').text(currentCell || rowIndex));
            });
            
            table.append(row);
        });

        return container.append(table);
    }

    submitStudent() {

        const firstName = $('#first-name').val();
        const lastName = $('#last-name').val();
        const age = $('#age').val();
        const faculty = $('#faculty-of').val();
        const year = $('#year').val();
        const site = $('#site').val();
        const phone = $('#phone').val();

        const newStudentData = ['', firstName, lastName, age, faculty, year, site, phone];

        const storage = window.localStorage;
        const dataBase = JSON.parse(storage.getItem('stringDataBase'));
        dataBase.push(newStudentData);

        const stringDataBase = JSON.stringify(dataBase);
        storage.setItem('stringDataBase', stringDataBase);

        $('form > input[id]').val('');

        const firstRow = $('<tr/>');
        $('table.jquery-table > tr:first').after(firstRow);

        $.each(newStudentData, function(colIndex, currentCell) { 
            firstRow.append($('<td/>').text(currentCell || 1));
        });

        setNumbers();
         
        return firstRow;
    }
}

class Form {

    buildForm(container, data) {

        const form = $('<form/>').addClass('jquery-form');

        $.each(data, (index, element) => {

            const span = $('<span/>').addClass('jquery-form__text').text(element);
            form.append(span);

            const id = element.toLowerCase().split(' ').join('-');
            const input = $('<input/>', {
                'required': 'required',
                'id': id
            }).addClass('jquery-form__input');            
            
            form.append(input);
        });

        $(document).ready(() => {

            $('#phone')

                .attr({
                    "placeholder": "(xxx) xxx-xxxx",
                    "maxlength": "14"
                })

                .keydown(function (e) {
                    var key = e.which || e.charCode || e.keyCode || 0;
                    const phone = $(this);

                    // Don't let them remove the starting '('
                    if (phone.val().length === 1 && (key === 8 || key === 46)) {
                            phone.val('('); 
                        return false;
                    } 
                    // Reset if they highlight and type over first char.
                    else if (phone.val().charAt(0) !== '(') {
                            phone.val('('+String.fromCharCode(e.keyCode)+''); 
                    }
                    // Auto-format- do not expose the mask as the user begins to type
                    if (key !== 8 && key !== 9) {
                        
                        if (phone.val().length === 4) {
                            phone.val(phone.val() + ')');
                        }
                        
                        if (phone.val().length === 5) {
                            phone.val(phone.val() + ' ');
                        }			
                        
                        if (phone.val().length === 9) {
                            phone.val(phone.val() + '-');
                        }
                    }

                    // Allow numeric (and tab, backspace, delete) keys only
                    return (key == 8 || 
                            key == 9 ||
                            key == 46 ||
                            (key >= 48 && key <= 57) ||
                            (key >= 96 && key <= 105));	
                })
            
                .bind('focus click', function () {
                    
                    const phone = $(this);
                    
                    if (phone.val().length === 0) {
                        phone.val('(');
                    } else {
                        var val = phone.val();
                        phone.val('').val(val); // Ensure cursor remains at the end
                    }
                })
                
                .blur(function () {
                    const phone = $(this);
                    
                    if (phone.val() === '(') {
                        phone.val('');
                    }
                });

            function checkForLatinInput(event) {

                const englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
                const key = String.fromCharCode(event.which);
            
                if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
                    return true;
                }

                if ($('.jquery-form__tip').length == 0) {

                    $('<span/>')
                        .addClass('jquery-form__tip')
                        .text('Only latin letters!')
                        .insertBefore($('table'));
                }

                return false;
            }

            $('#first-name')

                .attr({
                    "placeholder": "Enter name",
                    "value": ""
                })

                .on("keypress", checkForLatinInput)

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
                
            $('#first-name').on("paste", function (e) {
                e.preventDefault();
            });
            
            $('#last-name')

                .attr({
                    "placeholder": "Enter last name",
                    "value": ""
                })

                .on("keypress", checkForLatinInput)

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
                
            $('#last-name').on("paste", function (e) {
                e.preventDefault();
            });

            $('#faculty-of')

                .attr({
                    "placeholder": "Enter faculty",
                    "value": ""
                })

                .on("keypress", checkForLatinInput)

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
                
            $('#faculty-of').on("paste", function (e) {
                e.preventDefault();
            });

            function checkAgeInput(event) {

                const digits = /[0-9]/g;
                const key = String.fromCharCode(event.which);

                function showAgeTip() {

                    if ($('.jquery-form__tip').length == 0) {

                        $('<span/>')
                            .addClass('jquery-form__tip')
                            .text('Invalid age value! Support min 16 and max 50')
                            .insertBefore($('table'));

                    } else {

                        $('.jquery-form__tip').text('Invalid age value! Support min 16 and max 50');
                    }
                }
            
                if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || digits.test(key)) {
                    
                    if (this.value.length === 1) {

                        if ((this.value + +key) < 16 || (this.value + +key) > 50) {

                            showAgeTip();

                            return false;
                        }
                    }

                    if (this.value.length === 0) {

                        if (key > 5) {

                            showAgeTip();

                            return false;
                        }
                    }

                    $('.jquery-form__tip').remove();
                            
                    return true;
                }

                if ($('.jquery-form__tip').length == 0) {

                    $('<span/>')
                        .addClass('jquery-form__tip')
                        .text('Only numbers!')
                        .insertBefore($('table'));
                }

                return false;
            }

            $('#age')

                .attr({
                    "placeholder": "Enter age",
                    "value": "",
                    "maxlength": "2"
                })

                .on("keypress", checkAgeInput)

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
                
            $('#age').on("paste", function (e) {
                e.preventDefault();
            });

            function checkYearInput(event) {

                const digits = /[1-6]/g;
                const key = String.fromCharCode(event.which);
            
                if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || digits.test(key)) {

                    $('.jquery-form__tip').remove();
                            
                    return true;
                }

                if ($('.jquery-form__tip').length == 0) {

                    $('<span/>')
                        .addClass('jquery-form__tip')
                        .text('Invalid year value! Support min 1 and max 6')
                        .insertBefore($('table'));
                }

                return false;
            }

            $('#year')

                .attr({
                    "placeholder": "Enter year of studying",
                    "value": "",
                    "maxlength": "1"
                })

                .on("keypress", checkYearInput)

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
                
            $('#age').on("paste", function (e) {
                e.preventDefault();
            });

            $('#site')
                
            .attr({
                    "placeholder": "Enter site url starting with http:// or https://",
                    "value": ""
                })
                
                .on("keypress", function() {

                    if (this.value.length > 8) {

                        if (!(this.value.indexOf('http://') == 0 || this.value.indexOf('https://') == 0)) {

                            if ($('.jquery-form__tip').length == 0) {

                                $('<span/>')
                                    .addClass('jquery-form__tip')
                                    .text('Invalid site url! It must starting with http:// or https://')
                                    .insertBefore($('table'));
                            } else {

                                $('.jquery-form__tip')
                                    .text('Invalid site url! It must starting with http:// or https://');
                            }
                                                        
                            return false;
                        }

                    } else {
                        
                        $('.jquery-form__tip').remove();

                        return true;
                    }
                })

                .blur(() => {

                    $('.jquery-form__tip').remove();
                });
        });                                         

        $('<input/>', {
            'class': 'jquery-form__submit',
            type: 'submit',
            value: 'Add student'
        }).appendTo(form);

        return container.append(form);
    }
}

const formInputsData = ['First Name', 'Last Name', 'Age', 'Faculty of', 'Year', 'Site', 'Phone'];

function setNumbers () {

    const rows = $('table.jquery-table > tr');

        for (let i = 0; i < rows.length; i++) {

            if (i != 0) {

                rows.eq(i).children().eq(0).text(i);
            }
        }
}