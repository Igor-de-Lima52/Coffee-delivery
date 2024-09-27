import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: grid;
  margin-top: 5.4rem;
  gap: 3.2rem;

  @media(min-width: 530px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 1280px){
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CoffeeItemContainer = styled.div`
  height: 31rem;
  background: ${props => props.theme["white-400"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px 6px 36px;

  > img{
    border-radius: 50%;
    margin: -2rem 0 1.2rem;
  }
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

export const PriceAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 3.6rem;

  > div:last-child{
    display: flex;
    gap: .8rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: .2rem;
  align-items: flex-end;
  line-height: 130%;
  color: ${props => props.theme["gray-900"]};
  
  span:first-child{
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }

  span:last-child{
    font-family: "Baloo 2", sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
  }
`;