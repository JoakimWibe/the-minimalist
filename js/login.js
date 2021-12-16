import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage/user.js";
import { validateEmail, checkLenght } from "./components/common/formValidation.js";
import navbar from "./components/common/navbar.js";
import displayMessage from "./components/common/displayMessage.js";

const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

navbar();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLenght(password.value, 4) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  doLogin(emailValue, passwordValue);
}

async function doLogin(email, password) {
  const url = baseUrl + "/auth/local";

  const data = JSON.stringify({ identifier: email, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/";
    }

    if (!json.user) {
      displayMessage("warning", "Wrong email/password", ".message-container");
    }
  } catch (error) {
    displayMessage("error", "an error occured", ".message-container");
  }
}
