// Wait until the HTML document is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
  /* ================================ NAVIGATION MENU ================================ */
  const hamburgerBtn = document.querySelector("#nav-button-menu");
  const closeNavBtn = document.querySelector("#nav-button-close");
  const mainNav = document.querySelector("#nav-bar");
  const bodyOverlay = document.getElementById("overlay");

  // Function to open the navigation menu
  function openMenu() {
    mainNav.classList.add("active");
    bodyOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Function to close the navigation menu
  function closeMenu() {
    mainNav.classList.remove("active");
    bodyOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Event listeners for opening and closing the menu
  hamburgerBtn.addEventListener("click", openMenu);
  closeNavBtn.addEventListener("click", closeMenu);

  /* ================================ COURSE DATA ================================ */

  // Array containing all course objects
  const courses = [
    {
      subject: "CSE",
      number: 110,
      title: "Introduction to Programming",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
      technology: ["Python"],
      completed: true,
    },
    {
      subject: "WDD",
      number: 130,
      title: "Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
      technology: ["HTML", "CSS"],
      completed: true,
    },
    {
      subject: "CSE",
      number: 111,
      title: "Programming with Functions",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
      technology: ["Python"],
      completed: false,
    },
    {
      subject: "CSE",
      number: 210,
      title: "Programming with Classes",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
      technology: ["C#"],
      completed: false,
    },
    {
      subject: "WDD",
      number: 131,
      title: "Dynamic Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: true,
    },
    {
      subject: "WDD",
      number: 231,
      title: "Frontend Web Development I",
      credits: 2,
      certificate: "Web and Computer Programming",
      description:
        "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: false,
    },
  ];

  /* ================================ COURSE CARD DISPLAY FUNCTION ================================ */

  // Display all courses by default
  createCourseCard(courses);

  // Function to create and display course cards
  function createCourseCard(filteredCourseCards) {
    const courseListContainer = document.querySelector(".courseList");
    courseListContainer.innerHTML = "";

    // Loop through each course and create a card
    filteredCourseCards.forEach((filteredCourseCard) => {
      let courseCard = document.createElement("div");
      courseCard.classList.add("course");

      let courseCodeName = document.createElement("p");

      courseCodeName.textContent = `${filteredCourseCard.subject}${filteredCourseCard.number}`;

      courseCard.appendChild(courseCodeName);
      courseListContainer.appendChild(courseCard);

      if (filteredCourseCard.completed === true) {
        courseCard.style.backgroundColor = "#1a365d";
        courseCard.style.border = "5px solid #1a365d";
        courseCodeName.style.color = "#f8f9fa";
      }
    });
  }

  /* ================================ ALL COURSES BUTTON ================================ */
  let allBtn = document.querySelector("#allBtn");
  allBtn.addEventListener("click", () => {
    // Display all courses
    createCourseCard(courses);

    // Calculate total credits for all courses
    let totalCredit = courses.reduce((total, current) => {
      return total + current.credits;
    }, 0);

    let allTotalCredit = document.querySelector(".credit-total");
    allTotalCredit.textContent = `The total number of course listed below is ${totalCredit}`;
  });

  /* ================================ CSE COURSES BUTTON ================================ */
  let cseBtn = document.querySelector("#cseBtn");

  // Filter only CSE courses
  let cse = courses.filter((course) => {
    return course.subject === "CSE";
  });

  cseBtn.addEventListener("click", () => {
    // Display CSE courses
    createCourseCard(cse);

    let totalCredit = courses.reduce((total, current) => {
      if (current.subject === "CSE") {
        return total + current.credits;
      }
      return total;
    }, 0);
    let cseTotalCredit = document.querySelector(".credit-total");
    cseTotalCredit.textContent = `The total number of course listed below is ${totalCredit}`;
  });

  /* ================================ WDD COURSES BUTTON ================================ */
  let wddBtn = document.querySelector("#wddBtn");
  let wdd = courses.filter((course) => {
    return course.subject === "WDD";
  });

  wddBtn.addEventListener("click", () => {
    createCourseCard(wdd);
    let totalCredit = courses.reduce((total, current) => {
      if (current.subject === "WDD") {
        return total + current.credits;
      }
      return total;
    }, 0);

    let wddTotalCredit = document.querySelector(".credit-total");
    wddTotalCredit.textContent = `The total number of course listed below is ${totalCredit}`;
  });

  /* ================================ javaScript Footer ================================ */
  let yearElement = document.getElementById("year-element");
  const date = new Date();
  const year = date.getFullYear();

  yearElement.textContent = `\u00A9 ${year}`;

  const lastModified = document.getElementById("last-modified");
  lastModified.textContent = document.lastModified;
});
