import styled from "styled-components";

export const QuantityContainer = styled.div`
  padding: .8rem;
  background: ${props => props.theme["base-button"]};
  border-radius: 6px;
  display: flex;
  gap: .8rem;

  > button{
    background: transparent;
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;
  }

  > button svg{
    color: ${props => props.theme.purple};
    transition: all .2s;
    
    &:hover{
      color: ${props => props.theme["purple-dark"]};
    }
  }

  > span{
    padding-top: .2rem;
    color: ${props => props.theme["base-title"]};
  }
`;