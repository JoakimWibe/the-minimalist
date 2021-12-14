export function renderHero(hero) {
  const heroSection = document.querySelector(".hero-container");

  const backgroundImage = hero.hero.url;

  heroSection.innerHTML = `<div class="hero" style="background-image: url(${backgroundImage})">
                                <h1>Minimalist clothing for any occasion</h1>
                                <a class="btn-primary" href="products.html">Browse products</a>
                            </div>`;
}
