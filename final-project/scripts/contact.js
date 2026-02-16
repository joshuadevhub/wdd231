import { openMenu, closeMenu } from "./toggling-menu.mjs";
openMenu();
closeMenu();



// javaScript for the form Validation
const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkValidation()) {
    form.submit();
  }
});

[firstName, lastName, email, subject, message].forEach((input) => {
  if(input) input.addEventListener("input", checkValidation);
});

function checkValidation() {
  let isValid = true;

  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const subjectValue = subject.value;
  const messageValue = message.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z'-]{4,8}$/

  if (firstNameValue === "") {
    setInputFor(firstName);
    isValid = false;
  } else if (!nameRegex.test(firstNameValue)) {
    setErrorFor(firstName, "Only letters allowed (4-8 characters)");
    isValid = false;
  }else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setInputFor(lastName);
    isValid = false;
  } else if (!nameRegex.test(lastNameValue)) {
    setErrorFor(lastName, "Only letters allowed (4-8 characters)");
    isValid = false;
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setInputFor(email);
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, "Email is not valid!");
    isValid = false;
  }else {
    setSuccessFor(email);
  }

  if (subjectValue === "") {
    setInputFor(subject);
    isValid = false;
  } else {
    setSuccessFor(subject);
  }

  if (messageValue === "") {
    setInputFor(message);
    isValid = false;
  } else {
    setSuccessFor(message);
  }
  return isValid;
}


// function submitForm() {
//   checkValidation();

//   const firstNameValue = firstName.value;
//   const lastNameValue = lastName.value;
//   const emailValue = email.value;
//   const subjectValue = subject.value;
//   const messageValue = message.value;

//   if (firstNameValue === "") {
//     setErrorFor(firstName, "This field cannot be empty!");
//   } else {
//     setSuccessFor(firstName);
//   }

//   if (lastNameValue === "") {
//     setErrorFor(lastName, "This field cannot be empty!");
//   } else {
//     setSuccessFor(lastName);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "This field cannot be empty!");
//   } else {
//     setSuccessFor(email);
//   }

//   if (subjectValue === "") {
//     setErrorFor(subject, "This field cannot be empty!");
//   } else {
//     setSuccessFor(subject);
//   }

//   if (messageValue === "") {
//     setErrorFor(message, "This field cannot be empty!");
//   } else {
//     setSuccessFor(message);
//   }
// }

function setInputFor(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = '';

  formControl.classList.remove("error");
  formControl.classList.remove("success");
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = message;

  formControl.classList.add("error");
  formControl.classList.remove("success");
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = '';
  formControl.classList.add("success");
  formControl.classList.remove("error");
}