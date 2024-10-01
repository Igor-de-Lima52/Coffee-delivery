import styled from "styled-components";

export const CartContainer = styled.main`
  /* margin: 3rem 0 2rem; */
  display: flex;
  justify-content: center;
  overflow-y: auto;

  form{
    display: grid;
    grid-template-columns: 34rem;
    grid-template-rows: 40rem 20rem;
    grid-template-areas: "address" "payment" "coffee";
    gap: 2rem;
  }

  @media(width < 365px){
    form{
      grid-template-columns: 32rem;
    }
  }
  @media(min-width: 410px){
    form{
      grid-template-columns: 38rem;
    }
  }
  @media(min-width: 768px){
    form{
      grid-template-columns: 70rem;
    }
  }
  @media(min-width: 1024px){
    form{
      grid-template-columns: 50rem 40rem;
      grid-template-rows: 38rem 30rem;
      gap: 4rem;
      grid-template-areas: 
      "address coffee"
      "payment coffee"
      ;
    }
  }
  @media (min-width: 1280px){
    form{
      grid-template-columns: 64rem 44.8rem;
      grid-template-rows: 30rem 20rem;
      gap: 2rem;
    }
  }
  @media (min-width: 1440px){
    form{
      grid-template-columns: 64rem 44.8rem;
      grid-template-rows: 41rem 20.7rem;
      gap: 3.2rem;
    }
  }
`;

export const AddressContainer = styled.div`
  grid-area: address;
  border-radius: 6px;

  > h3{
    font-size: 1.8rem;
    line-height: 130%;
    font-weight: bold;
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme["gray-700"]};
    margin-bottom: .4rem;
  }
  
  > div:nth-child(2){
    background: ${props => props.theme["white-400"]};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    
    > div:nth-child(1){
      display: flex;
      gap: .8rem;
      margin-bottom: 1.4rem;
    }
  }

  svg{
    color: ${props => props.theme["yellow-dark"]}
  }

  @media(min-width: 1280px){
    > div:nth-child(2){
      padding: 1.4rem;
    }
  }

  @media (min-width: 1440px){
    > h3{
      margin-bottom: 1.5rem;
    }
    > div:nth-child(2){
      padding: 4rem;
    
      > div:nth-child(1){
        margin-bottom: 3.2rem;
      }
    }
  }
`;

export const PaymentFormContainer = styled.div`
  grid-area: payment;
  background: ${props => props.theme["white-400"]};
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 6px;
  height: 20.7rem;

  > div{
    display: flex;
    gap: .8rem;
    margin-bottom: 1.4rem;
  }

  svg{
    color: ${props => props.theme.purple};
  }

  @media(min-width: 1280px){
    padding: 1.4rem;
  }
  @media(min-width: 1440px){
    padding: 4rem;
    > div{
      margin-bottom: 3.2rem;
    }
  }
`;

export const CoffeeSelectedContainer = styled.div`

  grid-area: coffee;
  background-color: orange;
`;

export const DivTitleInfo = styled.div`
  
  > span{
    color: ${props => props.theme["gray-700"]};
    font-size: 1.6rem;
    line-height: 130%;
  }

  > p{
    color: ${props => props.theme["gray-500"]};
    font-size: 1.4rem;
    line-height: 130%;
  }
`;