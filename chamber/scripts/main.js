// javaScript For the Current Weather
const currentTemp = document.querySelector("#temp");
const currentDesc = document.querySelector("#desc");
const currentHighTemp = document.querySelector("#high");
const currentLowTemp = document.querySelector("#low");
const currentHumidity = document.querySelector("#humidity");
const currentSunrise = document.querySelector("#sunrise");
const currentSunset = document.querySelector("#sunset");
const weatherIcon = document.querySelector("#weather-icon");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.65&lon=3.27&units=metric&appid=0a2d342572fc7a9b609e7bd50e04c020";

const getCurrentWeather = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    // console.log(data);
    displayData(data);
  } catch (error) {
    console.error("Error Fetching Data:", error.message);
  }
};

function displayData(data) {

  // Populate HTML tag
  currentTemp.innerHTML = `<b>${data.main.temp}&deg;C</b>`;
  currentDesc.textContent = `${data.weather[0].description}`;
  currentHighTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
  currentLowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`;
  currentHumidity.textContent = `Humidity: ${data.main.humidity}%`;

  // javaScript For The Weather Icon
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", `${iconSrc}`);
  weatherIcon.setAttribute("alt", `${data.main.description} Image`);

  // JavaScript For the Sunrise and Sunset
  const sunrise = new Date(data.sys.sunrise * 1000);
  const sunset = new Date(data.sys.sunset * 1000);

  const options = {
    hour: "2-digit",
    minute: "2-digit"
  };

  const sunriseTime = sunrise.toLocaleTimeString([], options);
  const sunsetTime = sunset.toLocaleTimeString([], options);

  currentSunrise.textContent = `Sunrise: ${sunriseTime}`
  currentSunset.textContent = `Sunset: ${sunsetTime}`;

}

// javaScript For The Weather Forecast
const foreCastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=6.65&lon=3.27&units=metric&appid=0a2d342572fc7a9b609e7bd50e04c020";

const getThreeDayForecast = async () => {
  try {
    const response = await fetch(foreCastUrl);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    displayForeCast(data);
  } catch (error) {
    console.log("Error Fetching Data:", error.message);
  }
}

// Function to get 3-day forecast
function displayForeCast(data) {
  // Group forecast by date
  const dailyForecast = {};

  // Get date only
  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }
    dailyForecast[date].push(item);
  });

  // Get Today + 2 Days
  const allDates = Object.keys(dailyForecast);
  const nextThreeDays = allDates.slice(0, 3);

  // Display in HTML
  const foreCastContainer = document.getElementById("forecast-days");
  foreCastContainer.innerHTML = '';

  nextThreeDays.forEach((date) => {
    // Pick Midday Forecast if Available
    const noonForeCast =
      dailyForecast[date].find((i) => {
        return i.dt_txt.includes("12:00:00");
      }) || dailyForecast[date][0];

    const temperature = noonForeCast.main.temp;

    // Convert Date to Day Name
    const dayName = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Create a paragraph element to show day and temp
    const dayElement = document.createElement("p");
    dayElement.innerHTML = `${dayName}: <b>${temperature}&deg;C</b>`;

    foreCastContainer.appendChild(dayElement);
  })
}

getCurrentWeather();
getThreeDayForecast();