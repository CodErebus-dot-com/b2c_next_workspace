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

    <script data-test-id="test-script" dangerouslySetInnerHTML={{__html: `
            function addClasses() {
                const h2Elem = document.querySelector('.intro')
                h2Elem.classList.add('chakra-heading');
                h2Elem.classList.add('css-1dklj6k');
            }

            addClasses();
            `
            }} 
        />
  );
}

export default CustomScript