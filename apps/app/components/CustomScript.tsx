const CustomScript = () => {
  return (
    // <script
    //   id="test-script"
    //   dangerouslySetInnerHTML={{
    //     __html: `
    //       "use strict";
    //       function appendClassNamesFromApiToDummyApi() {
    //         const apiWrapper = document.getElementById("api");
    //         const dummyApiWrapper = document.getElementById("dummy-api");

    //         if (!apiWrapper || !dummyApiWrapper) {
    //           console.error("Invalid IDs for API or DummyAPI");
    //           return;
    //         }

    //         applyClassNames(apiWrapper, dummyApiWrapper);
    //         console.log('classNames appended');
    //       }

    //       function applyClassNames(apiNode, dummyApiNode) {
    //         // Skip style nodes and make sure the nodes are of the same type
    //         if (apiNode.nodeName !== dummyApiNode.nodeName || apiNode.nodeName === 'STYLE') {
    //           return;
    //         }

    //         if (apiNode.nodeType === Node.ELEMENT_NODE && dummyApiNode.nodeType === Node.ELEMENT_NODE) {
    //           const classNames = dummyApiNode.classList;
    //           for (let i = 0; i < classNames.length; i++) {
    //             apiNode.classList.add(classNames[i]);
    //           }
    //         }

    //         const apiChildNodes = [...apiNode.childNodes].filter(node => node.nodeName !== 'STYLE');
    //         const dummyApiChildNodes = [...dummyApiNode.childNodes].filter(node => node.nodeName !== 'STYLE');

    //         if (apiChildNodes.length === dummyApiChildNodes.length) {
    //           for (let i = 0; i < apiChildNodes.length; i++) {
    //             applyClassNames(apiChildNodes[i], dummyApiChildNodes[i]);
    //           }
    //         }
    //       }

    //       function moveStylesToHead() {
    //         const styles = Array.from(document.getElementsByTagName('style'));
    //         const head = document.querySelector('head');
          
    //         if (!head) {
    //           console.error('No head element found');
    //         } else {
    //           styles.forEach(style => {
    //             head.appendChild(style);
    //           });
    //         }
          
    //         console.log('Styles moved to head');
    //       }          

    //       window.onload = function() {
    //         moveStylesToHead();
    //         appendClassNamesFromApiToDummyApi();
    //       };
    //     `,
    //   }}
    // />

    <script data-test-id="test-script" id="custom-script" dangerouslySetInnerHTML={{__html: `
          function syncAPItoDummyAPI() {
            const apiElem = document.querySelector('#api');
            const dummyApiElem = document.querySelector('#dummy-api');
          
            if (!apiElem || !dummyApiElem) {
              console.error("Invalid IDs for API or DummyAPI");
              return;
            }

            
            if (!apiElem.hasChildNodes()) {
              console.log("API does not have any child nodes, skipping sync process.");
              return;
            }
          
            syncNode(apiElem, dummyApiElem);
          
            console.log('API synchronized to DummyAPI');
          }
          
          function syncNode(apiNode, dummyApiNode) {
            // Apply classes from DummyAPI node to API node
            for (let cls of Array.from(dummyApiNode.classList)) {
              apiNode.classList.add(cls);
            }
          
            // Iterate through each child node in DummyAPI
            let i = 0;
            for (const dummyChild of Array.from(dummyApiNode.children)) {
              // Check if corresponding child node exists in API, otherwise create it
              let apiChild = apiNode.children[i];
              if (!apiChild || apiChild.tagName !== dummyChild.tagName) {
                apiChild = dummyChild.cloneNode(true);
                apiNode.insertBefore(apiChild, apiNode.children[i]);
                i++;
                continue; // Do not recurse into this node, it's already a full copy
              }
          
              // Recurse into child nodes
              syncNode(apiChild, dummyChild);
              i++;
            }
          }    
          
          function applyClassNamesToElements() {
            const apiElems = Array.from(document.querySelectorAll('#api *'));
            const dummyApiElems = Array.from(document.querySelectorAll('#dummy-api *'));
          
            // Make sure we have the same number of elements in both lists
            if (apiElems.length !== dummyApiElems.length) {
              console.error("API and Dummy API structures don't match");
              return;
            }
          
            for (let i = 0; i < apiElems.length; i++) {
              const apiElem = apiElems[i];
              const dummyApiElem = dummyApiElems[i];
          
              // Copy all class names from dummy API element to corresponding API element
              for (let cls of Array.from(dummyApiElem.classList)) {
                apiElem.classList.add(cls);
              }
            }
            
            console.log('classNames applied');
          }

          window.onload = syncAPItoDummyAPI;
          applyClassNamesToElements();
        `
        }} 
    />
  );
}

export default CustomScript