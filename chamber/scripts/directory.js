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
    section.classList.add("section")
    const img = document.createElement("img");
    img.classList.add("img")
    const companyName = document.createElement("p");
    const firstParagraph = document.createElement("p");
    firstParagraph.classList.add("hidden");
    const secondParagraph = document.createElement("p");
    const websiteDetails = document.createElement("p");
    const website = document.createElement("a");

    img.setAttribute("src", `${company.image}`);
    img.setAttribute("alt", `${company.name} logo`);
    img.setAttribute("loading", "lazy");
    img.width = 130;
    img.height = 100;

    companyName.textContent = `${company.name}`;

    firstParagraph.textContent = `${company.address}`;
    secondParagraph.textContent = `${company.phone}`;

    website.textContent = `Click Here For More Details`;
    website.setAttribute("href", `${company.website}`);
    website.setAttribute("target", `_blank`);
    website.setAttribute("rel", "noopener noreferrer");

    section.appendChild(img);
    section.appendChild(companyName);
    section.appendChild(firstParagraph);
    section.appendChild(secondParagraph);
    websiteDetails.appendChild(website);
    section.appendChild(websiteDetails);
    cards.appendChild(section);
  });
};