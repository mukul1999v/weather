const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 as a default

// Replace 'YOUR_API_KEY' with your OpenWeather API key
const apiKey = 'd7ed544cb380e99eec9211c10aea6efc';

// Serve static files from a directory
app.use(express.static(path.join(__dirname, 'public')));

// Cache object to store weather data
const weatherCache = {};

// Define the OpenWeather API URL function
function getWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  return axios.get(apiUrl);
}

// Create an endpoint to fetch weather data
app.get('/weather', async (req, res) => {
  try {
    const cityName = req.query.city || 'Mathura'; // Default city is Mathura

    // Check if the data for this city is in the cache
    if (weatherCache[cityName]) {
      const cachedData = weatherCache[cityName];
      console.log(`Using cached data for ${cityName}`);
      res.json(cachedData);
    } else {
      const response = await getWeatherData(cityName);
      const weatherData = response.data;

      // Store the data in the cache
      weatherCache[cityName] = weatherData;

      // Remove the oldest cache entry if there are more than 5 entries
      const cities = Object.keys(weatherCache);
      if (cities.length > 5) {
        const oldestCity = cities[0];
        delete weatherCache[oldestCity];
        console.log(`Removed cached data for ${oldestCity}`);
      }

      res.json(weatherData);
    }
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Could not fetch weather data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
