let imageBaseUrl;
let posterImageUrl;

if (window.innerWidth < 600) {
  imageBaseUrl = "https://image.tmdb.org/t/p/w780";
  posterImageUrl = "https://image.tmdb.org/t/p/w92";
} else {
  imageBaseUrl = "https://image.tmdb.org/t/p/w1280";
  posterImageUrl = "https://image.tmdb.org/t/p/w185";
}

export function displayData(data) {
  const filteredImages = data.filter((filteredMovie) => {
    return filteredMovie.backdrop_path;
  });
  const slicedImage = filteredImages.slice(0, 6);
  const heroSlider = document.querySelector("#hero-slider");

  slicedImage.forEach((movie, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const backdropImg = document.createElement("img");
    backdropImg.setAttribute("src", `${imageBaseUrl}${movie.backdrop_path}`);
    backdropImg.setAttribute("alt", `${movie.title} Movie Image`);

    const slideContent = document.createElement("div");
    slideContent.classList.add("slide-content");

    const posterImage = document.createElement("img");
    posterImage.setAttribute("src", `${posterImageUrl}${movie.poster_path}`);
    posterImage.setAttribute("alt", `${movie.title} Thumbnail`);

    const textContainer = document.createElement("div");
    textContainer.classList.add("text");

    const headingText = document.createElement("h3");
    headingText.textContent = `${movie.title}`;

    const paragraphText = document.createElement("p");
    paragraphText.textContent = `${movie.overview.slice(0, 90)}.......`;

    const buttonTextContainer = document.createElement("div");
    buttonTextContainer.classList.add("text-buttons");

    const iconContainer = document.createElement("button");
    iconContainer.classList.add("arrow");

    const icon = document.createElement("img");
    icon.setAttribute("src", "images/play_arrow.svg");

    const spanButton = document.createElement("span");
    spanButton.textContent = "Watch Online";

    const infoButton = document.createElement("button");
    infoButton.textContent = "More Info";

    slide.classList.add("slide");
    if (index === 0) {
      slide.classList.add("active");
    }

    slide.appendChild(backdropImg);
    slideContent.appendChild(posterImage);
    textContainer.appendChild(headingText);
    textContainer.appendChild(paragraphText);
    iconContainer.appendChild(icon);
    iconContainer.appendChild(spanButton);
    buttonTextContainer.appendChild(iconContainer);
    buttonTextContainer.appendChild(infoButton);
    textContainer.appendChild(buttonTextContainer);
    slideContent.appendChild(textContainer);
    slide.appendChild(slideContent);

    heroSlider.appendChild(slide);
  });

  const eachImage = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    eachImage[current].classList.remove("active");
    current = (current + 1) % eachImage.length;
    eachImage[current].classList.add("active");
  }, 5000);
}

export function displayPopularMovie(movies) {
  let posterImageUrl;
  if (window.innerWidth < 600) {
    posterImageUrl = "https://image.tmdb.org/t/p/w154";
  } else {
    posterImageUrl = "https://image.tmdb.org/t/p/w154";
  }

  const slicedMovieLists = movies.slice(0, 20);
  const popularMovieList = document.querySelector("#movie-list");
  slicedMovieLists.forEach((movie) => {
    const movieCard = document.createElement("div");
    const movieTitle = document.createElement("span");
    const img = document.createElement("img");

    let movieText;
    if (movie.original_title.length > 17) {
      movieText = `${movie.original_title.slice(0, 17)}...`;
    } else {
      movieText = movie.original_title;
    }

    movieTitle.textContent = movieText;
    img.setAttribute("src", `${posterImageUrl}${movie.poster_path}`);
    img.setAttribute("alt", `${movie.original_title} Image`);
    img.setAttribute("loading", "lazy");

    movieCard.appendChild(img);
    movieCard.appendChild(movieTitle);
    popularMovieList.appendChild(movieCard);
  });
}

export function displayTopRated(movies) {
  let posterImageUrl;
  if (window.innerWidth < 600) {
    posterImageUrl = "https://image.tmdb.org/t/p/w185";
  } else {
    posterImageUrl = "https://image.tmdb.org/t/p/w185";
  }

  const filteredTopRated = movies.filter((topRated) => {
    return topRated.poster_path !== null;
  });

  const slicedTopRated = filteredTopRated.slice(0, 10);
  const topRatedContainer = document.querySelector("#top-rated");

  slicedTopRated.forEach((movie) => {
    const topRatedCard = document.createElement("div");
    const topRatedImg = document.createElement("img");
    const topRatedTitle = document.createElement("span");

    let topRatedText;
    if (movie.original_title.length > 17) {
      topRatedText = `${movie.original_title.slice(0, 20)}...`;
    } else {
      topRatedText = movie.original_title;
    }

    topRatedImg.setAttribute("src", `${posterImageUrl}${movie.poster_path}`);
    topRatedImg.setAttribute("alt", `${movie.original_title} Image`);
    topRatedImg.setAttribute("loading", "lazy");
    topRatedTitle.textContent = topRatedText;

    topRatedCard.appendChild(topRatedImg);
    topRatedCard.appendChild(topRatedTitle);
    topRatedContainer.appendChild(topRatedCard);
  });
}

export function displayUpcomingApi(movies) {
  let posterImageUrl;
  if (window.innerWidth < 600) {
    posterImageUrl = "https://image.tmdb.org/t/p/w154";
  } else {
    posterImageUrl = "https://image.tmdb.org/t/p/w154";
  }

  const slicedMovieLists = movies.slice(0, 20);
  const upcomingList = document.querySelector("#upcoming-list");
  slicedMovieLists.forEach((movie) => {
    const movieCard = document.createElement("div");
    const movieTitle = document.createElement("span");
    const img = document.createElement("img");

    let movieText;
    if (movie.original_title.length > 17) {
      movieText = `${movie.original_title.slice(0, 6)}...`;
    } else {
      movieText = movie.original_title;
    }

    movieTitle.textContent = movieText;
    img.setAttribute("src", `${posterImageUrl}${movie.poster_path}`);
    img.setAttribute("alt", `${movie.original_title} Image`);
    img.setAttribute("loading", "lazy");

    movieCard.appendChild(img);
    movieCard.appendChild(movieTitle);
    upcomingList.appendChild(movieCard);
  });
}