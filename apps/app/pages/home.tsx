/* eslint-disable @next/next/no-img-element */
import Logo from "../public/images/Genesis_logo.svg"
import Illustration from "../public/images/OTP-Authentication-Security.svg"
// import Image from 'next/image'
import { ColorModeScript, Box, Flex, Image } from '@chakra-ui/react'
import { theme } from './_app'
import homeStyles from '../styles/homeStyles';
import styles from '../styles.module.css';

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>  
        <div id="background_branding_container" data-tenant-branding-background-color="true">
          {/* <img data-tenant-branding-background="true" alt="sign-in sign-up illustration" /> */}
          <Image data-tenant-branding-background="true" alt="sign-in sign-up illustration" />
          {/* <Image src='https://b2c-next-workspace-2c6ji9kfv-coderebus-dot-com.vercel.app/_next/static/media/OTP-Authentication-Security.7bf3ec73.svg' alt="sign-in sign-up illustration" priority /> */}
        </div>
        <Flex h="100%" w="60%" direction="column">
          <table className={styles.panel_layout} role="presentation">
            <tbody>
              <tr className={styles.panel_layout_row}>
                <td id={styles.panel_left} />
                <td id={styles.panel_center}>
                  <div className={styles.inner_container}>
                    <div className={`${styles.api_container} ${styles.normaltext}`}>
                      {/* <img data-tenant-branding-logo="true" alt="Genesisx Logo" /> */}
                      <Image data-tenant-branding-logo="true" alt="GenesisX logo" />
                      <div id="api" role="main"></div>
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
    </>
  )
}

export default Home