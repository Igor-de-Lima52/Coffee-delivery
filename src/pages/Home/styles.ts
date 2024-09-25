import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas: "header" "main";
  overflow-y: hidden;
`;

export const ContentContainer = styled.div`
  grid-area: main;
  overflow-y: auto;
  padding: 0 2.4rem;
  
  @media(min-width: 1280px){
    padding: 0 16rem;
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

export const TopicsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  justify-content: space-between;

  > div{
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: ${props => props.theme["gray-500"]};
    font-size: 1.6rem;
  }

  @media (min-width: 768px){
    grid-template-columns: auto auto;
    gap: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 1024px){
    margin-top: 6.6rem;
  }
`;

const BaseContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShoppingContainer = styled(BaseContainer)`
  background: ${props => props.theme["yellow-dark"]};
`;

export const PackageContainer = styled(BaseContainer)`
  background: ${props => props.theme["gray-500"]};
`;

export const ClockContainer = styled(BaseContainer)`
  background: ${props => props.theme.yellow};
`;

export const CoffeeContainer = styled(BaseContainer)`
  background: ${props => props.theme.purple};
`;

export const MenuContainer = styled.section`
  width: 100%;
  > h2{
    font-family: "Baloo 2", sans-serif;
    font-size: 2.8rem;
    line-height: 100%;
    font-weight: 800;
    color: ${props => props.theme["gray-700"]}
  }

  @media (min-width: 1024px){
    > h2{
      font-size: 3.2rem;
      line-height: 130%;
    }
  }
`;