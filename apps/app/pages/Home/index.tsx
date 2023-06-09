"use client";

/* eslint-disable @next/next/no-img-element */
import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
import { theme } from '../_app'
import homeStyles from '../../styles/homeStyles';
import Api from "../../app/api";
import DummyApi from "../../app/dummyApi";
import Script from 'next/script';

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>  
        <Box id="background_branding_container" data-tenant-branding-background-color="true">
          <Image data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
        </Box>
        <Flex h="100%" w="60%" direction="column" className="panel" id="panel">
          <table role="presentation">
            <tbody>
              <tr>
                <td/>
                <td>
                  <div>
                    <div>
                      <Image data-tenant-branding-logo="true" className="companyLogo" alt="GenesisX logo" />
                      <Api />
                      <DummyApi />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>

      {/* styling using styled jsx approach */}
      <style jsx>
        {homeStyles}
      </style>

      <Script id="my-script">
        {`
          document.addEventListener("DOMContentLoaded", function() {
            addChakraClassNames();
          });

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
    </>
  )
}

export default Home