// FEATHER ICONS
feather.replace();

// SIDEBAR FUNCTION
let menu = document.querySelector(".menu");
let sidebar = document.querySelector("#sidebar");

menu.onclick = function () {
  sidebar.classList.toggle("active");
};

// // TOP MOVIES FUNCTION
// let posterFilm = document.querySelector(".top-movies .poster-film");
// // MEMUNCULKAN FUNCTION
// let posterFilmMandiri = document.querySelector(".top-movies .poster-film img");

// function hoverTopMovies() {
//   let elemenHover;
//   let isiElemenHover;
//   for (let i = 1; i <= 10; i++) {
//     elemenHover = document.createElement("a");
//     if (i == 1) {
//       isiElemenHover = document.createTextNode("THE BATMAN");
//     } else if (i == 2) {
//       isiElemenHover = document.createTextNode("TOP GUN");
//     } else if (i == 3) {
//       isiElemenHover = document.createTextNode("AVATAR: THE WAY OF WATER");
//     } else if (i == 4) {
//       isiElemenHover = document.createTextNode("AMBULANCE");
//     } else if (i == 5) {
//       isiElemenHover = document.createTextNode("PENGABDI SETAN 2");
//     } else if (i == 6) {
//       isiElemenHover = document.createTextNode(
//         "BLACK PANTHER: WAKANDA FOREVER"
//       );
//     } else if (i == 7) {
//       isiElemenHover = document.createTextNode("INTERSTELLAR");
//     } else if (i == 8) {
//       isiElemenHover = document.createTextNode("INCEPTION");
//     } else if (i == 9) {
//       isiElemenHover = document.createTextNode("JOKER");
//     } else {
//       isiElemenHover = document.createTextNode("THE DARK KNIGHT");
//     }

//     elemenHover.appendChild(isiElemenHover);
//     posterFilm.appendChild(elemenHover);
//   }
// }

// posterFilmMandiri.addEventListener(
//   "mouseenter",
//   () => (posterFilmMandiri.innerHTML = hoverTopMovies())
// );

// MENGHILANGKAN FUNCTION
let hoverTM;
function hapusHoverTM() {
  for (let i = 1; i <= 10; i++) {
    hoverTM = posterFilm.querySelector("a");
    posterFilm.removeChild(hoverTM);
  }
}

posterFilmMandiri.addEventListener(
  "mouseleave",
  () => (posterFilmMandiri.innerHTML = hapusHoverTM())
);

// // SEARCH BUTTON FUNCTION

// let header = document.getElementById("#header");
// let searchButton = header.querySelector("section.header-kanan input");
// let searchIcon = header.querySelector("section.header-kanan i");
