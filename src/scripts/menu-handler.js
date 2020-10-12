const menuBtn = document.querySelector(".hamburger");
const detailsBtn = document.querySelector(".details-button");
const formBtn = document.querySelector(".form-button");

const titleImg = document.querySelector(".title");
const menuSection = document.querySelector("#menu");
const formSection = document.querySelector("#form");
const detailsSection = document.querySelector("#details");

const toggleMenu = () => {
  if (menuBtn.classList.contains("is-active")) {
    menuBtn.classList.remove("is-active");
    titleImg.classList.remove("shrink");
    menuSection.classList.remove("visible");
    formSection.classList.remove("visible");
    detailsSection.classList.remove("visible");
  } else {
    menuBtn.classList.add("is-active");
    menuSection.classList.add("visible");
  }
};

const showDetails = () => {
  titleImg.classList.add("shrink");
  menuSection.classList.remove("visible");
  detailsSection.classList.add("visible");
};

const showForm = () => {
  titleImg.classList.add("shrink");
  menuSection.classList.remove("visible");
  formSection.classList.add("visible");
};

export default () => {
  menuBtn.onclick = toggleMenu;
  detailsBtn.onclick = showDetails;
  formBtn.onclick = showForm;
};
