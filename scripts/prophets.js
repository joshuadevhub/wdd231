const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const getProphetsData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
  } catch (error) {
    console.error(error);
  }
};
getProphetsData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Card build goes here
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");

    const birthDate = document.createElement("p");
    birthDate.classList.add("birth");

    const birthPlace = document.createElement("P");
    birthPlace.classList.add("birth");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", `${prophet.imageurl}`);
    portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname} photo`);
    portrait.setAttribute("loading", "lazy");
    portrait.width = 240;
    portrait.height = 300;

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};
