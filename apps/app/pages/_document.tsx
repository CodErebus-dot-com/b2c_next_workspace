// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <CustomScript />
          <NextScript />
        </body>
      </Html>
    );
}

const CustomScript = () => {
    return (
      <script
        id="test-script"
        dangerouslySetInnerHTML={{
          __html: `
            "use strict";
            function appendClassNamesFromApiToDummyApi() {
              const apiWrapper = document.getElementById("api");
              const dummyApiWrapper = document.getElementById("dummy-api");

              if (!apiWrapper || !dummyApiWrapper) {
                console.error("Invalid IDs for API or DummyAPI");
                return;
              }

              applyClassNames(apiWrapper, dummyApiWrapper);
              console.log('Content changed in the Api component');
              // console.log(apiWrapper)
            }

            function applyClassNames(apiNode, dummyApiNode) {
              if (
                apiNode.nodeType === Node.ELEMENT_NODE &&
                dummyApiNode.nodeType === Node.ELEMENT_NODE
              ) {
                const classNames = dummyApiNode.classList;
                for (let i = 0; i < classNames.length; i++) {
                  apiNode.classList.add(classNames[i]);
                }
              }

              const apiChildNodes = apiNode.childNodes;
              const dummyApiChildNodes = dummyApiNode.childNodes;

              if (apiChildNodes.length === dummyApiChildNodes.length) {
                for (let i = 0; i < apiChildNodes.length; i++) {
                  applyClassNames(apiChildNodes[i], dummyApiChildNodes[i]);
                }
              }
            }

            window.onload = function() {
              appendClassNamesFromApiToDummyApi();
              console.log('classNames appended');
            };
          `,
        }}
      />
    );
}

export default MyDocument;
