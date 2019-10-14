const button = document.querySelector("button");
const img = document.querySelector("img");

button.onclick = () => {
  button.classList.toggle("is-active");
  img.classList.toggle("shrink");
};
