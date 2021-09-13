const $ = document.querySelector.bind(document);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regInput = $(".reg__input");
const regBtn = $(".reg__btn");
const errorText = $(".error__text");
const errorIcon = $(".error__icon");

regBtn.onclick = () => {
  if (!emailRegex.test(regInput.value)) {
    errorText.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  }
};
