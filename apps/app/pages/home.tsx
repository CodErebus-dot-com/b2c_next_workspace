import Logo from "../public/images/Genesis_logo.svg"
import Illustration from "../public/images/OTP-Authentication-Security.svg"
import Image from 'next/image'
import { ColorModeScript, Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
// import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from './_app'

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div id="signin_container">  
        <Box bgGradient="linear(to-r, #0f3e83, #0078d4, #3079ed, #00abec)" h="100vh" w="100vw" data-tenant-branding-background-color="true">
          <img data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
          {/* <Image src='https://b2c-next-workspace-2c6ji9kfv-coderebus-dot-com.vercel.app/_next/static/media/OTP-Authentication-Security.7bf3ec73.svg' alt="sign-in sign-up illustration" priority /> */}
        </Box>
        <div className="panel" id="panel">
          <table className="panel_layout" role="presentation">
            <tbody>
              <tr className="panel_layout_row">
                <td id="panel_left" />
                <td id="panel_center">
                  <div className="inner_container">
                    <div className="api_container normaltext">
                      <img data-tenant-branding-logo="true" alt="Genesisx Logo" />
                      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
                        About
                      </Link>
                      {/* <Image src={Logo} alt="GenesisX logo" priority /> */}
                      <div id="api" role="main"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default Home