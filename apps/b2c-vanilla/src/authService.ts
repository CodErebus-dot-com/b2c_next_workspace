"use client";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { authConfig } from "./authConfig";

export const signInRedirect = () => {
  const {
    clientId,
    authority,
    redirectUri,
    responseMode,
    responseType,
    scope,
  } = authConfig.auth;
  const authEndpoint = `${authority}/oauth2/v2.0/authorize`;
  const url = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${responseMode}&scope=${scope}&nonce=${generateNonce()}`;
  window.location.assign(url);
};

export const signInPopup = () => {
  const {
    clientId,
    authority,
    redirectUri,
    responseMode,
    responseType,
    scope,
  } = authConfig.auth;
  const authEndpoint = `${authority}/oauth2/v2.0/authorize`;
  const url = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${responseMode}&scope=${scope}&nonce=${generateNonce()}`;

  const popup = window.open(url, "_blank", "width=600,height=600");
  popup?.focus();
  const pollTimer = window.setInterval(() => {
    const redirectedUri = new URL(window.location.href).toString();
    if (redirectedUri === redirectUri) {
      setIdToken(); // needs to be called in page.tsx
      window.location.reload();
      popup?.close();
    }
    window.clearInterval(pollTimer);
  }, 200);

  // focus back to the main window (window with url = redirectUri) and reload it
  window.focus();
  window.location.reload();
};

const clearAuthData = () => {
  Cookies.remove("id_token"); // clear 'id_token' cookie
  sessionStorage.removeItem("authNonce"); // clear 'authNonce' session storage
  window.history.replaceState({}, document.title, window.location.pathname); // remove 'id_token' param from url
  window.location.reload(); // refresh the page
};

export const signOutPopup = () => {
  const { authority, redirectUri } = authConfig.auth;
  const clientRequestId = uuidv4();
  const url = `${authority}/oauth2/v2.0/logout?post_logout_redirect_uri=${redirectUri}&client-request-id=${clientRequestId}`;

  const popup = window.open(url, "_blank", "width=600,height=600");
  popup?.focus();
  const pollTimer = window.setInterval(() => {
    if (popup?.closed) {
      window.clearInterval(pollTimer);
      clearAuthData();
    }
  }, 200);
  popup?.close();
};

export const signOutRedirect = () => {
  const { authority, redirectUri } = authConfig.auth;
  const clientRequestId = uuidv4();
  const url = `${authority}/oauth2/v2.0/logout?post_logout_redirect_uri=${redirectUri}&client-request-id=${clientRequestId}`;
  clearAuthData();
  window.location.assign(url);
};

// Function to generate a unique nonce value for each sign-in request
const generateNonce = () => {
  const nonce = new Array(40)
    .fill(null)
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
  sessionStorage.setItem("authNonce", nonce);
  return nonce;
};

// a function to check if the id token is present in the url
export const isIdTokenPresent = () => {
  // use hashParams when responseMode = 'fragment'
  // const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const queryParams = new URLSearchParams(window.location.search.substring(1));
  if (queryParams.has("id_token")) {
    const idToken = queryParams.get("id_token");
    return idToken;
  }
  return false;
};

export const setIdToken = () => {
  const { storeAuthStateInCookie } = authConfig.cache;
  const idToken = isIdTokenPresent();

  if (storeAuthStateInCookie && idToken) {
    const expires = new Date();
    expires.setTime(expires.getTime() + 60 * 60 * 1000); // Set cookie to expire in 1 hour

    try {
      const expires = new Date();
      expires.setTime(expires.getTime() + 60 * 60 * 1000); // Set cookie to expire in 1 hour

      Cookies.set("id_token", idToken, {
        expires,
        path: "/",
        secure: true, // Set secure flag for https environments
        sameSite: "strict",
      });

      console.log("Cookie set successfully!");
    } catch (err) {
      console.log(`Failed to set cookie: ${err}`);
    }
  } else {
    console.warn("Token is empty or null");
  }
};

// call if auth state is stored in cookie
export const getIdToken = () => {
  const idToken = Cookies.get("id_token");
  return idToken;
};
