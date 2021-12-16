import { getExistingProducts, saveToCart } from "../../utils/storage/shoppingCart.js";

export function removeFromCart() {
  const shoppingCart = getExistingProducts();
  const doRemoval = confirm("are you sure you want to remove this product from your cart?");

  if (doRemoval) {
    const id = this.dataset.id;

    const productExists = shoppingCart.find(function (product) {
      return product.id === id;
    });

    if (productExists) {
      const newCart = shoppingCart.filter((product) => product.id !== id);
      saveToCart(newCart);
      document.location = "/cart.html";
    }
  }
}
