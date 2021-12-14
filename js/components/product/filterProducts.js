import { renderProducts } from "./renderProducts.js";
import displayMessage from "../common/displayMessage.js";

export function filterProducts(products) {
  const productFilter = document.querySelector(".product-filter");

  productFilter.onkeyup = function (event) {
    const inputValue = event.target.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (product.title.toLowerCase().includes(inputValue) || product.description.toLowerCase().includes(inputValue)) {
        return true;
      }
    });

    renderProducts(filteredProducts);

    if (filteredProducts.length === 0) {
      displayMessage("warning", "No results", ".products-container");
    }
  };
}
