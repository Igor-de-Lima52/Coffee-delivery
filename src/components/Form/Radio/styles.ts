import styled from "styled-components";

export const RadioContainer = styled.label`
  padding: 1.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${props => props.theme["white-800"]};
  color: ${props => props.theme["gray-500"]};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 160%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme["gray-100"]};
  }
  &[data-state="true"]{
    background: ${props => props.theme["purple-light"]};
    border: 1px solid ${props => props.theme.purple};
  }
  input{
    display: none;
  }
  svg{
    color: ${props => props.theme.purple};
  }
`;