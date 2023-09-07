const cityNameInput = document.getElementById('input');
const weatherDataContainer = document.getElementById('temp_city');
const cityElement = document.getElementById('city');
const descriptionElement = document.getElementById('des');
const temperatureElement = document.getElementById('temp');
const humidityElement = document.getElementById('humidity');
const pressureElement = document.getElementById('pressure');
const minTempElement = document.getElementById('min_temp');
const maxTempElement = document.getElementById('max_temp');
const logoElement = document.getElementById('logo');
const submitButton = document.getElementById('btn');
 
submitButton.addEventListener('click', () => {
  const cityName = cityNameInput.value;
 
  // Fetch weather data from the backend
  fetch(`/weather?city=${cityName}`)
    .then((response) => response.json())
    .then((data) => {
      // Update the HTML with the weather data
      cityElement.textContent = data.name;
      descriptionElement.textContent = data.weather[0].description;
      temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
      minTempElement.textContent = `Min Temp: ${Math.round(data.main.temp_min - 273.15)}°C`;
      maxTempElement.textContent = `Max Temp: ${Math.round(data.main.temp_max - 273.15)}°C`;
 
      const iconCode = data.weather[0].icon;
      logoElement.src = `http://openweathermap.org/img/w/${iconCode}.png`;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error.message);
      weatherDataContainer.innerHTML = 'Error fetching weather data';
    });
});
 