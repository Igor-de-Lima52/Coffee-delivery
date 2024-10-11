import styled from "styled-components";

export const CartContainer = styled.main`
  padding: 0 2rem 1.6rem;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    width: 6px;
    background: ${props => props.theme["base-label"]};
    border-radius: 2rem;
  }

  @media(min-width: 768px){
    padding: 0;
  }

  @media (min-width: 1024px){
    display: flex;
    gap: 2rem;

    > div:first-child{
      width: 60%;
    }

    > div:last-child{
      width: 40%;
    }
  }
  
  @media(min-width: 1280px){
    padding: 0 15rem 1.6rem;
  
    &::-webkit-scrollbar{
      width: 10px;
    }
    &::-webkit-scrollbar-thumb{
      width: 10px;
      background: ${props => props.theme["base-label"]};
      border-radius: 2rem;
    }
  }

  @media(min-width: 1440px){
    gap: 3.2rem;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 2rem;

  > h3{
    font-family: "Baloo 2", sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
  }

  > form{
    padding-bottom: 2rem;
  }

  @media(min-width: 1024px){
    margin-bottom: 0;
  }
`;