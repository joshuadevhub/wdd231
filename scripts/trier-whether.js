const currentTemp = document.querySelector("#current-temp");
const whetherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=0a2d342572fc7a9b609e7bd50e04c020";

const apiFetch = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    // console.log(data);
    displayResult(data);
  } catch (error) {
    console.error("Error Fetching Data:", error.message);
  }
};

function displayResult(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  whetherIcon.setAttribute("src", iconSrc);
  whetherIcon.setAttribute("alt", `Germany`);
  captionDesc.textContent = data.weather[0].description
}

apiFetch();
