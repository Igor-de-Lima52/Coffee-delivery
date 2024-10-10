import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  grid-area: main;
  overflow-y: auto;
  padding: 0 2.4rem 5rem;

  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar-thumb{
    width: 6px;
    background: ${props => props.theme["gray-300"]};
    border-radius: 2rem;
  }

  
  @media(min-width: 1280px){
    padding: 0 15rem 5rem;
  
    &::-webkit-scrollbar{
      width: 10px;
    }
    &::-webkit-scrollbar-thumb{
      width: 10px;
      background: ${props => props.theme["gray-300"]};
      border-radius: 2rem;
    }
  }
`;

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  > img{
    display: none;
  }

  @media(min-width: 1024px){
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img{
      display: inline-block;
      width: 40rem;
    }
  }
  @media(min-width: 1280px){
    > img{
      margin-top: 3.6rem;
      width: 44rem;
    }
  }
  @media (min-width: 1440px){
    > img{
      margin-top: 7.2rem;
      width: 47.6rem;
    }
  }
`;

export const TextContainer = styled.div`
  > h1{
    font-family: "Baloo 2", sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 110%;
    color: ${props => props.theme["gray-900"]};
    margin-top: 3rem;
  }

  > p{
    margin-top: 1.4rem;
    font-size: 1.8rem;
    color: ${props => props.theme["gray-700"]}
  }
  @media(width < 420px){
    > h1{
      font-size: 2.8rem;
    }
    > p{
      font-size: 1.6rem;
    }
  }
  @media(min-width: 768px){
    > h1{
      font-size: 3.6rem;
    }
    > p{
      font-size: 2rem;
    }
  }
  @media(min-width: 1024px){
    max-width: 58.8rem;
    > h1{
      font-size: 4rem;
      margin-top: 5rem;
      line-height: 130%;
    }

    > p{
      margin-top: 1.6rem;
      font-size: 2rem;
    }
  }
  @media (min-width: 1440px){
    > h1{
      margin-top: 9.4rem;
      font-size: 4.8rem;
    }
  }
`;

export const MenuContainer = styled.section`
  width: 100%;
  margin-top: 4rem;

  > h2{
    font-family: "Baloo 2", sans-serif;
    font-size: 2.8rem;
    line-height: 100%;
    font-weight: 800;
    color: ${props => props.theme["gray-700"]};
  }

  > div{
    width: 100%;
    margin-top: 5rem;
    display: grid;
    gap: 3.2rem;
  }

  @media(min-width: 524px){
    > div{
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px){
    margin-top: 0;

    > div{
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }

    > h2{
      font-size: 3.2rem;
      line-height: 130%;
    }
  }
  @media(min-width: 1280px){
    > div{
      grid-template-columns: repeat(4, 1fr);
      gap: 3.2rem;
    }
  }
`;