import navbar from "./components/common/navbar.js";
import { getExistingProducts } from "./utils/storage.js";
import displayMessage from "./components/common/displayMessage.js";

navbar();

const shoppingCart = getExistingProducts();

const cartContainer = document.querySelector(".cart-container");

const totalPrice = document.querySelector(".total-container");

let total = 0;

shoppingCart.forEach((product) => {
  const price = product.price;

  const integer = parseInt(price, 10);

  total += integer;

  cartContainer.innerHTML += `<div class="product">                            
                                    <img src="${product.image}" />
                                    <div class="details">
                                      <h2>${product.title}</h2>
                                      <p>kr ${product.price}</p>
                                      <a class="btn-primary" href="product-details.html?id=${product.id}">Show product</a>
                                    </div>
                              </div>`;

  totalPrice.innerHTML = `<p>Total: kr ${total}</p>`;
});

if (shoppingCart.length < 1) {
  displayMessage("warning", "Your shopping cart is empty", ".cart-container");
}
