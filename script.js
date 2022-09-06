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


const contents = document.querySelectorAll(".contents");
const imgs = document.querySelectorAll(".showcase");
const paragraphs = document.querySelectorAll(".para");
const heads = document.querySelectorAll(".head");

window.addEventListener(
  "scroll",
  contentAnimate,
  imageAnimate,
  paragraphAnimate,
  headAnimate
);



function contentAnimate() {
  
  const triggerAnimate = (window.innerHeight / 6) * 8;

  contents.forEach((content) => {
    const contentAnim = content.getBoundingClientRect().top;

    if (contentAnim < triggerAnimate) {
        content.classList.add("content");
      } else {
        content.classList.remove("content");
      }
  });
}

function imageAnimate() {

  const triggerAnimate = (window.innerHeight / 5) * 4 ;
  // console.log(triggerAnimate);

  imgs.forEach((img) => {
    const imgsAnim = img.getBoundingClientRect().top;

    if (imgsAnim < triggerAnimate) {
        img.classList.add("showcases");
      } else {
        img.classList.remove("showcases");
      }
  });
}



function paragraphAnimate() {
  
  const triggerAnimate = (window.innerHeight / 5 )* 4;

  paragraphs.forEach((paras) => {
    const paraAnim = paras.getBoundingClientRect().top;

    if (paraAnim >= triggerAnimate) {
        paras.classList.add("paras");
      } else {
        paras.classList.remove("paras");
      }
  });
}
function headAnimate() {
  const triggerAnimate = (window.innerHeight / 5) * 4;

  heads.forEach((head) => {
    const headAnim = head.getBoundingClientRect().top;

    if (headAnim >= triggerAnimate) {
        head.classList.add("heads");
      } else {
        head.classList.remove("heads");
      }
  });
}



// Google map marker
let mapDiv;

const initMap = () => {
	mapDiv = document.getElementById('map-canvas');
  
  let map = new google.maps.Map(mapDiv, {
  	center: new google.maps.LatLng(6.712249, -1.522364),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}] // "Subtle Grayscale" style found on snazzymaps.com

	}); 
  let markerCoords = [[53.34449219138831, -6.259396073702419],[53.344480982391076, -6.259465811136806],[53.34444735538164, -6.2594094847474935],[53.344410525769426, -6.259548959616268],[53.34435127806566, -6.2594336246286275],[53.34435287935604, -6.259296831968868],[53.33792161237211, -6.260584292296016]];
  let markers = [];
  let marker;
  for (let i = 0, len = markerCoords.length; i < len; i++){
    marker = new google.maps.Marker({position: new google.maps.LatLng(markerCoords[i][0], markerCoords[i][1])});
    markers.push(marker);
  }
  const markerCluster = new MarkerClusterer(map, markers,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}



//google.maps.event.addDomListener(window, 'load', initialize);