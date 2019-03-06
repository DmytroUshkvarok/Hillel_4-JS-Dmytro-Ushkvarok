;'use strict';

// Homework "UNIVERSAL CLICK_ME FUNCTION"

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkClickMeButton.addEventListener('click', function renderClickMePage() {
        
        let clickMePage = document.createElement('div');
        clickMePage.className = 'main-content__page';
    
        let clickMePageHeader = document.createElement('h1');
        clickMePageHeader.className = 'main-content__header';
        clickMePageHeader.innerHTML = 'Universal clickMe function';
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