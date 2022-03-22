var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSussess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "not empty!");
    } else {
      showSussess(input);
    }
    return isEmptyError;
  });
}

function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSussess(input);
  } else {
    showError(input, "not email pattern");
  }
  return isEmailError;
}

function checkLenghtError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.lenght < min) {
    console.log(min);
    showError(input, `need to have less than ${min} character`);
    return true;
  }
  if (input.value.lenght > max) {
    showError(input, `not allow geater  than ${max} character`);
    return true;
  }
  return false;
}

function checkMathPasswordError(passwordInput, cfPasswordInput) {
  if (passwordInput.value.trim() !== cfPasswordInput.value.trim()) {
    showError(cfPasswordInput, "need to match with password input");
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmail(email);
  let isUsernameLeghtError = checkLenghtError(username, 1, 8);
  let isPasswordLeghtError = checkLenghtError(password, 8, 20);
  let isMatchError = checkMathPasswordError(password, confirmPassword);
  if (
    isEmailError ||
    isEmptyError | isPasswordLeghtError ||
    isUsernameLeghtError ||
    isMatchError
  ) {
    //do nothing
  } else {
    //logic, call api
  }
});
