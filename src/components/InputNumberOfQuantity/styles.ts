import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  background: ${props => props.theme["white-800"]};
  color: ${props => props.theme["gray-900"]};
  padding: .8rem;
  border-radius: 6px;

  > span{
    font-size: 1.6rem;
    font-weight: 400;
    width: 2rem;
    text-align: center;
  }
  > button{
    border: 0;
    background: transparent;
    color: ${props => props.theme.purple};
    line-height: 0;
    cursor: pointer;
  }
`;