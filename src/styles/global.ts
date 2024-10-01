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
      outline: 1px solid ${props => props.theme["yellow-dark"]};
    }
  }
  body{
    background: ${props => props.theme["white-200"]};
    color: ${props => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }
  
  `;