export function renderProducts(products) {
  const productsContainer = document.querySelector(".products-container");

  productsContainer.innerHTML = "";

  products.forEach((product) => {
    productsContainer.innerHTML += `<div class="card">
                                          <img src="${product.image_url}" alt="${product.alt_text}">
                                          <h3>${product.title}</h3>
                                          <p>${product.price} kr</p>
                                          <a class="btn-primary" href="product-details.html?id=${product.id}">More details</a>                     
                                      </div>`;
  });
}
