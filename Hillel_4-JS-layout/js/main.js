;'use strict';

const mainContent = document.createElement('main');
mainContent.className = 'main-content';
mainContent.id = 'main-content';
globalWrapper.appendChild(mainContent);

function renderMapPage() {

    const mapPage = document.createElement('div');
    mapPage.className = 'main-content__page';

    const map = document.createElement('div');
    map.id = 'map';
    mapPage.appendChild(map);

    mainContent.appendChild(mapPage);

    homeworkMapButton.addEventListener('click', () => {
        mainContent.replaceChild(mapPage, mainContent.firstChild);
    });    
}

document.addEventListener('DOMContentLoaded', renderMapPage);

function initializeMap(lat, lng) {

    const storage = window.localStorage;
    const storageLatitude = storage.getItem('latitude');
    const storageLongitude = storage.getItem('longitude');    
    const latitude = +lat || +storageLatitude || 48.4625044;
    const longitude = +lng || +storageLongitude || 35.0463367;

    const myOptions = {
        zoom: 11,
        center: {lat: latitude, lng: longitude}
    };
    const map = new google.maps.Map(document.getElementById("map"), myOptions);
}