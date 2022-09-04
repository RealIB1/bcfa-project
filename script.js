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


// Google Map Marker Api

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;