const menu = document.querySelector("#icon");
const nav = document.querySelector("ul");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("active");
}
