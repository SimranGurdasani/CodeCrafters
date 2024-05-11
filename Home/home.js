const signUpContent = document.querySelector(".sign-up-content");
const loginContent = document.querySelector(".login-content");
const login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up");

login.addEventListener("click", () => {
  loginContent.classList.remove("d-none");
  signUpContent.classList.add("d-none");
});
signUp.addEventListener("click", () => {
  signUpContent.classList.remove("d-none");
  loginContent.classList.add("d-none");
  
});