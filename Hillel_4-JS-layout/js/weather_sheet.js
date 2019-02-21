function onWeatherData(data) {
    const dataFromServer = data;
    const weatherObject = {
        temperature: `${Math.round((dataFromServer.currently.temperature - 32) * 5 / 9 * 10) / 10} &#8451;`,
        humidity: `${Math.round(dataFromServer.currently.humidity * 100)} %`,
        icon: dataFromServer.currently.icon,
        summary: dataFromServer.currently.summary,
        windIndex: Math.round((dataFromServer.currently.windBearing) / 45),
        windDirection() {
            return (this.windIndex == 0)
                ? 'N'
                : (this.windIndex == 1)
                    ? 'NE'
                    : (this.windIndex == 2)
                        ? 'E'
                        : (this.windIndex == 3)
                            ? 'SE'
                            : (this.windIndex == 4)
                                ? 'S'
                                : (this.windIndex == 5)
                                    ? 'SW'
                                    : (this.windIndex == 6)
                                        ? 'W'
                                        : (this.windIndex == 7)
                                            ? 'NW'
                                            : (this.windIndex == 8)
                                                ? 'N'
                                                : ' ';
        },
        windSpeed: `${Math.round(dataFromServer.currently.windSpeed * 4.47) / 10} m/s`
    };
    
    if (document.getElementsByClassName('weather-sheet').length > 0) {

        const img = document.getElementById('weather-img');
        img.src = `https://darksky.net/images/weather-icons/${weatherObject.icon}.png`;
        img.alt = `${weatherObject.icon}`;
        img.title = `${weatherObject.summary}`;

        const temperatureSheet = document.getElementById('temperature');
        temperatureSheet.innerHTML = `Temperature: ${weatherObject.temperature}`;

        const humiditySheet = document.getElementById('humidity');
        humiditySheet.innerHTML = `Humidity: ${weatherObject.humidity}`;

        const windSheet = document.getElementById('wind');
        windSheet.innerHTML = `Wind: ${weatherObject.windDirection()} ${weatherObject.windSpeed}`;

    } else {

        const weatherSheet = document.createElement('div');
        weatherSheet.className = 'weather-sheet';
        header.insertBefore(weatherSheet, watches);

        const img = document.createElement('img');
        img.className = 'weather-sheet__img';
        img.id = 'weather-img';
        img.src = `https://darksky.net/images/weather-icons/${weatherObject.icon}.png`;
        img.alt = `${weatherObject.icon}`;
        img.title = `${weatherObject.summary}`;
        weatherSheet.appendChild(img);

        const textData = document.createElement('div');
        textData.className = 'weather-sheet__data';
        weatherSheet.appendChild(textData);

        const temperatureSheet = document.createElement('span');
        temperatureSheet.className = 'weather-sheet__item';
        temperatureSheet.id = 'temperature';
        temperatureSheet.innerHTML = `Temperature: ${weatherObject.temperature}`;
        textData.appendChild(temperatureSheet);

        const humiditySheet = document.createElement('span');
        humiditySheet.className = 'weather-sheet__item';
        humiditySheet.id = 'humidity';
        humiditySheet.innerHTML = `Humidity: ${weatherObject.humidity}`;
        textData.appendChild(humiditySheet);

        const windSheet = document.createElement('span');
        windSheet.className = 'weather-sheet__item';
        windSheet.id = 'wind';
        windSheet.innerHTML = `Wind: ${weatherObject.windDirection()} ${weatherObject.windSpeed}`;
        textData.appendChild(windSheet);
    }
}