async function getWeather() {

    try {

        let response = await fetch("weather.json");

        if (!response.ok) {
            throw new Error("Weather data not found.");
        }

        let data = await response.json();

        data.forEach((weather) => {

            console.log("City:", weather.city);
            console.log("Temperature:", weather.temperature + "°C");
            console.log("Humidity:", weather.humidity + "%");
            console.log("Weather Condition:", weather.weatherCondition);

        });

    }
    catch (error) {

        console.log(error.message);

    }

}

getWeather();