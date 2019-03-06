;'use strict';

window.addEventListener('load', () => {

    const storage = window.localStorage;
    const storageCity = storage.getItem('city');
    const storageLatitude = storage.getItem('latitude');
    const storageLongitude = storage.getItem('longitude');

    if (storageCity && storageLatitude && storageLongitude) {
        
        const cityInput = document.getElementById('autocomplete-input');
        cityInput.value = storageCity;

        const src = `https://api.darksky.net/forecast/fbed3d9d9b2aafcf2ca6f25a0287a580/` +
            `${storageLatitude},${storageLongitude}?callback=onWeatherData&` +
            `exclude=minutely,hourly,daily,alerts,flags&units=si`;

        function addScript(src) {
            
            const elem = document.createElement("script");
            elem.src = src;
            document.head.appendChild(elem);
        }

        addScript(src);
    }
});