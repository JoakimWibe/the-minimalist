import { productsUrl } from "../../settings/api.js";
import displayMessage from "../common/displayMessage.js";
import { getToken } from "../../utils/storage/user.js";

export async function createProduct(title, price, description, image, featured) {
  const form = document.querySelector("#productForm");
  const data = JSON.stringify({ title: title, price: price, description: description, image_url: image, featured: featured });
  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productsUrl, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "product added to the store", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    displayMessage("error", "an error occured", ".message-container");
  }
}
