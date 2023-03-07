// FEATHER ICONS
feather.replace();

// SIDEBAR FUNCTION
let menu = document.querySelector(".menu");
let sidebar = document.querySelector("#sidebar");

menu.onclick = function () {
  sidebar.classList.toggle("active");
};

// ISI SIDEBAR
let logOutButton = document.querySelector(".pil-sidebar a:nth-child(5)");
let logOutConfirm = document.querySelector("#isi-sidebar span");

logOutButton.onclick = function () {
  logOutConfirm.classList.toggle("active");
};
