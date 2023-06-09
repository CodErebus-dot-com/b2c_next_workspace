import css from 'styled-jsx/css';

const NODE_ENV = process.env['NEXT_PUBLIC_NODE_ENV']

export default css.global`
  #signin_container {
    display: flex;
  }
  
  #background_branding_container {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
  
  .illustration {
    height: 100%;
    width: 100%;
  }
  
  #panel {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid #fff;
  }
  
  .inner_container {
    margin-top: 5em;
  }

  .intro {
    display: inline;
    margin-bottom: 5px;
  }
  
  .intro p {
    padding-bottom: 7px;
  }
  
  .entry {
    padding-top: 8px;
    padding-bottom: 0!important;
  }
  
  .entry input {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    height: 28px;
    width: 300px;
    border: 1px solid #b8b8b8;
    z-index: 3;
    background: 0 0;
    color: #000;
    padding: 0 0 0 3px;
    -moz-box-shadow: 0 0 0;
    -webkit-box-shadow: 0 0 0;
    box-shadow: 0 0 0;
    margin-bottom: 7px;
  }
  
  #next {
    padding-left: 10px;
    padding-right: 10px;
    height: 30.5px;
  }
  
  #next:hover,
  .accountButton:hover {
    -moz-box-shadow: 0 0 0;
    -webkit-box-shadow: 0 0 0;
    box-shadow: 0 0 0;
  }
  
  .create {
    width: 100%;
    margin-top: 7px;
  }
  
  #createAccount {
    margin-left: 5px;
  }
  
  .password-label label {
    display: inline-block;
    vertical-align: baseline;
  }
  
  .invalid,
  .required,
  .unknown {
    display: none;
  }
  
  #forgotPassword {
    font-size: 0.75em;
    padding-left: 5px;
  }
  
  .passwordReqs {
    display: block;
    font-size: 0.8em;
    padding-bottom: 2px;
  }
  
  .localAccount .divider,
  .working {
    display: none;
  }
  
  .tiny {
    font-size: 0.8em;
    font-weight: 400;
    padding-left: 5px;
  }
  
  .divider {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .divider h2 {
    display: table;
    white-space: nowrap;
    font-size: 1em;
    font-weight: 700;
  }
  
  .divider h2:after,
  .divider h2:before {
    border-top: 1px solid #b8b8b8;
    content: '';
    display: table-cell;
    position: relative;
    top: 0.7em;
    width: 50%;
  }
  
  .divider h2:before {
    right: 1.8%;
  }
  
  .divider h2:after {
    left: 1.8%;
  }
  
  .verificationErrorText {
    color: #d63301;
  }
  
  .options div {
    display: inline-block;
    vertical-align: top;
    margin-top: 7px;
  }


  



  .pageLevel,
  body {
    text-align: left;
  }

  #panel,
  .pageLevel,
  .panel li,
  label {
    display: block;
  }

  button {
    width: auto;
    min-width: 50px;
    height: 32px;
    margin-top: 2px;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    background: #0078d4;
    border: 1px solid #fff;
    color: #fff;
    transition: background 1s ease 0s;
    font-size: 100%;
    padding: 0 2px;
  }

  button:hover {
    background: #0f3e83;
    border: 1px solid #3079ed;
    -moz-box-shadow: 0 0 0;
    -webkit-box-shadow: 0 0 0;
    box-shadow: 0 0 0;
  }

  .buttons button {
    -moz-user-select: none;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 0;
    padding: 6px 12px;
    font-size: 100%;
  }

  .buttons button:disabled,
  button.disabled,
  button[aria-disabled=true],
  button[disabled] {
    background-color: #767676;
  }

  .buttons button:focus {
    outline: #8a8886 solid 1px;
  }

  .accountButton,
  button {
    -moz-user-select: none;
    user-select: none;
  }

  .accountButton,
  a,
  button {
    cursor: pointer;
  }

  ::-webkit-input-placeholder {
    color: #6d6d6d;
  }

  :-moz-placeholder {
    color: #6d6d6d;
  }

  ::-moz-placeholder {
    color: #6d6d6d;
  }

  :-ms-input-placeholder {
    color: #6d6d6d!important;
  }

  h1,
  h2 {
    font-weight: 400;
  }

  .panel li {
    list-style: none;
  }

  .panel .companyLogo {
    width: 160px;
    margin-bottom: 20px;
  }

  #api ul li {
    display: inline;
    list-style-type: none;
    margin-left: 0;
  }

  .heading h1 {
    margin-bottom: 20px;
  }

  html {
    background-color: #00abec;
  }

  .normaltext,
  .smalltext,
  .tinytext {
    font-family: 'Segoe UI', Segoe, SegoeUI-Regular-final, Tahoma, Helvetica, Arial, sans-serif;
  }

  .panel,
  .panel_layout,
  .panel_layout_row,
  body,
  html {
    height: 100%;
  }

  a {
    background-color: transparent;
    color: #2872dd;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: #8a8886 solid 1px;
  }

  img {
    border: 0;
  }

  form {
    height: auto;
    margin-bottom: 20px;
  }
  
  .inputText {
    border: 1px solid #ccc;
    height: 26px;
    padding: 4px 6px;
    width: 100%;
  }
  
  .inputText:focus {
    border-color: #3079ed;
    outline: none;
  }
  
  .inputText.invalid {
    border-color: #d50000;
  }
  
  .inputText.invalid:focus {
    border-color: #d50000;
  }
  
  .invalidMessage {
    color: #d50000;
    font-size: 90%;
    margin-top: 4px;
  }
  
  .successMessage {
    color: #107c10;
    font-size: 90%;
    margin-top: 4px;
  }
  
  .panel {
    background-color: #fff;
    border-top: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .panel_layout_row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .panel_layout_row > * {
    flex: 1 1 100%;
  }
  
  .panel_layout_row > .panel_layout_sidebar {
    flex: 0 0 220px;
    margin-right: 20px;
  }
  
  .panel_layout_sidebar {
    margin-top: 20px;
  }
  
  .panel_layout_sidebar .panel {
    border-top: none;
    box-shadow: none;
    margin-top: 0;
    padding-top: 0;
  }
  
  .panel_layout_sidebar .panel_layout_row {
    display: block;
  }
  
  .panel_layout_sidebar .panel_layout_row > * {
    flex: none;
  }
  
  .pageLevel {
    margin-bottom: 20px;
  }
  
  .pageLevel,
  .panel_layout,
  .panel_layout_row,
  body {
    display: flex;
  }
  
  .pageLevel {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  
  .pageLevel .panel {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .pageLevel .panel .heading {
    margin-bottom: 20px;
  }
  
  .pageLevel .panel .heading h1 {
    font-size: 24px;
    font-weight: 600;
  }
  
  .panel ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .panel ul li {
    margin-bottom: 8px;
  }
  
  .pageLevel .buttons {
    text-align: center;
    margin-top: 20px;
  }
  
  .pageLevel .buttons button {
    margin-right: 8px;
  }
  
  .pageLevel .buttons button:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 480px) {
    .panel_layout_row > .panel_layout_sidebar {
      flex: none;
      margin-right: 0;
    }
  }
  
  // DummyApi component
  ${
    NODE_ENV === 'production' && 
    `
      #dummy-api {
        visibility: none;
        height: 0;
        widht: 0;
        z-index: -9999;
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
    `
  }
  
`