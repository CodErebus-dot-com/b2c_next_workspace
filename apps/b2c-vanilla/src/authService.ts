import { track } from "@vercel/analytics";
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
  track("Signin");
  const authEndpoint = `${authority}/oauth2/v2.0/authorize`;
  const url = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${responseMode}&scope=${scope}&nonce=${generateNonce()}`;
  window.location.assign(url);
};

function openPopup(
  url: string,
  title: string,
  w: number = 500,
  h: number = 600
) {
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

  const left = width / 2 - w / 2 + dualScreenLeft;
  const top = height / 2 - h / 2 + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
  ) as Window;

  newWindow.focus();

  return newWindow;
}

export const signInPopup = () => {
  const {
    clientId,
    authority,
    redirectUri,
    responseMode,
    responseType,
    scope,
  } = authConfig.auth;
  track("Signin");
  const authEndpoint = `${authority}/oauth2/v2.0/authorize`;
  const url = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&response_mode=${responseMode}&scope=${scope}&nonce=${generateNonce()}`;

  // Open the popup window
  const popupWindow = openPopup(url, "ad_signin_window");

  // Listen for a message from the popup window
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) {
      return;
    }

    // Check if the message is a success message
    if (event.data === "login_success") {
      popupWindow.close();
      if (getIdToken()) {
        window.location.reload();
      }
    }
  });
};

export const signOutPopup = () => {
  const { authority, redirectUri } = authConfig.auth;
  const clientRequestId = uuidv4();
  const url = `${authority}/oauth2/v2.0/logout?post_logout_redirect_uri=${redirectUri}&client-request-id=${clientRequestId}`;

  const popupWindow = openPopup(url, "ad_signout_window");

  setTimeout(() => {
    popupWindow.close();
    clearAuthData();
    window.location.reload();
  }, 1000);
};

const clearAuthData = () => {
  console.log("clearAuthData");
  Cookies.remove("id_token"); // clear 'id_token' cookie
  sessionStorage.removeItem("authNonce"); // clear 'authNonce' session storage
  window.history.replaceState({}, document.title, window.location.pathname); // remove 'id_token' param from url
  window.location.reload(); // refresh the page
};

export const signOutRedirect = () => {
  const { authority, redirectUri } = authConfig.auth;
  const clientRequestId = uuidv4();
  const url = `${authority}/oauth2/v2.0/logout?post_logout_redirect_uri=${redirectUri}&client-request-id=${clientRequestId}`;
  track("Signout");
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
      Cookies.set("id_token", idToken, {
        expires,
        path: "/",
        secure: true, // Set secure flag for https environments
        sameSite: "strict",
      });
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

export const isInPopup = () => {
  return (
    typeof window !== "undefined" &&
    !!window.opener &&
    window.opener !== window &&
    typeof window.name === "string"
  );
};
