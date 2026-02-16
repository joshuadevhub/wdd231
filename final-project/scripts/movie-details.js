import { openMenu, closeMenu } from "./toggling-menu.mjs";

openMenu();
closeMenu();

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");
// console.log(movieId);

fetchMovieDetails(movieId);

async function fetchMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=17096e0526025f2f60420f52cc014cb8`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    // console.log(data);
    displayMovie(data);
  } catch (error) {
    console.log(error.message);
  }
}

function displayMovie(movies) {
  let mobileHeroBanner = "https://image.tmdb.org/t/p/w300";
  let desktopHeroBanner = "https://image.tmdb.org/t/p/w1280";

  // javaScript for the Hero Banner
  const heroBanner = document.querySelector("#movie-hero");
  if (window.innerWidth < 600) {
    heroBanner.setAttribute("src", `${mobileHeroBanner}${movies.backdrop_path}`);
    heroBanner.setAttribute("alt", `${movies.original_title} Image`);
    heroBanner.setAttribute("loading", "lazy");
  } else {
    heroBanner.setAttribute("src", `${desktopHeroBanner}${movies.backdrop_path}`);
    heroBanner.setAttribute("alt", `${movies.original_title} Image`);
    heroBanner.setAttribute("loading", "lazy");
  }

  const movieInfo = document.querySelector("#movie-info");
  movieInfo.classList.add("movie-info");

  // Convert the runtime minutes to hour and change the date format
  const runtime = movies.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = (runtime % 60);

  const releaseDate = movies.release_date;
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  // Get the movie Genre
  const names = movies.genres.map((person) => {
    return person.name;
  });
  const joinedName = names.join(", ");

  movieInfo.innerHTML = `
  <h1>${movies.original_title}</h1>
          
  <div class="meta-data">

    <div class="rating filter-header">
      <div class="filter-rating">
        <img src="images/rating-star.svg" alt="Rating Icon">
        <span id="movie-rating">${movies.vote_average}</span>
      </div>
      <span class="duration">${hours}h ${minutes}m</span>
      <time id="movie-year">${movies.release_date.split("-")[0]}</time>
    </div>

    <div class="release-date synopsis">
      <h2>Release Date</h2>
      <span>${formattedDate}</span>
    </div>
    <span class="genres">${joinedName}</span>

  </div>

  <div class="synopsis">
    <h2>Synopsis</h2>
    <p>${movies.overview}</p>
  </div>

  <div class="crew">
    <h2>Director & Cast</h2>

    <div class="crew-images">
      <img src="images/cast1.webp" alt="Cast-1">
      <img src="images/cast2.webp" alt="Cast -2">
      <img src="images/cast3.webp" alt="Cast -3">
      <img src="images/cast4.webp" alt="Cast -4">
    </div>
  </div>

  <div class="actions">
    <button class="button-trailer" type="button">Watch Trailer</button>
    <button class="button-list" type="button">Add to List</button>
  </div>
  `;
}

// javaScript for the related Movies

async function fetchRelatedMovies() {
  let relatedUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=17096e0526025f2f60420f52cc014cb8`;
  try {
    const response = await fetch(relatedUrl);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const data = await response.json();
    console.log(data);
    displayRelatedMovies(data.results);
  } catch (error) {
    console.log("Failed Fetching Data:", error.message)
  }
}

function displayRelatedMovies(movies) {
  let mobileHeroBanner = "https://image.tmdb.org/t/p/w154";

  const relatedMoviesContainer = document.querySelector("#related-movies");
  relatedMoviesContainer.innerHTML = '';

  movies.forEach((movie) => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("span");

    img.setAttribute("src", `${mobileHeroBanner}${movie.poster_path}`);
    img.setAttribute("alt", `${movie.original_title} Image`);
    img.setAttribute("loading", "lazy");

    let titleText;
    if (movie.original_title.length > 25) {
      titleText = `${movie.original_title.slice(0, 22)}....`;
    } else {
      titleText = movie.original_title;
    }
    title.textContent = titleText;

    card.appendChild(img);
    card.appendChild(title);
    relatedMoviesContainer.appendChild(card);
  })
}
fetchRelatedMovies();