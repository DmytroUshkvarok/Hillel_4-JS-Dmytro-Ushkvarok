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
