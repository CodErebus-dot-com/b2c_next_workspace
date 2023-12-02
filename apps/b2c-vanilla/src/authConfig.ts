// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
let windowObj: typeof window | undefined;

if (typeof window !== "undefined") {
  windowObj = window;
}

// Now you can use windowObj instead of window
let ua,
  msie,
  msie11,
  msedge,
  firefox,
  chrome,
  isIE,
  isEdge,
  isFirefox,
  isChrome,
  origin;

if (windowObj) {
  ua = window.navigator.userAgent;
  msie = ua.indexOf("MSIE ");
  msie11 = ua.indexOf("Trident/");
  msedge = ua.indexOf("Edge/");
  firefox = ua.indexOf("Firefox");
  chrome = ua.indexOf("Chrome");
  isIE = msie > 0 || msie11 > 0;
  isEdge = msedge > 0;
  isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito
  isChrome = chrome > 0; // Only needed if you need to support the redirect flow in Chrome incognito
  origin = window.location.origin;
}

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SISUPolicy",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://vsgenesisx.b2clogin.com/vsgenesisx.onmicrosoft.com/B2C_1_SISUPolicy",
      // https://login.microsoftonline.com/88f670a5-0857-4253-8b2d-519b69b3526c/oauth2/v2.0/token
    },
  },
  authorityDomain: "vsgenesisx.b2clogin.com",
};

// Config object to be passed to Msal on creation
export const authConfig = {
  auth: {
    clientId: "5a9f9a4c-b9f6-4085-988f-4f95e44897dc",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: `${origin}/`,
    postLogoutRedirectUri: `${origin}/`,
    responseMode: "query",
    responseType: "id_token",
    scope: "openid",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: isIE || isEdge || isFirefox || isChrome,
  },
};

export const loginRequest = {
  scopes: ["https://msidlabb2c.onmicrosoft.com/msidlabb2capi/read"],
};
