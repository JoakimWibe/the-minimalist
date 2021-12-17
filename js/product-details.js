import { productsUrl } from "./settings/api.js";
import { handleAddToCart } from "./components/cart/addToCart.js";
import navbar from "./components/common/navbar.js";
import { getEmail } from "./utils/storage/user.js";
import displayMessage from "./components/common/displayMessage.js";

navbar();

const productContainer = document.querySelector(".product-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = productsUrl + "/" + id;

(async function fetchProduct() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    createHTML(product);
  } catch (error) {
    displayMessage("error", "an error occured", ".product-container");
  }
})();

function createHTML(product) {
  document.title = product.title;

  productContainer.innerHTML = "";

  productContainer.innerHTML += `<img src="${product.image_url}">                               
                                 <div class="details">
                                    <h1>${product.title}</h1>
                                    <hr>
                                    <h2>${product.price} kr</h2>
                                    <p>${product.description}</p>
                                    <div class="buttons"> 
                                        <button class="btn-primary" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image_url}">Add to cart <i class="fas fa-cart-plus"></i></button>
                                        <a class="btn-primary" id="edit-btn" href="edit-product.html?id=${product.id}">Edit product</a>
                                    </div>
                                    <div class="message-container"></div>
                                 </div>`;

  const addToCartBtn = document.querySelector("button");

  addToCartBtn.addEventListener("click", handleAddToCart);

  const editBtn = document.querySelector("#edit-btn");
  const email = getEmail();

  if (!email) {
    editBtn.style.display = "none";
  }
}
