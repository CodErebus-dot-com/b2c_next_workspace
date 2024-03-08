import { Box, Image as ChakraImage, Flex } from "@chakra-ui/react";
import Api from "@components/api";
import CustomScript from "@components/custom-script";
import DummyApi from "@components/dummy-api";
import logo from "@images/Genesis_logo.png";
import logoBlur from "@images/Genesis_logo.svg";
import sisuIllustration from "@images/OTP-Authentication-Security.png";
import sisuIllustrationBlur from "@images/OTP-Authentication-Security.svg";
import ExportedImage from "next-image-export-optimizer";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import signupStyles from "../styles/signupStyles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Flex>
        <Flex className='panel' id='panel'>
          <table role='presentation'>
            <tbody>
              <tr>
                <td>
                  <div>
                    <div>
                      <Suspense fallback='Loading...'>
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
                            className='companyLogo'
                            width={100}
                            height={0}
                            blurDataURL={`${logoBlur}`}
                            placeholder='blur'
                          />
                        )}
                      </Suspense>
                      <Api />
                      <DummyApi />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
        <Suspense fallback='Loading...'>
          <Box
            id='background_branding_container'
            data-tenant-branding-background-color='true'
          >
            {process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
              <ChakraImage
                data-tenant-branding-background='true'
                className='companyBackground'
                alt='sign-in sign-up illustration'
              />
            ) : (
              <ExportedImage
                src={sisuIllustration}
                alt='sign-in sign-up illustration'
                className='companyBackground'
                width={1000}
                height={1000}
                blurDataURL={`${sisuIllustrationBlur}`}
                placeholder='blur'
              />
            )}
          </Box>
        </Suspense>
      </Flex>

      {/* styling using styled jsx approach */}
      <style jsx>{signupStyles}</style>

      <CustomScript />
    </main>
  );
}
