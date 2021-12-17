import { productsUrl } from "../../settings/api.js";
import displayMessage from "../common/displayMessage.js";
import { getToken } from "../../utils/storage/user.js";

export default async function updateProduct(title, price, description, image, altText, featured, id) {
  const url = productsUrl + "/" + id;
  const data = JSON.stringify({ title: title, price: price, description: description, image_url: image, alt_text: altText, featured: featured });
  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "product updated", ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    displayMessage("error", "an error occured", ".message-container");
  }
}
