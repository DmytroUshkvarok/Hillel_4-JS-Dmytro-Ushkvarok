;'use strict';

const input = document.createElement('input');
input.className = 'autocomplete-input';
input.id = 'autocomplete-input';
input.type = 'text';
input.placeholder = 'Find the place to see weather';
header.insertBefore(input, watches);

const storage = window.localStorage;

function activatePlacesSearch() {

    const options = {
        types: ['(cities)']
      };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['geometry']);

    google.maps.event.addDomListener(window, "load", initializeMap);

    autocomplete.addListener('place_changed', () => {

        const placeResult = autocomplete.getPlace();
        const placeLatitude = placeResult.geometry.location.lat();
        const placeLongitude = placeResult.geometry.location.lng();
        const src = `https://api.darksky.net/forecast/fbed3d9d9b2aafcf2ca6f25a0287a580/` +
            `${placeLatitude},${placeLongitude}?callback=onWeatherData&` +
            `exclude=minutely,hourly,daily,alerts,flags&units=si`;

        function addScript(src) {
            
            const elem = document.createElement("script");
            elem.src = src;
            document.head.appendChild(elem);
        }

        addScript(src);
        
        initializeMap(placeLatitude, placeLongitude);

        storage.setItem('city', `${input.value}`);
        storage.setItem('latitude', `${placeLatitude}`);
        storage.setItem('longitude', `${placeLongitude}`);
    });
}