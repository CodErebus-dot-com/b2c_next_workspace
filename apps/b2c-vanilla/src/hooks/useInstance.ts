import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { getIdToken, signOutPopup, signOutRedirect } from "../authService";

type DECODED_INSTANCE = {
  iss: string;
  tfp?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  auth_time?: number;
  nonce?: string;
  sub?: string;
  acr?: string;
  amr?: string[];
  azp?: string;
  ver?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
  idp?: string;
};

export type TInstance = {
  decodedInstance: DECODED_INSTANCE | null;
  signOutPopup: () => void;
  signOutRedirect: () => void;
};

export const useInstance = () => {
  const idToken = getIdToken();
  const [instance, setInstance] = useState<TInstance | null>(null);

  useEffect(() => {
    if (idToken) {
      const decodedInstance: DECODED_INSTANCE = jwt_decode(idToken);
      const instance = {
        decodedInstance,
        signOutPopup,
        // logoutPopup: () => {
        //   const logoutUrl = `${decodedInstance.iss}/oauth2/v2.0/logout?post_logout_redirect_uri=${window.location.origin}`;
        //   const popup = window.open(logoutUrl, '_blank', 'width=600,height=600');
        //   const pollTimer = window.setInterval(() => {
        //     if (popup?.closed) {
        //       window.clearInterval(pollTimer);
        //     }
        //   }, 200);
        // },
        // signOutRedirect: () => {
        //   const logoutUrl = `${decodedInstance.iss}/oauth2/v2.0/logout?post_logout_redirect_uri=${window.location.origin}`;
        //   window.location.assign(logoutUrl);
        // },
        signOutRedirect,
      };

      setInstance(instance);
    } else {
      setInstance(null);
    }
  }, [idToken]);

  return { instance };
};
