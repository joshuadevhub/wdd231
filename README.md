# wdd231
Exploring Web Frontend Development at BYU Pathway &amp; BYU–Idaho. Focused on HTML, CSS, and JavaScript with emphasis on user experience, accessibility, compliance, performance optimization, and basic API integration, preparing for advanced web application development.

# WDD231 | Web Frontend Development – Home Page
This project is the home page for the WDD231 Web Frontend Development course. 
It showcases a mobile-first layout, header with navigation, content sections, and footer. 
HTML and CSS are implemented, with a larger CSS file prepared for future responsive enhancements.

## Features
- Mobile-first HTML and CSS structure
- Separate CSS files for mobile and future larger screen styles
- Header with site logo, name, and hamburger menu
- Sliding side navigation menu with overlay and clear wayfinding (current-page indicator)
- Sections: About Me, Student Photo, Web Certificate Courses
- JavaScript filtering of courses  
- Responsive design for larger screens  
- Optimized images for faster performance  
- Accessibility-conscious structure (readable contrast, logical hierarchy)
- Footer with dynamic content, interactions and dynamic copyright

## File Structure
/index.html
/styles/
  normalize.css
  small.css
  large.css
/images/
/scripts/main.js


---

### **Step 5: How to View / Run**
- Simple instructions for someone to open your project locally.

```markdown
## How to Run
1. Clone the repository:
2. Open `index.html` in a browser.
3. Ensure `/styles` and `/images` folders are in the same directory as `index.html`.


## Project Status
- **HTML:** Complete  
- **CSS:** Complete (including responsive larger screen design)  
- **JavaScript:** Complete (navigation toggle, course filtering, footer interactions)  
- **Images:** Optimized for performance  
- **Accessibility:** Implemented basic best practices 

## Future Improvements
- Additional accessibility enhancements (ARIA roles, keyboard navigation refinements)  
- Optional animations or transitions for enhanced UX 




# Latter-day Prophets Project

## Overview
This project dynamically displays a list of Latter-day Prophets using data fetched from a JSON resource. Each prophet is represented with a card that includes their full name and portrait. The page is styled using CSS for a clean, responsive layout.

## Files
- **prophets.html** – The main HTML page containing the structure of the site.
- **prophets.css** – Stylesheet for page layout, card design, and responsive formatting.
- **prophets.js** – JavaScript file that fetches JSON data and dynamically generates prophet cards.
- **README.md** – This file.

## Features
- Fetches prophet data asynchronously using the modern Fetch API.
- Displays data dynamically in individual cards with headings and portraits.
- Responsive grid layout that adapts to different screen sizes.
- Clean and consistent styling using CSS variables and external stylesheet.

## JSON Data Source
Data for the prophets is retrieved from the following URL:  
[https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json](https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json)

## Usage
1. Open `prophets.html` in a browser.
2. The page will fetch and display the prophets automatically.
3. Styling and layout are handled in `prophets.css`, and behavior is handled in `prophets.js`.


## Author
Elemide Joshua Damilare | Nigeria