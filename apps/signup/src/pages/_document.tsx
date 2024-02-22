// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@src/theme";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta property='og:title' content='Azure AD SignUp' key='title' />
        <meta
          property='og:description'
          content='The Azure Active Directory SignUp page'
          key='description'
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
