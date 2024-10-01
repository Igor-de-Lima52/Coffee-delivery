import styled from "styled-components";

export const PaymentMethodContainer = styled.fieldset`
  width: 100%;
  border: 0;
  outline: 0;

  > div{
    width: 100%;
    display: flex;
    gap: 1.2rem;
  }
  input[type="radio"]{
    display: none;
  }
  
  label{
    font-size: 1rem;
    padding: 1.6rem;
    background: ${props => props.theme["white-800"]};
    color: ${props => props.theme["gray-500"]};
    border-radius: 6px;
    border: 1px solid ${props => props.theme["white-800"]};
    cursor: pointer;
    transition: background .3s, color .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    text-transform: uppercase;
    width: 100%;
  }
  input[type="radio"]:hover + label{
    background: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]};
  }
  input[type="radio"]:checked + label{
    border: 1px solid ${props => props.theme.purple};
    background: ${props => props.theme["purple-light"]};
  }

  @media (min-width: 1024px){
    label{
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1280px){
    label{
      font-size: 1.4rem;
    }
  }
`;