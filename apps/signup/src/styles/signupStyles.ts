import css from "styled-jsx/css";

export default css.global`
  /* Base Styles */
  #signin_container {
    display: flex;
    flex-direction: column; /* Stack elements vertically on small screens */
  }

  #background_branding_container {
    display: none; /* Initially hide image box on small screens */
  }

  #panel {
    width: 100%; /* Full width for the form on small screens */
    height: auto; /* Auto height for flexibility on small screens */
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
  @media screen and (min-width: 768px) {
    #signin_container {
      flex-direction: row; /* Use horizontal layout on larger screens */
    }

    #background_branding_container {
      display: block; /* Show the image box on larger screens */
      width: 50vw; /* Set image box width to 60vw */
      background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;
      min-height: 100vh;
      max-height: 100%;
    }

    #panel {
      width: 50vw; /* Set form width to 40vw */
      height: 100%; /* Full height to match the image container */
      border-left: 1px solid #fff; /* Add border back for visual separation */
    }

    .companyLogo {
      width: 75px;
    }
  }

  /* Desktop and larger devices */
  @media screen and (min-width: 1025px) {
    #signin_container {
      flex-direction: row; /* Maintain horizontal layout */
    }

    #background_branding_container {
      display: block; /* Ensure image box is visible */
      width: 60vw; /* Maintain image box width at 60vw */
      background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
      -webkit-animation: fadeIn 1s;
      animation: fadeIn 1s;
      min-height: 100vh;
      max-height: 100%;
    }

    #panel {
      width: 40vw; /* Maintain form width at 40vw */
      border-left: 1px solid #fff; /* Maintain visual separation */
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
