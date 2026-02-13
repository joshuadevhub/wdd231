// javaScript For The Toggling Menu
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const sideBar = document.querySelector("#side-bar");
const overlay = document.querySelector(".overlay");


export function openMenu() {
  sideBar.classList.add("active");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

export function closeMenu() {
  sideBar.classList.remove("active");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

// call the open and close function
menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
