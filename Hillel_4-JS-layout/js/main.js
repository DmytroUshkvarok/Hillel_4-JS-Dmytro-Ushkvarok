'use strict';

let headerNavigationToggle;
let headerNavigationItems;
let sidebar;
let sidebarButton;
let sidebarNavigationToggle;
let sidebarNavigationItems;
let sidebarNavigationList;
let dataContent;

headerNavigationToggle = document.getElementById('header__navigation-toggle');
headerNavigationItems = document.getElementsByClassName('header__navigation-item');
headerNavigationToggle.onclick = function () {
    controlActiveStateOfElement.call(headerNavigationToggle, 'header__navigation-toggle');
    controlStateOfBlock.call(headerNavigationItems, 'header__navigation-item');
};

sidebarNavigationToggle = document.getElementById('sidebar__navigation-toggle');
sidebarNavigationItems = document.getElementsByClassName('sidebar__navigation-item');
sidebarNavigationToggle.onclick = function () {
    controlActiveStateOfElement.call(sidebarNavigationToggle, 'sidebar__navigation-toggle');
    controlStateOfBlock.call(sidebarNavigationItems, 'sidebar__navigation-item');
};

sidebar = document.getElementById('sidebar');
sidebarButton = document.getElementById('sidebar__button');
sidebarButton.onclick = function () {
    controlHiddenStateOfElement.call(sidebar, 'sidebar');
};

dataContent = document.getElementsByClassName('main-content__page');
sidebarNavigationList = document.getElementById('sidebar__navigation-list');
sidebarNavigationList.addEventListener('click', controlOfContentShowingState);

window.addEventListener('resize', controlOfStatesOfAllChangingElements);
window.onload = controlOfStatesOfAllChangingElements();

function controlActiveStateOfElement(className) {
    this.classList.toggle(`${className}--active`);
}

function controlHiddenStateOfElement(className) {
    this.classList.toggle(`${className}--hidden`);
}

function controlStateOfBlock(className) {
    let i;
    for (i = 0; i < this.length; i++) {
        this[i].classList.toggle(`${className}--hidden`);
    }
}

function controlOfContentShowingState() {
    if (window.innerWidth < 768 && event.target.id !== 'sidebar__navigation-toggle') {
        showHideContent();
        sidebarNavigationToggle.classList.remove('sidebar__navigation-toggle--active');
        for (let i = 0; i < sidebarNavigationItems.length; i++) {
            sidebarNavigationItems[i].classList.toggle('sidebar__navigation-item--hidden');
        }
    } else if (window.innerWidth >= 768) {
        showHideContent();
    }
}

function showHideContent(element) {
    element = event.target;
    for (let i = 0; i < dataContent.length; i++) {
        dataContent[i].classList.add('main-content__page--unactive');
    }
    document.getElementById(element.dataset.targetElement).classList.remove('main-content__page--unactive');
}

function controlOfStatesOfAllChangingElements() {
    controlStateOfElementDependingOnViewportWidth.call(headerNavigationToggle, 'header__navigation-toggle');
    controlStateOfElementDependingOnViewportWidth.call(sidebarNavigationToggle, 'sidebar__navigation-toggle');
    controlStateOfBlockDependingOnViewportWidth.call(headerNavigationItems, 'header__navigation-item');
    controlStateOfBlockDependingOnViewportWidth.call(sidebarNavigationItems, 'sidebar__navigation-item');
    controlStateOfElementDependingOnIntervalOfViewportWidth.call(sidebar, 'sidebar');
}

function controlStateOfElementDependingOnIntervalOfViewportWidth(className) {
    if (window.innerWidth < 980 && window.innerWidth > 767) {
        this.classList.add(`${className}--hidden`);
    } else {
        this.classList.remove(`${className}--hidden`);
    }
}

function controlStateOfElementDependingOnViewportWidth(className) {
    if (window.innerWidth > 767) {
        this.classList.add(`${className}--hidden`);
    } else {
        this.classList.remove(`${className}--hidden`);
    }
}
function controlStateOfBlockDependingOnViewportWidth(className) {
    if (window.innerWidth > 767) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.remove(`${className}--hidden`);
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(`${className}--hidden`);
        }
    }
}