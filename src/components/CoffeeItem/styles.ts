import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  height: 31rem;
  background: ${props => props.theme["white-400"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;

  > span{
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    padding: 4px 8px;
    border-radius: 3rem;
  }
`;

export const TextContainer = styled.div`
  max-width: 21.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.6rem;
  
  > h3{
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme["gray-700"]};
    margin-bottom: .8rem;
  }

  > p{
    font-size: 1.4rem;
    color: ${props => props.theme["gray-300"]};
    line-height: 100%;
    text-align: center;
  }

  @media(min-width: 768px){
    > p{
      line-height: 130%;
    }
  }
`;