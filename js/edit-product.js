import navbar from "./components/common/navbar.js";
import { productsUrl } from "./settings/api.js";
import { getToken } from "./utils/storage/user.js";
import displayMessage from "./components/common/displayMessage.js";
import updateProduct from "./components/product/updateProduct.js";
import deleteProduct from "./components/product/deleteProduct.js";

const token = getToken();

if (!token) {
  location.href = "/";
}

navbar();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = productsUrl + "/" + id;

if (!id) {
  document.location.href = "/";
}

const form = document.querySelector("#editForm");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const altText = document.querySelector("#altText");
const featuredToggle = document.querySelector("#featuredToggle");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    image.value = details.image_url;
    altText.value = details.alt_text;
    idInput.value = details.id;

    if (details.featured === true) {
      featuredToggle.checked = true;
    }

    deleteProduct(details.id);
  } catch (err) {
    console.error(err);
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();
  const altTextValue = altText.value.trim();
  const idValue = parseFloat(idInput.value);

  let featuredValue = null;

  if (featuredToggle.checked) {
    featuredValue = true;
  } else {
    featuredValue = false;
  }

  if (
    titleValue.lenght === 0 ||
    priceValue.lenght === 0 ||
    isNaN(priceValue) ||
    descriptionValue.lenght === 0 ||
    imageValue.lenght === 0 ||
    altTextValue.lenght === 0
  ) {
    return displayMessage("warning", "please fill out all fields", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, imageValue, altTextValue, featuredValue, idValue);
}
