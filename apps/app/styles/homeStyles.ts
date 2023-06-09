import css from 'styled-jsx/css';

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
  
  .panel {
    background-color: #fff;
    border-top: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
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