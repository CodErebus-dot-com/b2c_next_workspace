'use client'

/* eslint-disable @next/next/no-img-element */
import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
// import { theme } from '../../../pages/_app'
// import styles from './styles';
import Api from "../Api";
import DummyApi from '../DummyApi';
// import CustomScript from './script';

const Base = () => {
  return (
    <>
      <ColorModeScript />
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
    </>
  )
}

export default Base