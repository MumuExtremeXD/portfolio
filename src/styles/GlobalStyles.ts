import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

  html {
    scroll-behavior: smooth;
  }


  html, body, #root {
    max-width:100vw;
    max-height:100vh;
    
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }


  *::-webkit-scrollbar {

  width: 9px;
  }
  
  *::-webkit-scrollbar-track {
      background-color:#DDDDDD;
  }

  *::-webkit-scrollbar-thumb {
    background: #555; 
    border-radius: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  *, button, input {
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --blue: #B50000;
    --yellow: #fff;
    --white:#FFFFFF;
    --black:#231F20;
    --green:#AFFC41;
    --red:#0043D5;
    --gray:#444;
  }
`;
