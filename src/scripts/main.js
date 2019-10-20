const button = document.querySelector("button");
const img = document.querySelector("img");
const menu = document.querySelector("#form");

button.onclick = () => {
  button.classList.toggle("is-active");
  img.classList.toggle("shrink");
  menu.classList.toggle("visible");
};

const form = document.querySelector("form");
const submit = document.querySelector('button[type="submit"]');

submit.onclick = e => {
  e.preventDefault();
  const data = new URLSearchParams(new FormData(form));
  fetch(form.action, { body: data, method: "post" });
};
