/* eslint-disable @next/next/no-img-element */
import Logo from "../public/images/Genesis_logo.svg"
import Illustration from "../public/images/OTP-Authentication-Security.svg"
// import Image from 'next/image'
import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
import { theme } from './_app'

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>  
        <Box bgGradient="linear(to-r, #0f3e83, #0078d4, #3079ed, #00abec)" h="100vh" w="100vw" data-tenant-branding-background-color="true">
          {/* <img data-tenant-branding-background="true" alt="sign-in sign-up illustration" /> */}
          <Image data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
          {/* <Image src='https://b2c-next-workspace-2c6ji9kfv-coderebus-dot-com.vercel.app/_next/static/media/OTP-Authentication-Security.7bf3ec73.svg' alt="sign-in sign-up illustration" priority /> */}
        </Box>
        <Flex h="100%" w="60%" direction="column">
          <table className="panel_layout" role="presentation">
            <tbody>
              <tr className="panel_layout_row">
                <td id="panel_left" />
                <td id="panel_center">
                  <div className="inner_container">
                    <div className="api_container normaltext">
                      {/* <img data-tenant-branding-logo="true" alt="Genesisx Logo" /> */}
                      <Image alt="GenesisX logo" />
                      <div id="api" role="main"></div>
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

export default Home