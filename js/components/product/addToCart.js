import { getExistingProducts, saveToCart } from "../../utils/storage.js";
import displayMessage from "../common/displayMessage.js";

export function handleAddToCart() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const image = this.dataset.image;

  const currentCart = getExistingProducts();

  const product = { id: id, title: title, price: price, image: image };

  currentCart.push(product);

  saveToCart(currentCart);

  displayMessage("success", "product added to the cart", ".message-container");
}
