const barMenu = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  navLink = document.querySelectorAll(".nav-link"),
  main = document.querySelector(".main"),
  toTop = document.getElementById("back-to-top");

const openNav = () => {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
};

const closeNav = () => {
  barMenu.classList.remove("active");
  navMenu.classList.remove("active");
};

window.addEventListener("click", (e) => {
  if (e.target === main || e.target === toTop) {
    barMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

barMenu.addEventListener("click", openNav);
navLink.forEach((n) => n.addEventListener("click", closeNav));
