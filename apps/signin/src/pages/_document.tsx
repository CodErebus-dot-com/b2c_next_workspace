// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@src/theme";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta property='og:title' content='Azure AD SignIn' key='title' />
        <meta
          property='og:description'
          content='The Azure Active Directory SignIn page'
          key='description'
        />
        <meta name='title' content='Azure AD SignIn' />
        <meta
          name='description'
          content='The Azure Active Directory SignIn page'
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
