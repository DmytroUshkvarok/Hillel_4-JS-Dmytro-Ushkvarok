;'use strict';

let mainContent = document.createElement('main');
mainContent.className = 'main-content';
globalWrapper.appendChild(mainContent);

function renderWelcomePage() {
    let welcomePage = document.createElement('div');
    welcomePage.className = 'main-content__page';
        
    let welcomePageHeader = document.createElement('h1');
    welcomePageHeader.className = 'main-content__header';
    welcomePageHeader.innerHTML = 'Welcome page!';
    welcomePage.appendChild(welcomePageHeader);
        
    let welcomePageText = document.createElement('p');
    welcomePageText.className = 'main-content__text';
    welcomePageText.innerHTML = 'Hello! This is my working layout page within the FRONT-END PRO course.\n' +
        'Here You can find my current JavaScript homeworks and studying results.';
    welcomePage.appendChild(welcomePageText);

    let welcomeImage = document.createElement('img');
    welcomeImage.className = 'welcome-page-image';
    welcomeImage.src = './images/welcome_page.jpg';
    welcomeImage.alt = 'welcome_image';
    welcomePage.appendChild(welcomeImage);

    mainContent.appendChild(welcomePage)
}

document.addEventListener('DOMContentLoaded', renderWelcomePage);

document.addEventListener('DOMContentLoaded', () => {

    welcomePageButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        renderWelcomePage();
    });
});

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


// Homework "UNIVERSAL CLICK_ME FUNCTION"

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkClickMeButton.addEventListener('click', function renderClickMePage() {
        
        let clickMePage = document.createElement('div');
        clickMePage.className = 'main-content__page';
    
        let clickMePageHeader = document.createElement('h1');
        clickMePageHeader.className = 'main-content__header';
        clickMePageHeader.innerHTML = 'Universal clickMe(event) function';
        clickMePage.appendChild(clickMePageHeader);
    
        let clickMePageText = document.createElement('p');
        clickMePageText.className = 'main-content__text';
        clickMePageText.innerHTML = 'Push the button to colorise it. Push it again to uncolorise it.';
        clickMePage.appendChild(clickMePageText);
    
        let clickMeButtonGreen = document.createElement('input');
        clickMeButtonGreen.className = 'click-me-button';
        clickMeButtonGreen.type = 'button';
        clickMeButtonGreen.value = 'Green';
        clickMeButtonGreen.color = 'green';
        clickMePage.appendChild(clickMeButtonGreen);
    
        let clickMeButtonYellow = document.createElement('input');
        clickMeButtonYellow.className = 'click-me-button';
        clickMeButtonYellow.type = 'button';
        clickMeButtonYellow.value = 'Yellow';
        clickMeButtonYellow.color = 'yellow';
        clickMePage.appendChild(clickMeButtonYellow);
    
        let clickMeButtonRed = document.createElement('input');
        clickMeButtonRed.className = 'click-me-button';
        clickMeButtonRed.type = 'button';
        clickMeButtonRed.value = 'Red';
        clickMeButtonRed.color = 'red';
        clickMePage.appendChild(clickMeButtonRed);

        mainContent.replaceChild(clickMePage, mainContent.firstChild);

        clickMeButtonGreen.addEventListener('click', clickMe);
        clickMeButtonYellow.addEventListener('click', clickMe);
        clickMeButtonRed.addEventListener('click', clickMe);
        
        function clickMe(event) {
            let element = this;

            if (element.style.color == element.color) {
                element.style.color = 'black';
            } else {
                element.style.color = element.color;
            }
        
            return console.log(event);
        }
    });
});