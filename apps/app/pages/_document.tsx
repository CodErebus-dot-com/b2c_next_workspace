// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Place the script in the body */}
          <CustomScript />
          <NextScript />
        </body>
      </Html>
    );
}

const CustomScript = () => {
    return (
      <script
        id="test-script-3"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('test script 3');
          `,
        }}
      />
    );
}

export default MyDocument;
