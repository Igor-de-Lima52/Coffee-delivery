import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${props => props.theme["white-400"]};
  padding: 0 2rem 2rem;
  border-radius: 6px 36px;
  height: 31rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  > h3{
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1.6rem;
    color: ${props => props.theme["gray-700"]};
  }

  > span{
    margin-top: .8rem;
    width: 100%;
    color: ${props => props.theme["gray-300"]};
    font-size: 1.4rem;
    line-height: 100%;
    text-align: center;
  }
`;

export const CoffeeImg = styled.img`
  margin-top: -2rem;
  max-width: 12rem;
  max-height: 12rem;
  align-self: center;
`;

export const TagsContainer = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span{
    padding: 4px 8px;
    border-radius: 3rem;
    font-size: 1rem;
    line-height: 130%;
    font-weight: bold;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    text-transform: uppercase;
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: ${props => props.theme["gray-900"]};

  span:first-child{
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
  }

  span:last-child{
    font-family: "Baloo 2", sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`;

export const OrderContainer = styled.div<{$itemAdded?: boolean}>`
  display: flex;
  align-items: center;
  gap: .8rem;

  > button{
    background: ${props => 
      props.$itemAdded ? props.theme["yellow-dark"] : props.theme["purple-dark"]};
    transition: background-color .2s;
    border-radius: 6px;
    border: 0;
    padding: 8px;
    display: flex;
    cursor: pointer;

    &:hover{
      background: ${props =>
         props.$itemAdded ? props.theme.yellow : props.theme.purple};
    }
  }

  > button svg{
    color: ${props => props.theme.white};
  }
`;