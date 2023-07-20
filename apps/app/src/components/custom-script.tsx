import tailwindStyles from '@root/tw-styles'

// CustomScript is a component that adds a script and a style tag to the DOM.
// The script will apply the classNames from the dummy-api component to the api component.
// The style tag will inject the processed tw-styles into the DOM.
const CustomScript = () => {
  return (
    <>
      {/* the generated tailwindStyles should be used only for production */}
      {process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' && (
        <style
          data-test-id='test-style'
          dangerouslySetInnerHTML={{
            __html: tailwindStyles,
          }}
        />
      )}
      <script
        data-test-id='test-script'
        id='custom-script'
        dangerouslySetInnerHTML={{
          __html: `
          function logError(apiElems, dummyApiElems) {
            const errorDetails = {
              apiElemCount: apiElems.length,
              dummyApiElemCount: dummyApiElems.length,
              apiElemTags: apiElems.map((elem) => elem.tagName),
              dummyApiElemTags: dummyApiElems.map((elem) => elem.tagName),
            };
            console.warn('API and Dummy API structures do not match', errorDetails);
          }
          
          function syncAPItoDummyAPI() {
            const apiElem = document.querySelector('#api');
            const dummyApiElem = document.querySelector('#dummy-api');
          
            if (!apiElem || !dummyApiElem) {
              console.error('Invalid IDs for API or DummyAPI');
              return;
            }
            
            if (!apiElem.hasChildNodes()) {
              console.log('API does not have any child nodes, skipping sync process.');
              return;
            }
          
            syncNode(apiElem, dummyApiElem);
          
            console.log('API synchronized to DummyAPI');
            applyClassNamesToElements();
          }
          
          function syncNode(apiNode, dummyApiNode) {
            for (let cls of Array.from(dummyApiNode.classList)) {
              apiNode.classList.add(cls);
            }
          
            let i = 0;
            for (const dummyChild of Array.from(dummyApiNode.children)) {
              let apiChild = apiNode.children[i];
              if (!apiChild || apiChild.tagName !== dummyChild.tagName) {
                apiChild = dummyChild.cloneNode(true);
                apiNode.insertBefore(apiChild, apiNode.children[i]);
                i++;
                continue;
              }
          
              syncNode(apiChild, dummyChild);
              i++;
            }
          }
          
          function applyClassNamesToElements() {
            const apiElems = Array.from(document.querySelectorAll('#api *'));
            const dummyApiElems = Array.from(document.querySelectorAll('#dummy-api *'));
          
            if (apiElems.length !== dummyApiElems.length) {
              logError(apiElems, dummyApiElems);
              syncAPItoDummyAPI();
              return;
            }
            
            for (let i = 0; i < apiElems.length; i++) {
              const apiElem = apiElems[i];
              const dummyApiElem = dummyApiElems[i];
          
              for (let cls of Array.from(dummyApiElem.classList)) {
                apiElem.classList.add(cls);
              }
            }
          
            console.log('classNames applied');
          }

          var isDev = window.location.hostname === "localhost"; // adjust according to your setup
          isDev ? window.onload = applyClassNamesToElements : applyClassNamesToElements();
        `,
        }}
      />
    </>
  )
}

export default CustomScript
