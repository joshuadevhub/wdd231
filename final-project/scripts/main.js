import { getMovies } from "./movies.mjs";
import { displayData, displayPopularMovie, displayTopRated, displayUpcomingApi } from "./display.mjs";
import { openMenu, closeMenu } from "./toggling-menu.mjs";

// javaScript For the Toggling Menu
openMenu()
closeMenu();


// ===== Dialog (Once per Day) =====
const overlay = document.querySelector(".overlay");
const dialog = document.getElementById("dialog");
const closeDialog = document.getElementById("dialog-close");
window.addEventListener("load", () => {
  let lastVisit = Number(localStorage.getItem("dialogLastShown"));
  const now = Date.now();

  if (!lastVisit || now - lastVisit > 24 * 60 * 60 * 1000) {
    dialog.showModal();
    overlay.classList.add("show");
    localStorage.setItem("dialogLastShown", now);
  }
});
closeDialog.addEventListener("click", () => {
  dialog.close();
  overlay.classList.remove("show");
});


// javaScript for the Section of the Home Page
const url =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=17096e0526025f2f60420f52cc014cb8";

const popularMovieApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=17096e0526025f2f60420f52cc014cb8";

const topRatedApi =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=17096e0526025f2f60420f52cc014cb8";

const upcomingApi =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=17096e0526025f2f60420f52cc014cb8";

const heroSlider = document.querySelector("#hero-slider");
const popularMovieList = document.querySelector("#movie-list");
const topRatedContainer = document.querySelector("#top-rated");
const upcomingList = document.querySelector("#upcoming-list");


const loadMovies = async (url, containerId, displayFunction) => {
  const movies = await getMovies(url);
  displayFunction(movies, containerId);
}

const init = async () => {
  await loadMovies(url, heroSlider, displayData);
  await loadMovies(popularMovieApi, popularMovieList, displayPopularMovie);
  await loadMovies(topRatedApi, topRatedContainer, displayTopRated);
  await loadMovies(upcomingApi, upcomingList, displayUpcomingApi);
}

init()