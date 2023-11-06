
//  Write JavaScript code here to fetch weather data - 
  //  from the API and update the HTML accordingly

//  API Link: You can use the OpenWeatherMap API
  //  (https://openweathermap.org/api) to get the weather data.

//  Key: 956aa1c0f75f03fe9fe51bf103e9102b



let weather = () => {
  let city = document.getElementById("city").value; // Get the user-entered city
    
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=956aa1c0f75f03fe9fe51bf103e9102b';

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extracting data properties
      const temperatureK = data.main.temp;
      const temperatureC = (temperatureK - 273.15).toFixed(2); // Convert to Celsius and round to two decimal places
      const feelsLikeK = data.main.feels_like;
      const feelsLikeC = (feelsLikeK - 273.15).toFixed(2); // Convert to Celsius and round to two decimal places
      const minTemperatureK = data.main.temp_min;
      const minTemperatureC = (minTemperatureK - 273.15).toFixed(2); // Convert to Celsius and round to two decimal places
      const maxTemperatureK = data.main.temp_max;
      const maxTemperatureC = (maxTemperatureK - 273.15).toFixed(2); // Convert to Celsius and round to two decimal places
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;
      const visibility = data.visibility;

      // Updating the HTML with the weather information in both Kelvin and Celsius
      document.getElementById("result").innerHTML =
        `Temperature: ${temperatureK} K (${temperatureC} °C) <br>` +
        `Feels Like: ${feelsLikeK} K (${feelsLikeC} °C) <br>` +
        `Min Temperature: ${minTemperatureK} K (${minTemperatureC} °C) <br>` +
        `Max Temperature: ${maxTemperatureK} K (${maxTemperatureC} °C) <br>` +
        `Pressure: ${pressure} hPa <br>` +
        `Humidity: ${humidity}% <br>` +
        `Visibility: ${visibility} meters`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};
