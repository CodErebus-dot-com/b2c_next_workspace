import { useState, useEffect } from "react";
import { getIdToken } from "../authService";

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const idTokenInCookie = getIdToken();
    if (idTokenInCookie) {
      setIsAuthenticated(true);
      // remove idToken from url
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};
