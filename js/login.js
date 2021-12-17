import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage/user.js";
import navbar from "./components/common/navbar.js";
import displayMessage from "./components/common/displayMessage.js";

const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

navbar();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue.length > 0 && passwordValue.length > 0) {
    doLogin(emailValue, passwordValue);
  } else {
    displayMessage("warning", "please fill out valid values in both fields", ".message-container");
  }
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
