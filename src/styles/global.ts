import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
   font-size : 62.5%;
  }
  body, button, textarea, input{
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    
    &:focus{
      outline: 0;
    }
  }
  body{
    background: ${props => props.theme["background"]};
    color: ${props => props.theme["base-label"]};
    -webkit-font-smoothing: antialiased;
  }
  
  `;