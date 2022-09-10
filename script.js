const barMenu = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  navLink = document.querySelectorAll(".nav-link"),
  main = document.querySelector(".main"),
  toTop = document.getElementById("back-to-top"),
  bars = document.querySelector(".open-close")

const openNav = () => {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  bars.innerHTML = `<i class="fas fa-times"></i>`;

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


// Theme Toggle

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (currentTheme) {
  document.documentElement.setAttribute("color-scheme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("color-scheme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("color-scheme", "light");
      localStorage.setItem("theme", "light");
    }
  }

toggleSwitch.addEventListener("change", switchTheme, false);

