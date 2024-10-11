import styled from "styled-components";

export interface ThemeLightProps{
  isthemelighton?: boolean;
}

export const RadioContainer = styled.label<ThemeLightProps>`
  padding: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${props => props.isthemelighton ? props.theme["base-button"]: props.theme["base-hover"]};
  color: ${props => props.theme["base-text"]};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 160%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme["base-hover"]};
  }
  &[data-state="true"]{
    background: ${props => props.isthemelighton ? props.theme["purple-light"]: props.theme["base-button"]};
    border: 1px solid ${props => props.theme.purple};
  }
  input{
    display: none;
  }
  svg{
    color: ${props => props.theme.purple};
  }
`;