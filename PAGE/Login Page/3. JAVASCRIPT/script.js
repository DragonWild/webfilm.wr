// FEATHER ICONS
feather.replace();

// CHECKBOX PASSWORD FUNCTION
let checkboxPassword = document.getElementById("iconCP");
let passwordUser = document.getElementById("passwordUser");

function clickPassword() {
  checkboxPassword.classList.toggle("fa-eye-slash");

  if (passwordUser.type === "password") {
    passwordUser.type = "text";
  } else {
    passwordUser.type = "password";
  }
}

// CHECKBOX PASSWORD CADANGAN FUNCTION
let checkboxPasswordCadangan = document.getElementById("iconCPCadangan");
passwordUserCadangan = document.getElementById("password-user-cadangan");

function clickPasswordCadangan() {
  checkboxPasswordCadangan.classList.toggle("fa-eye-slash");

  if (passwordUserCadangan.type === "password") {
    passwordUserCadangan.type = "text";
  } else {
    passwordUserCadangan.type = "password";
  }
}

// CHECKBOX REMEMBER ME FUNCTION
let inputRM = document.getElementById("dataCheckboxUtama");
let RMLatar = document.getElementById("checkboxRMLatar");

function latarRM() {
  if (inputRM.checked === true) {
    RMLatar.style.backgroundColor = "#026d66";
  } else if (inputRM.checked === false) {
    RMLatar.style.backgroundColor = "#000";
  }
}

// BUTTON MASUK FUNCTION
function hrefMasuk() {
  location.href = "/PAGE/Home Page/1. HTML/index.html";
}

// BUTTON TRANSITION TO CADANGAN FUNCTION
let cadanganTransition = document.querySelectorAll("body #cadanganTransition");
contentLoginCadangan = document.getElementById("contentLoginCadangan");

function transitionCadangan() {
  if (contentLoginCadangan.style.visibility === "hidden") {
    contentLoginCadangan.style.visibility = "visible";
  } else {
    contentLoginCadangan.style.visibility = "hidden";
  }
}
