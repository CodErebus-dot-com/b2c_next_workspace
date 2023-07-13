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
          }

          function applyClassNames(apiNode, dummyApiNode) {
            // Skip style nodes and make sure the nodes are of the same type
            if (apiNode.nodeName !== dummyApiNode.nodeName || apiNode.nodeName === 'STYLE') {
              return;
            }

            if (apiNode.nodeType === Node.ELEMENT_NODE && dummyApiNode.nodeType === Node.ELEMENT_NODE) {
              const classNames = dummyApiNode.classList;
              for (let i = 0; i < classNames.length; i++) {
                apiNode.classList.add(classNames[i]);
              }
            }

            const apiChildNodes = [...apiNode.childNodes].filter(node => node.nodeName !== 'STYLE');
            const dummyApiChildNodes = [...dummyApiNode.childNodes].filter(node => node.nodeName !== 'STYLE');

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

export default CustomScript