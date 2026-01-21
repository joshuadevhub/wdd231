# WDD231 – Web Frontend Development

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Exploring Web Frontend Development at **BYU Pathway & BYU–Idaho**, focused on **HTML, CSS, and JavaScript**. Emphasis on **UX, accessibility, performance, compliance**, and basic API integration.

---

## Table of Contents

- [Home Page Project](#home-page-project)
- [Latter-day Prophets Project](#latter-day-prophets-project)
- [Chamber of Commerce Directory Project](#chamber-of-commerce-directory-project)
- [Author](#author)

---

## Home Page Project

<details>
<summary>Click to expand Home Page details</summary>

**Description:**  
The **home page** for WDD231 demonstrates a **mobile-first layout** with responsive enhancements for larger screens. Includes header, navigation, content sections, and footer, with interactivity via JavaScript.

**Features:**

- Mobile-first HTML & CSS
- Separate CSS files for mobile (`small.css`) and desktop (`large.css`)
- Header with site logo, title, and hamburger menu
- Sliding side navigation with overlay & current-page indicator
- Content sections: About Me, Student Photo, Web Certificate Courses
- JavaScript course filtering
- Responsive design for desktop & larger screens
- Optimized images
- Accessibility-conscious structure
- Footer with dynamic content & interactions

**File Structure:**

/wdd231
index.html
/styles
normalize.css
small.css
large.css
/images
/scripts
main.js

**How to Run:**

1. Clone the repository.
2. Open `index.html` in a browser.
3. Ensure `/styles`, `/images`, and `/scripts` folders remain with `index.html`.

**Status:**

- HTML: Complete
- CSS: Complete (mobile + desktop)
- JS: Complete (navigation toggle, course filtering, footer interactions)
- Images: Optimized
- Accessibility: Basic best practices

**Future Improvements:**

- Enhanced accessibility (ARIA roles, keyboard navigation)
- Optional animations/transitions

</details>

---

## Latter-day Prophets Project

<details>
<summary>Click to expand Latter-day Prophets details</summary>

**Description:**  
Displays **Latter-day Prophets** dynamically using JSON. Each prophet has a card with full name & portrait. Responsive CSS layout for clean design.

**Features:**

- Fetch API to retrieve data
- Dynamic card creation
- Responsive grid layout
- Clean CSS styling

**File Structure:**
/wdd231
prophets.html
/styles
prophets.css
/scripts
prophets.js
README.md

**JSON Data Source:**  
[Prophets JSON]("https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json")

**How to Run:**

1. Open `prophets.html` in a browser.
2. Data loads automatically via Fetch API.
3. CSS handles layout, JS handles dynamic cards.

</details>

---

## Chamber of Commerce Directory Project

<details>
<summary>Click to expand Chamber of Commerce details</summary>

**Description:**  
A **directory page** for a Chamber of Commerce. Built for mobile & desktop. Fetches data from `members.json` and displays members. Future feature: toggle between **grid and list views**.

**Features:**

- Mobile-first & responsive design
- Fetch member data dynamically from JSON
- Clear information hierarchy
- Files organized for maintainability:
  - `directory.html` → main page
  - `styles/directory.css` → styling
  - `scripts/directory.js` → functionality
  - `data/members.json` → JSON source
  - `images/` → member images
  - **Added List View Toggle:** Implemented a button to switch between grid and list view for better content display options
  - **Page Content Refresh:** Enabled automatic refresh of page content to ensure the latest data is displayed

**File Structure:**

/wdd231
/chamber
directory.html
/styles
directory.css
/scripts
directory.js
/data
members.json
/images
(member images)

**How to Run:**

1. Clone the `wdd231` repository.
2. Open `chamber/directory.html` in a browser.
3. Keep `/styles`, `/scripts`, `/data`, `/images` inside the `chamber` folder.

**Future Improvements:**

- **Accessibility Improvements:** Continued work on accessibility features to enhance usability, focus states, and keyboard navigation support.
- Optional animations/transitions

</details>

---

## Trier Weather Forecast

<details> 
<summary>Click to expand Trier Weather Forecast</summary>

**Description:**  
A simple web page that dynamically displays the current weather conditions in Trier, Germany using the OpenWeatherMap API. This project follows a **mobile-first approach** in its CSS design, ensuring a responsive layout that scales elegantly to larger screens.

### Features

- Displays the current temperature in Trier, Germany.
- Shows a weather icon and description for the current conditions.
- Mobile-first responsive design with additional styles for larger screens.
- Uses **async/await** for clean and modern JavaScript API calls.
- Error handling for API requests.

### Technologies Used

- **HTML5** – Semantic structure of the page.  
- **CSS3** – Mobile-first responsive design.  
- **JavaScript (ES6+)** – Fetches weather data and updates the DOM dynamically.  
- **OpenWeatherMap API** – Provides real-time weather data.

### File Structure

/wdd231
├── trier-weather.html
├── styles/
│ └── trier-weather.css
└── scripts/
  └── trier-weather.js

### Usage

1. Clone or download this repository.
2. Open `trier-weather.html` in your preferred browser.
3. The page dynamically fetches current weather data for Trier, Germany using the OpenWeatherMap API.  
   *(Ensure you have a valid API key configured in your JavaScript file — the key itself is not included for security.)*
4. The current temperature, weather icon, and description will appear dynamically on the page.

### License

This project is licensed under **CC BY-SA 4.0**.

</details>


## Author

**Elemide Joshua Damilare** | Nigeria
```
