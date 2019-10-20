const menuBtn = document.querySelector(".hamburger");
const titleImg = document.querySelector(".title");
const menuSection = document.querySelector("#menu");
const formSection = document.querySelector("#form");
const detailsSection = document.querySelector("#details");

menuBtn.onclick = () => {
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

const detailsBtn = document.querySelector(".details-button");
const formBtn = document.querySelector(".form-button");

detailsBtn.onclick = () => {
  titleImg.classList.add("shrink");
  menuSection.classList.remove("visible");
  detailsSection.classList.add("visible");
};

formBtn.onclick = () => {
  titleImg.classList.add("shrink");
  menuSection.classList.remove("visible");
  formSection.classList.add("visible");
};

const form = document.querySelector("form");
const submit = document.querySelector('button[type="submit"]');

submit.onclick = e => {
  e.preventDefault();
  document.querySelector(".form-wrapper").style.display = "none";
  document.querySelector(".form-loading").style.display = "block";
  const data = new URLSearchParams(new FormData(form));
  setTimeout(() => {
    fetch(form.action, { body: data, method: "post" }).then(response => {
      if (!response.ok) {
        document.querySelector(".form-loading").style.display = "none";
        document.querySelector(".form-fail").style.display = "block";
      } else {
        document.querySelector(".form-loading").style.display = "none";
        document.querySelector(".form-success").style.display = "block";
      }
    });
  }, 5000);
};
