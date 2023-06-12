import Script from 'next/script'

const CustomScript = () => {
  return (
    <Script id='my-script' strategy='afterInteractive'>
    {`
      function appendClassNamesFromDummyApiToApi() {
        const apiWrapper = document.getElementById("api");
        const dummyApiWrapper = document.getElementById("dummy-api");
        
        if (!apiWrapper || !dummyApiWrapper) {
          console.error("Invalid IDs for API or DummyAPI");
          return;
        }
        
        applyClassNames(apiWrapper, dummyApiWrapper);
        ${process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' && `removeDummyApi(dummyApiWrapper);`}
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
      
      function removeDummyApi(dummyApiWrapper) {      
        if (dummyApiWrapper) {
          dummyApiWrapper.remove();
        }
      }

      appendClassNamesFromDummyApiToApi();
    `}
  </Script>
  )
}

export default CustomScript