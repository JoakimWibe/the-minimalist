import navbar from "./components/common/navbar.js";
import { productsUrl, heroUrl } from "./settings/api.js";
import { renderFeaturedProducts } from "./components/product/renderFeaturedProducts.js";
import { renderHero } from "./components/product/renderHero.js";
import displayMessage from "./components/common/displayMessage.js";

navbar();

(async function () {
  try {
    const response = await fetch(heroUrl);
    const hero = await response.json();

    renderHero(hero);
  } catch (error) {
    displayMessage("error", "an error occured", ".hero-container");
  }
})();

(async function () {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderFeaturedProducts(products);
  } catch (error) {
    displayMessage("error", "an error occured", ".products-container");
  }
})();
