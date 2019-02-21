;'use strict';

let input = document.createElement('input');
input.className = 'autocomplete-input';
input.type = 'text';
input.placeholder = 'Find the place to see weather';
header.insertBefore(input, watches);

function activatePlacesSearch() {
    const options = {
        types: ['(cities)']
      };
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['geometry']);

    autocomplete.addListener('place_changed', () => {

        const placeResult = autocomplete.getPlace();
        const placeLatitude = placeResult.geometry.location.lat();
        const placeLongitude = placeResult.geometry.location.lng();
        const src = `https://api.darksky.net/forecast/fbed3d9d9b2aafcf2ca6f25a0287a580/${placeLatitude},${placeLongitude}?callback=onWeatherData`;

        function addScript(src) {
            
            const elem = document.createElement("script");
            elem.src = src;
            document.head.appendChild(elem);
        }

        addScript(src);
    });
}
// const options = {
        //     method: 'GET',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type':'application/x-www-form-urlencoded'
        //     }
        // }
        // fetch(`https://api.darksky.net/forecast/fbed3d9d9b2aafcf2ca6f25a0287a580/${placeLatitude},${placeLongitude}`, options)
        //     .then (response => {
        //         console.dir(response.json());
        //     })
        //     .catch (err => {
        //         console.log(err);
        //     });
