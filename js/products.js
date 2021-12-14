import { productsUrl } from "./settings/api.js";
import { renderProducts } from "./components/product/renderProducts.js";
import { filterProducts } from "./components/product/filterProducts.js";
import navbar from "./components/common/navbar.js";
import displayMessage from "./components/common/displayMessage.js";

navbar();

(async function () {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderProducts(products);
    filterProducts(products);

    if (products.length === 0) {
      displayMessage("error", "no products available in the store", ".products-container");
    }
  } catch (error) {
    displayMessage("error", "an error occured when loading the products", ".products-container");
  }
})();
