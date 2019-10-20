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
