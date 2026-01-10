// javaScript for Navigation Toggling
const navBar = document.querySelector("#nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const overLay = document.querySelector("#overlay");

function openMenu() {
  navBar.classList.add("show");
  overLay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  navBar.classList.remove("show");
  overLay.classList.remove("active");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);




// javaScript for the Companies Card
const cards = document.querySelector("#cards");

// Fetch the json Companies Data using async/await
const url = "../chamber/data/members.json";
const getCompaniesData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayData(data.companies);
  } catch (error) {
    console.error(error);
  }
};
getCompaniesData();

const displayData = (companies) => {
  companies.forEach((company) => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const firstParagraph = document.createElement("p");
    const secondParagraph = document.createElement("p");
    const websiteDetails = document.createElement("p");
    const website = document.createElement('a');


    img.setAttribute("src", `${company.image}`);
    img.setAttribute("alt", `${company.name} logo`);
    img.setAttribute("loading", 'lazy');
    img.width = 130;
    img.height = 100;

    firstParagraph.textContent = `${company.address}`;
    secondParagraph.textContent = `${company.phone}`;

    website.textContent = `Click Here For More Details`;
    website.setAttribute("href", `${company.website}`)
    website.setAttribute("target", `_blank`);

    section.appendChild(img);
    section.appendChild(firstParagraph);
    section.appendChild(secondParagraph);
    websiteDetails.appendChild(website);
    section.appendChild(websiteDetails)
    cards.appendChild(section);
  })
}