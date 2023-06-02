import Logo from "../public/images/Genesis_logo.svg"
import Illustration from "../public/images/OTP-Authentication-Security.svg"
import Image from 'next/image'

const Home = () => {
  return (
    <div id="signin_container">
      {/* Add SEO to the component of choice to add/modify custom meta data */}
      <div id="background_branding_container" data-tenant-branding-background-color="true">
        <Image src={Illustration} alt="sign-in sign-up illustration" priority />
      </div>
      <div className="panel" id="panel">
        <table className="panel_layout" role="presentation">
          <tbody>
            <tr className="panel_layout_row">
              <td id="panel_left" />
              <td id="panel_center">
                <div className="inner_container">
                  <div className="api_container normaltext">
                    <Image src={Logo} alt="GenesisX logo" priority />
                    <div id="api" role="main"></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home