Weather Search Engine Documentation

## Table of Contents
1.Introduction 
2.Project Structure
3.Dependencies
4.Installation
5.Usage
6.Configuration
7.Code Documentation
8.Authors


1. Introduction <a name="introduction"></a>

The Weather Search Engine is a web application that allows users to search for weather data for a specific city. It fetches weather information from a backend server and displays it in a user-friendly format on the website.

2. Project Structure <a name="project-structure"></a>

The project consists of two main parts:

Frontend: Contains HTML, CSS, and JavaScript files for the user interface. The primary JavaScript file, `index.js`, handles user interactions and data presentation.

Server(Backend): Manages requests to the OpenWeather API, caching weather data, and serving static frontend files.

3. Dependencies <a name="dependencies"></a>

Frontend Dependencies:

- Fetch API: Used for making HTTP requests to fetch weather data from the backend server.
- Google Fonts:
  - [Abel](https://fonts.google.com/css2?family=Abel&display=swap)
  - [Asap](https://fonts.google.com/css2?family=Asap:wght@500&display=swap)


Backend Dependencies:

- Express.js: A web application framework for Node.js.
- Axios: A promise-based HTTP client for making API requests.
- Path: A Node.js module for working with file and directory paths.

4. Installation <a name="installation"></a>

Frontend Installation:

To set up the frontend:

1. Clone the project repository from [GitHub](https://github.com/mukul1999v/weatherserchengine) or download the source code.

2. Open the project directory in your code editor.

Backend Installation:

To set up the backend server:

1. Clone the project repository from [GitHub](https://github.com/mukul1999v/weatherserchengine) or download the source code.

2. Open the project directory in your code editor.

3. Install the required backend dependencies using npm 

5. Usage <a name="usage"></a>

To use the Weather Search Engine:

Frontend:

Open the index.html file in a web browser.
Enter the name of the city you want to get weather information for in the input field.
Click the "Search" button.
The weather data for the specified city will be displayed on the page, including city name, description, temperature, humidity, pressure, and more.

Backend:

The backend server is responsible for fetching weather data from the OpenWeather API.
The server listens for requests on the /weather endpoint and responds with weather data.

6. Server Configuration <a name="server-configuration"></a>
To configure the backend server:

Replace 'YOUR_API_KEY' in server.js with your OpenWeather API key.

7. Code Documentation <a name="code-documentation"></a>

Frontend (index.js)
Variables: The JavaScript code in index.js handles user interactions and updates the HTML elements with weather data fetched from the server.


Backend (server.js)
Variables: The server code in server.js configures the Express.js server, defines routes, and caches weather data.
getWeatherData(cityName): Function to make requests to the OpenWeather API.
/weather Endpoint: Responds to requests for weather data, caching data, and removing old cache entries.


### Variables
- `cityNameInput`: Input element for entering the city name.
- `weatherDataContainer`: Container for displaying weather data.
- `cityElement`: Element to display the city name.
- `descriptionElement`: Element to display weather description.
- `temperatureElement`: Element to display temperature in Celsius.
- `humidityElement`: Element to display humidity percentage.
- `pressureElement`: Element to display atmospheric pressure in hPa.
- `minTempElement`: Element to display minimum temperature in Celsius.
- `maxTempElement`: Element to display maximum temperature in Celsius.
- `logoElement`: Element to display weather icon.
- `submitButton`: Button element for submitting the city name.

###Event Listener
- `submitButton.addEventListener`: Listens for a click event on the submit button, fetches weather data from the backend, and updates the HTML with the retrieved data.

### Fetching Data
- Uses the `fetch` API to request weather data from the backend.
- Updates the HTML elements with the retrieved data, including city name, description, temperature, humidity, pressure, and temperature range.
- Displays a weather icon corresponding to the current weather conditions.

8. Authors <a name="authors"></a>

- [Mukul Verma](https://github.com/mukul1999v) - Project Developer
