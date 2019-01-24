;'use strict';

window.addEventListener('resize', controlOfStatesOfAllChangingElements);
window.onload = controlOfStatesOfAllChangingElements();

function controlActiveStateOfElement(className) {
    this.classList.toggle(`${className}--active`);
}

function controlStateOfBlock(className) {
    let i;
    for (i = 0; i < this.length; i++) {
        this[i].classList.toggle(`${className}--hidden`);
    }
}

function controlOfStatesOfAllChangingElements() {
    controlStateOfElementDependingOnViewportWidth.call(headerNavigationToggle, 'header__navigation-toggle');
    controlStateOfBlockDependingOnViewportWidth.call(headerNavigationItems, 'header__navigation-item');
    controlStateOfElementDependingOnViewportWidth.call(sidebarNavigationToggle, 'sidebar__navigation-toggle');
    controlStateOfBlockDependingOnViewportWidth.call(sidebarNavigationItems, 'sidebar__navigation-item');
    controlStateOfElementDependingOnIntervalOfViewportWidth.call(sidebar, 'sidebar');
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

//  Functions

function controlHiddenStateOfElement(className) {
    this.classList.toggle(`${className}--hidden`);
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

function controlOfContentShowingState() {
    if (window.innerWidth < 768 && event.target !== sidebarNavigationToggle) {
        showHideContent();
        sidebarNavigationToggle.classList.remove('sidebar__navigation-toggle--active');
        for (let i = 0; i < sidebarNavigationItems.length; i++) {
            sidebarNavigationItems[i].classList.toggle('sidebar__navigation-item--hidden');
        }
    } else if (window.innerWidth >= 768) {
        showHideContent();
    }
}
