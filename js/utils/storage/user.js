import { saveToStorage, getFromStorage } from "../storage/global.js";

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
  localStorage.removeItem(tokenKey);
  location.href = "/";
}

export function getEmail() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.email;
  }

  return null;
}
