import { openMenu, closeMenu } from "./toggling-menu.mjs";
openMenu();
closeMenu();

// javaScript for the Param
const formDetails = document.querySelector("#form-details");

const params = new URLSearchParams(window.location.search);
const userFirstName = params.get("first_name");

const userLastName = params.get("last_name");

const userEmail = params.get("email");

const userSubject = params.get("subject");

const userMessage = params.get("message");

formDetails.innerHTML = `
<div class="user-detail">
  <span>First Name</span>
  <b>${userFirstName}</b>
</div>

<div class="user-detail">
  <span>Last Name</span>
  <b>${userLastName}</b>
</div>

<div class="user-detail">
  <span>Email</span>
  <b>${userEmail}</b>
</div>

<div class="user-detail">
  <span>Subject</span>
  <b>${userSubject}</b>
</div>

<div class="user-detail">
  <span>Message</span>
  <b>${userMessage}</b>
</div>
`;