import navbar from "./components/common/navbar.js";
import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage/user.js";
import { createProduct } from "./components/product/createProduct.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

navbar();

const form = document.querySelector("#productForm");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const featuredToggle = document.querySelector("#featuredToggle");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();

  let featuredValue = false;

  if (featuredToggle.checked) {
    featuredValue = true;
  }

  if (titleValue.lenght === 0 || priceValue.lenght === 0 || isNaN(priceValue) || descriptionValue.lenght === 0 || imageValue.lenght === 0) {
    return displayMessage("warning", "please fill out all fields", ".message-container");
  }

  createProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue);
}
