'use strict';

let sidebar = document.getElementById('sidebar');

window.onscroll = function() {
    if (window.pageYOffset > 60) {
        sidebar.classList.add('sidebar--full-height');
    } else if (window.pageYOffset < 60) {
        sidebar.classList.remove('sidebar--full-height');
    }
};

let sidebarButton = document.getElementById('sidebar__button');
let mainContent = document.getElementById('main-content');
let footer = document.getElementById('footer');

sidebarButton.onclick = function () {
    if (sidebar.classList.contains('sidebar--hidden')){
        sidebar.classList.remove('sidebar--hidden');
        mainContent.classList.remove('main-content--sidebar-hidden');
        footer.classList.remove('footer--sidebar-hidden');
    } else {
        sidebar.classList.add('sidebar--hidden');
        mainContent.classList.add('main-content--sidebar-hidden');
        footer.classList.add('footer--sidebar-hidden');
    }
};