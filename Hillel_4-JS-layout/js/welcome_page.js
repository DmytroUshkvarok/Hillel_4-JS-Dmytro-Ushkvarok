;'use strict';

function renderWelcomePage() {
    const welcomePage = document.createElement('div');
    welcomePage.className = 'main-content__page';
        
    const welcomePageHeader = document.createElement('h1');
    welcomePageHeader.className = 'main-content__header';
    welcomePageHeader.innerHTML = 'Welcome page!';
    welcomePage.appendChild(welcomePageHeader);
        
    const welcomePageText = document.createElement('p');
    welcomePageText.className = 'main-content__text';
    welcomePageText.innerHTML = 'Hello! This is my working layout page within the FRONT-END PRO course.\n' +
        'Here You can find my current JavaScript homeworks and studying results.';
    welcomePage.appendChild(welcomePageText);

    const welcomeImage = document.createElement('img');
    welcomeImage.className = 'welcome-page-image';
    welcomeImage.src = './images/welcome_page.jpg';
    welcomeImage.alt = 'welcome_image';
    welcomePage.appendChild(welcomeImage);

    mainContent.appendChild(welcomePage)
}

document.addEventListener('DOMContentLoaded', () => {

    welcomePageButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        renderWelcomePage();
    });
});
