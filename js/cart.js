import navbar from "./components/common/navbar.js";
import { getExistingProducts, clearCart } from "./utils/storage/shoppingCart.js";
import { removeFromCart } from "./components/cart/removeFromCart.js";
import displayMessage from "./components/common/displayMessage.js";

navbar();

const shoppingCart = getExistingProducts();
const cartContainer = document.querySelector(".cart-container");
const totalPrice = document.querySelector(".total-container");
const clearCartBtn = document.querySelector("#clearCartBtn");

let total = 0;

shoppingCart.forEach((product) => {
  const price = product.price;

  const integer = parseInt(price, 10);

  total += integer;

  cartContainer.innerHTML += `<div class="product">                            
                                    <img src="${product.image}" alt="${product.altText}" />
                                    <div class="details">
                                      <h2 class="title">${product.title}</h2>
                                      <p class="price">kr ${product.price}</p>
                                      <div class="buttons">
                                        <a class="btn-primary" href="product-details.html?id=${product.id}">Show product</a>
                                        <i data-id="${product.id}" id="trashBtn" class="fas fa-trash"></i>
                                      </div>
                                    </div>  
                              </div>`;

  totalPrice.innerHTML = `<p>Total: kr ${total}</p>`;
});

clearCartBtn.addEventListener("click", clearCart);

if (shoppingCart.length < 1) {
  displayMessage("warning", "Your shopping cart is empty", ".cart-container");
  clearCartBtn.style.display = "none";
}

const trashBtn = document.querySelectorAll("#trashBtn");

trashBtn.forEach((btn) => {
  btn.addEventListener("click", removeFromCart);
});
