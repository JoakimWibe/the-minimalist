export function getExistingProducts() {
  const cart = localStorage.getItem("shoppingcart");

  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveToCart(cart) {
  localStorage.setItem("shoppingcart", JSON.stringify(cart));
}

export function clearCart() {
  const doRemoval = confirm("Are you sure you want to empty the cart?");

  if (doRemoval) {
    localStorage.removeItem("shoppingcart");
    location.href = "/cart.html";
  }
}
