import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme["white-400"]};
  border: 0;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;

  transition: background .3s;
  
  &:hover{
    background: ${props => props.theme.purple};
  }
`;