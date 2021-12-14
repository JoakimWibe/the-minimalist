//user

const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function logOutUser(user) {
  localStorage.removeItem(userKey, user);
  location.href = "/";
}

export function getEmail() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.email;
  }

  return null;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}

// shopping cart

export function getExistingProducts() {
  const cart = localStorage.getItem("shoppingcart");

  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveToCart(cart) {
  localStorage.setItem("shoppingcart", JSON.stringify(cart));
}
