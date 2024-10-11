import styled from "styled-components";
import { ThemeLightProps } from "../Radio/styles";

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const TextInputContainer = styled.div<ThemeLightProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${props => props.theme["base-button"]};
  background: ${props => props.theme["base-input"]};
  transition: all .2s;

  &[data-state="focused"]{
    border-color: ${props => props.theme["yellow-dark"]}
  }

  &[data-state="blurred"]{
    border-color: ${props => props.theme["base-button"]};;
  }

  input{
    color: ${props => props.isthemelighton 
      ? props.theme["base-text"] 
      : props.theme["base-label"]};
    width: 100%;
    background: transparent;
    border-radius: 6px;
    border: none;
    padding: 1.2rem;
    outline: none;


    
    &::placeholder{
      color: ${props => props.isthemelighton 
        ? props.theme["base-label"] 
        : props.theme["base-text"]};
    }
  }

  span{
    color: ${props => props.isthemelighton 
      ? props.theme["base-label"] 
      : props.theme["base-text"]};
    padding-right: 1.2rem;
    font-size: 1.4rem;
    line-height: 130%;
    font-style: italic;
  }
`;

export const ErrorMessageContainer = styled.div`
  font-size: 1.2rem;
  line-height: 130%;
  color: red;
`;
