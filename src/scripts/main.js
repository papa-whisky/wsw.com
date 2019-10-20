const button = document.querySelector("button");
const img = document.querySelector("img");
const menu = document.querySelector("#menu");

button.onclick = () => {
  button.classList.toggle("is-active");
  // img.classList.toggle("shrink");
  menu.classList.toggle("visible");
};
