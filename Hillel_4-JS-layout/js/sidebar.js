;'use strict';

//  Sidebar wrapper

const sidebar = document.createElement('aside');
sidebar.className = 'sidebar';
globalWrapper.appendChild(sidebar);

//  Sidebar navigation

const sidebarNavigation = document.createElement('nav');
sidebarNavigation.className = 'sidebar__navigation';

const sidebarNavigationList = document.createElement('ul');
sidebarNavigationList.className = 'sidebar__navigation-list';

const sidebarNavigationToggle = document.createElement('li');
sidebarNavigationToggle.className = 'sidebar__navigation-toggle';
sidebarNavigationToggle.innerHTML = 'CHOOSE A PAGE';
sidebarNavigationList.appendChild(sidebarNavigationToggle);
sidebarNavigation.appendChild(sidebarNavigationList);
sidebar.appendChild(sidebarNavigation);

//  Sidebar socials

const socials = document.createElement('div');
socials.classList.add('socials', 'socials--sidebar');
const socialsData = {
    GitHub: {
        href: "https://github.com/DmytroUshkvarok",
        imgSrc: "./images/github_white.png",
        imgAlt: "GitHub profile"
    },
    LinkedIn: {
        href: "https://www.linkedin.com/in/dmytro-ushkvarok-92a3b4b5",
        imgSrc: "./images/linkedin_white.png",
        imgAlt: "Linkedin profile"
    },
    Trello: {
        href: "https://trello.com/b/tAsdPK9q/hillel4-js-dmytro-ushkvarok",
        imgSrc: "./images/trello_white.png",
        imgAlt: "Trello dashboard"
    },
    Facebook: {
        href: "https://www.facebook.com/dmytro.ushkvarok",
        imgSrc: "./images/facebook_white.png",
        imgAlt: "Facebook profile"
    }
};
const addSocialsLinks = function () {
    for (const social in socialsData) {
        const socialLink = document.createElement('a');
        socialLink.classList.add('socials__link');
        socialLink.href = socialsData[social].href;
        socialLink.target = '_blank';
        const socialImage = document.createElement('img');
        socialImage.src = socialsData[social].imgSrc;
        socialImage.alt = socialsData[social].imgAlt;
        socialLink.appendChild(socialImage);
        socials.appendChild(socialLink);
    }
};
addSocialsLinks();
sidebar.appendChild(socials);


//  Sidebar signature

const signature = document.createElement('div');
signature.classList.add('signature', 'signature--sidebar');
signature.innerHTML = '&copy; 2018 - 2019&nbsp; Dmytro Ushkvarok<br/>Hillel_4 JS';
sidebar.appendChild(signature);

//  Sidebar button

const sidebarButton = document.createElement('button');
sidebarButton.className = 'sidebar__button';
sidebar.appendChild(sidebarButton);

//  Sidebar state control

const sidebarNavigationItems = sidebarNavigationList.getElementsByClassName('sidebar__navigation-item');
sidebarNavigationToggle.onclick = function () {
    controlActiveStateOfElement.call(sidebarNavigationToggle, 'sidebar__navigation-toggle');
    controlStateOfBlock.call(sidebarNavigationItems, 'sidebar__navigation-item');
};

sidebarButton.onclick = function () {
    controlHiddenStateOfElement.call(sidebar, 'sidebar');
};

//  Sidebar navigation --> Welcome page block

const welcomePageButton = document.createElement('li');
welcomePageButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--first',
    'sidebar__navigation-item--hidden');

const welcomePageLink = document.createElement('a');
welcomePageLink.className = 'sidebar__navigation-link';
welcomePageLink.innerHTML = 'Welcome page';
welcomePageLink.href = '#';
welcomePageButton.appendChild(welcomePageLink);
sidebarNavigationList.appendChild(welcomePageButton);

// "CREATE TABLE" homework's button, link is adding

const homeworkTableButton = document.createElement('li');
homeworkTableButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkTableLink = document.createElement('a');
homeworkTableLink.className = 'sidebar__navigation-link';
homeworkTableLink.innerHTML = 'Generate table';
homeworkTableLink.href = '#';
homeworkTableButton.appendChild(homeworkTableLink);
sidebarNavigationList.appendChild(homeworkTableButton);

// "UNIVERSAL CLICK_ME FUNCTION" homework's button, link

const homeworkClickMeButton = document.createElement('li');
homeworkClickMeButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkClickMeLink = document.createElement('a');
homeworkClickMeLink.className = 'sidebar__navigation-link';
homeworkClickMeLink.innerHTML = 'Universal clickMe function';
homeworkClickMeLink.href = '#';
homeworkClickMeButton.appendChild(homeworkClickMeLink);
sidebarNavigationList.appendChild(homeworkClickMeButton);

// "SLIDER" homework's button, link

const homeworkSliderButton = document.createElement('li');
homeworkSliderButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkSliderLink = document.createElement('a');
homeworkSliderLink.className = 'sidebar__navigation-link';
homeworkSliderLink.innerHTML = 'Slider';
homeworkSliderLink.href = '#';
homeworkSliderButton.appendChild(homeworkSliderLink);
sidebarNavigationList.appendChild(homeworkSliderButton);

// "STUDENTS" homework's button, link

const homeworkStudentsButton = document.createElement('li');
homeworkStudentsButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkStudentsLink = document.createElement('a');
homeworkStudentsLink.className = 'sidebar__navigation-link';
homeworkStudentsLink.innerHTML = 'Students table';
homeworkStudentsLink.href = '#';
homeworkStudentsButton.appendChild(homeworkStudentsLink);
sidebarNavigationList.appendChild(homeworkStudentsButton);

// "PROGRESS BAR 1" homework's button, link

const homeworkProgressBar1Button = document.createElement('li');
homeworkProgressBar1Button.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkProgressBar1Link = document.createElement('a');
homeworkProgressBar1Link.className = 'sidebar__navigation-link';
homeworkProgressBar1Link.innerHTML = 'Progress bar 1';
homeworkProgressBar1Link.href = '#';
homeworkProgressBar1Button.appendChild(homeworkProgressBar1Link);
sidebarNavigationList.appendChild(homeworkProgressBar1Button);

// "PROGRESS BAR 2" homework's button, link

const homeworkProgressBar2Button = document.createElement('li');
homeworkProgressBar2Button.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkProgressBar2Link = document.createElement('a');
homeworkProgressBar2Link.className = 'sidebar__navigation-link';
homeworkProgressBar2Link.innerHTML = 'Progress bar 2';
homeworkProgressBar2Link.href = '#';
homeworkProgressBar2Button.appendChild(homeworkProgressBar2Link);
sidebarNavigationList.appendChild(homeworkProgressBar2Button);

// "GOOGLE MAP" homework's button, link

const homeworkMapButton = document.createElement('li');
homeworkMapButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkMapLink = document.createElement('a');
homeworkMapLink.className = 'sidebar__navigation-link';
homeworkMapLink.innerHTML = 'Map';
homeworkMapLink.href = '#';
homeworkMapButton.appendChild(homeworkMapLink);
sidebarNavigationList.insertBefore(homeworkMapButton, welcomePageButton);

// "JQUERY TABLE" homework's button, link

const homeworkJqueryTableButton = document.createElement('li');
homeworkJqueryTableButton.classList.add('sidebar__navigation-item', 'sidebar__navigation-item--hidden');

const homeworkJqueryTableLink = document.createElement('a');
homeworkJqueryTableLink.className = 'sidebar__navigation-link';
homeworkJqueryTableLink.innerHTML = 'jQuery table';
homeworkJqueryTableLink.href = '#';
homeworkJqueryTableLink.id = 'homeworkJqueryTableButton';
homeworkJqueryTableButton.appendChild(homeworkJqueryTableLink);
sidebarNavigationList.appendChild(homeworkJqueryTableButton);