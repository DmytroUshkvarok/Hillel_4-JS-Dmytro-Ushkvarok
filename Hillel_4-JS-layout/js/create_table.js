;'use strict';

// Homework "CREATING TABLE"

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkTableButton.addEventListener('click', function renderTablePage() {
        
        let tablePage = document.createElement('div');
        tablePage.className = 'main-content__page';
    
        let tablePageHeader = document.createElement('h1');
        tablePageHeader.className = 'main-content__header';
        tablePageHeader.innerHTML = 'Generating custom table';
        tablePage.appendChild(tablePageHeader);
    
        let tablePageText = document.createElement('p');
        tablePageText.className = 'main-content__text';
        tablePageText.innerHTML = 'Fill inputs by numbers to build a table please.';
        tablePage.appendChild(tablePageText);
    
        let rowsInput = document.createElement('input');
        rowsInput.className = 'table-input';
        rowsInput.type = 'text';
        rowsInput.placeholder = 'rows';
        tablePage.appendChild(rowsInput);
    
        let columnsInput = document.createElement('input');
        columnsInput.className = 'table-input';
        columnsInput.type = 'text';
        columnsInput.placeholder = 'columns';
        tablePage.appendChild(columnsInput);
    
        let buttonToTableBuilding = document.createElement('input');
        buttonToTableBuilding.className = 'table-button';
        buttonToTableBuilding.type = 'button';
        buttonToTableBuilding.value = 'Build';
        tablePage.appendChild(buttonToTableBuilding);

        mainContent.replaceChild(tablePage, mainContent.firstChild);
        
        buttonToTableBuilding.addEventListener('click', function buildTable() {
                
            let i;
            let j;
            let rows = rowsInput.value;
            let columns = columnsInput.value;    

            let table = document.createElement('table');
            table.className = 'custom-table';            
            
            for (i = 1; i <= rows; i++) {
                let tr = table.insertRow();
                
                for (j = 1; j <= columns; j++) {
                    let td = tr.insertCell();
                    td.title = `${i} x ${j}`;
                    td.i = i;
                    td.j = j;

                    td.addEventListener('click', function() {
                        alert(`Row ${td.i}` + `\n` + `Column ${td.j}`);
                    });
                }
            }

            if (tablePage.children.length > 5) {
                tablePage.removeChild(tablePage.lastChild);
            }

            tablePage.appendChild(table);
        });
    });
});