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
`