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
  const triggerAnimate = (window.innerHeight / 5) * 4;
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
  const triggerAnimate = (window.innerHeight / 5) * 4;

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
