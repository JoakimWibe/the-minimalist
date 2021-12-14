import { productsUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";

export default function deleteProduct(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `<button type="button" id="deleteProduct" class="btn-primary">Delete product</button>`;

  const deleteButton = document.querySelector("#deleteProduct");

  deleteButton.onclick = async function () {
    const doDelete = confirm("are you sure you want to delete this product?");

    if (doDelete) {
      const url = productsUrl + "/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/";
      } catch (error) {
        displayMessage("error", json.message, ".message-container");
      }
    }
  };
}
