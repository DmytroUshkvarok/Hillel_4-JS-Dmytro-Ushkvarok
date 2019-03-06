function onWeatherData(data) {
    const dataFromServer = data;
    const weatherObject = {
        temperature: `${Math.round(dataFromServer.currently.temperature * 10) / 10}&#8451;`,
        humidity: `${Math.round(dataFromServer.currently.humidity * 100)}%`,
        precipitationProbability: `${Math.round(dataFromServer.currently.precipProbability * 100)}%`,
        precipitationType: `${dataFromServer.currently.precipType}`,
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
        windSpeed: `${Math.round(dataFromServer.currently.windSpeed * 10) / 10} m/s`
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

        const precipitationProbabilitySheet = document.getElementById('precipitationProbability');
        precipitationProbabilitySheet.innerHTML = `Precipitation probability: ${weatherObject.precipitationProbability}`;

        const precipitationTypeSheet = document.getElementById('precipitationType');
        if (weatherObject.precipitationProbability != `0%`) {
            precipitationTypeSheet.innerHTML = `Type: ${weatherObject.precipitationType}`;
        } else {
            precipitationTypeSheet.innerHTML = ` `;
        }

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

        const precipitationProbabilitySheet = document.createElement('span');
        precipitationProbabilitySheet.className = 'weather-sheet__item';
        precipitationProbabilitySheet.id = 'precipitationProbability';
        precipitationProbabilitySheet.innerHTML = `Precipitation probability: ${weatherObject.precipitationProbability}`;
        textData.appendChild(precipitationProbabilitySheet);

        const precipitationTypeSheet = document.createElement('span');
        precipitationTypeSheet.className = 'weather-sheet__item';
        precipitationTypeSheet.id = 'precipitationType';

        if (weatherObject.precipitationProbability != `0%`) {
            precipitationTypeSheet.innerHTML = `Type: ${weatherObject.precipitationType}`;
        } else {
            precipitationTypeSheet.innerHTML = ` `;
        }

        textData.appendChild(precipitationTypeSheet);
    }
}