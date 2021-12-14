import { getEmail } from "../../utils/storage.js";
import { logOutUser } from "../../utils/storage.js";

export default function navbar() {
  const { pathname } = document.location;

  const email = getEmail();

  let authLink = `<li><a id="navLink" href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Log in</a></li>`;

  if (email) {
    authLink = `<li><a id="navLink" href="add-product.html" class="${pathname === "/add-product.html" ? "active" : ""}">Add product</a></li>
                <li><span id="loggedIn">Logged in as ${email}</span>
                <li><button class="btn-primary" id="logOutBtn">Log out <i class="fas fa-sign-out-alt"></i></button></li>`;
  }

  const container = document.querySelector("ul");

  container.innerHTML = `<li><a id="navLink" href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                         <li><a id="navLink" href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                         <li><a id="navLink" href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}">Cart</a></li>
                         ${authLink}`;

  if (email) {
    const logOutBtn = document.querySelector("#logOutBtn");

    logOutBtn.addEventListener("click", logOutUser);
  }
}
