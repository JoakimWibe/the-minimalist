import { saveToStorage } from "../storage/global.js";

const shoppingcart = "shoppingcart";

export function getExistingProducts() {
  const cart = localStorage.getItem(shoppingcart);

  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveToCart(cart) {
  saveToStorage(shoppingcart, cart);
}

export function clearCart() {
  const doRemoval = confirm("Are you sure you want to empty the cart?");

  if (doRemoval) {
    localStorage.removeItem("shoppingcart");
    location.href = "/cart.html";
  }
}
