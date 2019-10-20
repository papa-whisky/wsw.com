const submitBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");
const formWrapper = document.querySelector(".form-wrapper");
const formLoading = document.querySelector(".form-loading");
const formFail = document.querySelector(".form-fail");
const formSuccess = document.querySelector(".form-success");

const hide = el => (el.style.display = "none");
const show = el => (el.style.display = "block");

const postData = data => {
  fetch(form.action, { body: data, method: "post" }).then(response => {
    hide(formLoading);
    response.ok ? show(formSuccess) : show(formFail);
  });
};

const submitForm = e => {
  const formData = new URLSearchParams(new FormData(form));

  e.preventDefault();
  hide(formWrapper);
  show(formLoading);

  postData(formData);
};

export default () => {
  submitBtn.onclick = submitForm;
};
