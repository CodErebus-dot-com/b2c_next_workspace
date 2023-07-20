/* eslint-disable @next/next/no-img-element */
import { ColorModeScript, Box, Flex, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'
import { theme } from '../../pages/_app'
import homeStyles from '../../styles/homeStyles'
import Api from '../api'
import DummyApi from '../dummyApi'
import CustomScript from '../../components/CustomScript'
import sisuIllustration from '../../public/images/OTP-Authentication-Security.svg'
import logo from '../../public/images/Genesis_logo.svg'

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>  
        <Box id="background_branding_container" data-tenant-branding-background-color="true">
          {
            process.env['NEXT_PUBLIC_NODE_ENV'] === 'production'
            ? <ChakraImage data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
            : <Image src={sisuIllustration} alt="sign-in sign-up illustration" width={1000} height={1000} />
          }
        </Box>
        <Flex h="100%" w="60%" direction="column" className="panel" id="panel">
          <table role="presentation">
            <tbody>
              <tr>
                <td>
                  <div>
                    <div>
                      {
                        process.env['NEXT_PUBLIC_NODE_ENV'] === 'production'
                        ? <ChakraImage data-tenant-branding-logo="true" className="companyLogo" alt="GenesisX logo" />
                        : <Image src={logo} alt="GenesiX Logo" width={100} height={100} />
                      }
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

      <CustomScript />
    </>
  );
}

export default Home