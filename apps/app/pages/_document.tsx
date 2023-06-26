// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
            document.addEventListener("DOMContentLoaded", function() {
              window.myApp = {
                log: function(message) {
                  // Perform any actions you want with the log message
                  console.log(message);
                }
              };
              console.log('test script loaded by varki');
            });
          `,
        }}
      />
    );
}

export default MyDocument;
