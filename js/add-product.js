import navbar from "./components/common/navbar.js";
import displayMessage from "./components/common/displayMessage.js";
import { createProduct } from "./components/product/createProduct.js";

navbar();

const form = document.querySelector("#productForm");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

let featuredValue = false;

const featuredToggle = document.querySelector("#featuredToggle");

featuredToggle.addEventListener("click", toggleFeatured);

function toggleFeatured() {
  this.classList.toggle("far");
  this.classList.toggle("fas");

  if (this.classList.contains("fas")) {
    featuredValue = true;
  } else {
    featuredValue = false;
  }
}

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value;

  if (titleValue.lenght === 0 || priceValue.lenght === 0 || isNaN(priceValue) || descriptionValue.lenght === 0 || imageValue.lenght === 0) {
    return displayMessage("warning", "please add valid values", ".message-container");
  }

  createProduct(titleValue, priceValue, descriptionValue, imageValue, featuredValue);
}
