export function renderFeaturedProducts(products) {
  const productsContainer = document.querySelector(".products-container");

  for (let i = 0; i < products.length; i++) {
    if (products[i].featured === false) {
      continue;
    }

    productsContainer.innerHTML += `<div class="card">
                                          <img src="${products[i].image_url}" >
                                          <h3>${products[i].title}</h3>
                                          <p>${products[i].price} kr</p>                                      
                                          <a href="product-details.html?id=${products[i].id}" class="btn-primary">More details</a>                                     
                                      </div>`;
  }
}
