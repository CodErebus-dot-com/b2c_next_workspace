import css from "styled-jsx/css";

export default css.global`
  /* Base Styles */
  #background_branding_container {
    display: none; /* Hide image box on small screens */
  }

  #panel {
    width: 100%; /* Full width on small screens */
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none; /* Remove border for a cleaner look on small screens */
  }

  .panel {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .companyLogo {
    width: 50px;
  }

  /* Tablet and similar sized devices */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    #background_branding_container {
      display: block; /* Show the image box */
      width: 50vw; /* Adjust image box width for tablet */
      background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;
      min-height: 100vh;
      max-height: 100%;
    }

    #panel {
      width: 50vw; /* Adjust panel width for tablet */
      border-left: 1px solid #fff; /* Add the border back */
    }

    .companyLogo {
      width: 75px;
    }
  }

  /* Desktop and larger devices */
  @media screen and (min-width: 1025px) {
    #background_branding_container {
      display: block; /* Ensure image box is visible */
      width: 60vw; /* Standard image box width */
      min-height: 100vh;
      max-height: 100%;
      min-width: 60%;
      background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;
    }

    #panel {
      width: 40vw; /* Standard panel width */
      border-left: 1px solid #fff; /* Maintain the border */
    }

    .companyLogo {
      width: 100px;
    }
  }

  .verificationErrorText {
    color: #d63301;
  } // move this to the FormPreview component if you want to use chakra classes instead

  #dummy-api {
    visibility: none;
    height: 0;
    width: 0;
    z-index: -9999;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;
