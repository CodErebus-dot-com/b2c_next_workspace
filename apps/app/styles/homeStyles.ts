import css from 'styled-jsx/css';

export default css.global`
  #signin_container {
    display: flex;
  }
  
  #background_branding_container {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right, #0f3e83, #0078d4, #3079ed, #00abec);
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
  
`