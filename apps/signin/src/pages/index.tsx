import { Box, Image as ChakraImage, Flex } from "@chakra-ui/react";
import Api from "@components/api";
import CustomScript from "@components/custom-script";
import DummyApi from "@components/dummy-api";
import logo from "@images/Genesis_logo.png";
import logoBlur from "@images/Genesis_logo.svg";
import sisuIllustration from "@images/OTP-Authentication-Security.png";
import sisuIllustrationBlur from "@images/OTP-Authentication-Security.svg";
import { Inter } from "next/font/google";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { Suspense } from "react";
import signinStyles from "../styles/signinStyles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Flex>
        <Suspense fallback='Loading...'>
          <Box
            id='background_branding_container'
            data-tenant-branding-background-color='true'
          >
            {process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
              <ChakraImage
                data-tenant-branding-background='true'
                alt='sign-in sign-up illustration'
              />
            ) : (
              <ExportedImage
                src={sisuIllustration}
                alt='sign-in sign-up illustration'
                width={1000}
                height={1000}
                blurDataURL={`${sisuIllustrationBlur}`}
                placeholder='blur'
              />
            )}
          </Box>
        </Suspense>
        <Flex h='100%' w='60%' direction='column' className='panel' id='panel'>
          <table role='presentation'>
            <tbody>
              <tr>
                <td>
                  <div>
                    <Suspense>
                      <div>
                        {process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
                          <ChakraImage
                            data-tenant-branding-logo='true'
                            className='companyLogo'
                            alt='GenesisX logo'
                          />
                        ) : (
                          <ExportedImage
                            src={logo}
                            alt='GenesiX Logo'
                            width={100}
                            height={0}
                            style={{ width: "100px", height: "auto" }}
                            blurDataURL={`${logoBlur}`}
                            placeholder='blur'
                          />
                        )}
                        <Api />
                        <DummyApi />
                      </div>
                    </Suspense>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>

      {/* styling using styled jsx approach */}
      <style jsx>{signinStyles}</style>

      <CustomScript />
    </main>
  );
}
