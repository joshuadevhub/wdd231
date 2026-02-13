import { openMenu, closeMenu } from "./toggling-menu.mjs";

openMenu()
closeMenu();

// javaScript for the movie api
const API_KEY = "17096e0526025f2f60420f52cc014cb8";
const baseUrl = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w342";


const fetchMovie = async () => {
  try {
    const response = await fetch(`${baseUrl}/discover/movie?api_key=${API_KEY}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    // console.log(data.results);
    displayMovies(data.results);
  } catch (error) {
    console.log(error.message);
  }
};

function displayMovies(movies) {
  const movieContainer = document.querySelector("#movie-container");
  movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <img src="${imgUrl}${movie.poster_path}" alt="${movie.original_title} Image" loading="lazy" class="image"></img>
    <p class="movie-name">${movie.original_title}</p>
    <div class="rating filter-header">
      <span id="movie-year">${movie.release_date.split("-")[0]}</span>

      <div class="filter-header">
        <img src="images/rating-star.svg" alt="Rating Icon" loading="lazy">
        <span id="movie-rating">${movie.vote_average.toFixed(1)}</span>
      </div>

    </div>
    `;
    movieContainer.appendChild(card);

    card.addEventListener("click", () => {
      window.location.href = `movie-details.html?id=${movie.id}`
    });
  })
}
fetchMovie();

// javaScript For the Dropdown Menu
const genreFilter = document.getElementById("genre-filter");
const sortFilter = document.getElementById("sort-filter");
const yearDropdown = document.getElementById("year-filter");

genreFilter.addEventListener("change", getMovies);
sortFilter.addEventListener("change", getMovies);
yearDropdown.addEventListener("change", getMovies);

async function getMovies() {
  // get the current selected value
  const genreFilterValue = genreFilter.value;
  const sortFilterValue = sortFilter.value;
  const yearDropdownValue = yearDropdown.value;

  // Start building the url
  let url =
    "https://api.themoviedb.org/3/discover/movie?api_key=17096e0526025f2f60420f52cc014cb8";
  
  // Add genre, sort and release date
  if (genreFilterValue !== "") {
    url += `&with_genres=${genreFilterValue}`;
  }
  url += `&sort_by=${sortFilterValue}`;

  if (yearDropdownValue !== "") {
    url += `&primary_release_year=${yearDropdownValue}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    // console.log(data.results);
    displayMovies(data.results);
  } catch (error) {
    console.log("Error Fetching Data:", error.message);
  }
}