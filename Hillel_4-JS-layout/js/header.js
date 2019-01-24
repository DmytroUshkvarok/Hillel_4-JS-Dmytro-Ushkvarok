;'use strict';

let globalWrapper = document.getElementById('global-wrapper');
globalWrapper.className = 'global-wrapper';

//  Header wrapper

let header = document.createElement('header');
header.classList.add('header');
globalWrapper.appendChild(header);

//  Logo

let logoBox = document.createElement('div');
logoBox.classList.add('header__logo-box');
header.appendChild(logoBox);

//  Header navigation

let headerNavigation = document.createElement('nav');
headerNavigation.classList.add('header__navigation');
header.appendChild(headerNavigation);

let headerNavigationList = document.createElement('ul');
headerNavigationList.classList.add('header__navigation-list');
headerNavigation.appendChild(headerNavigationList);

let headerNavigationToggle = document.createElement('li');
headerNavigationToggle.classList.add('header__navigation-toggle');
headerNavigationToggle.innerHTML = 'NAVIGATION';
headerNavigationList.appendChild(headerNavigationToggle);

let headerLinksNames = ['I', 'LIKE', 'JavaScript'];
let addHeaderButtons = function () {
    for (let i = 0; i < headerLinksNames.length; i++) {
        let headerButton = document.createElement('li');
        headerButton.classList.add('header__navigation-item', 'header__navigation-item--hidden');
        let headerLink = document.createElement('a');
        headerLink.classList.add('header__navigation-link');
        headerLink.innerHTML = headerLinksNames[i];
        headerLink.href = '#';
        headerButton.appendChild(headerLink);
        headerNavigationList.appendChild(headerButton);
    }
};
addHeaderButtons();

//  Control of buttons state

let headerNavigationItems = headerNavigationList.getElementsByClassName('header__navigation-item');
headerNavigationToggle.onclick = function () {
    controlActiveStateOfElement.call(headerNavigationToggle, 'header__navigation-toggle');
    controlStateOfBlock.call(headerNavigationItems, 'header__navigation-item');
};

//  Creating watches

let watches = document.createElement('div');
watches.className = 'watches';
header.appendChild(watches);

let hoursField = document.createElement('div');
hoursField.className = 'watches__field';
watches.appendChild(hoursField);

let minutesDots = document.createElement('span');
minutesDots.innerHTML = ':';
minutesDots.className = 'watches__field';
watches.appendChild(minutesDots);

let minutesField = document.createElement('div');
minutesField.className = 'watches__field';
watches.appendChild(minutesField);

let secondsDots = minutesDots.cloneNode(true);
watches.appendChild(secondsDots);

let secondsField = document.createElement('div');
secondsField.className = 'watches__field';
watches.appendChild(secondsField);

addWorkingWatches();
setInterval(addWorkingWatches, 1000);

function addWorkingWatches() {
    let dateObject = new Date();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    renderValue(hoursField, hours);
    renderValue(minutesField, minutes);
    renderValue(secondsField, seconds);
}

function renderValue(element, time) {
    if (element.innerText !== `${time}`) {
        element.innerHTML = checkTimeValue(time);
    }
}

function checkTimeValue(time) {
    return (time < 10)
        ? '0' + time
        : time;
}

//  Resize controls

let resizeWatchingScreen = document.createElement('div');
resizeWatchingScreen.className = 'resize-screen';
header.insertBefore(resizeWatchingScreen, logoBox);

renderScreenSize();

function renderScreenSize() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    resizeWatchingScreen.innerHTML = `${screenWidth} x ${screenHeight}`;
}

window.addEventListener('resize', function() {
    setTimeout(renderScreenSize, 2000);
});