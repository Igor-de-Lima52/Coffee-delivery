import styled from "styled-components";

export const CartTotalContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme["white-400"]};
  border-radius: 6px 36px;
  margin-top: 1.5rem;

  > span{
    display: block;
    width: 100%;
    height: 1px;
    margin: 24px 0;
    background: ${props => props.theme["white-800"]};
  }

  @media(width < 350px){
    padding: 1.2rem;
  }

  @media(min-width: 1440px){
    padding: 4rem;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  
  > div{
    display: flex;
    gap: 2rem;

    > img{
      width: 6.4rem;
    }

    > div{
      display: flex;
      flex-direction: column;
      gap: .8rem;

      > span{
        font-size: 1.6rem;
        line-height: 130%;
        color: ${props => props.theme["gray-700"]};
      }
    }
  }

  > aside{
    font-size: 1.6rem;
    line-height: 130%;
    font-weight: bold;
    color: ${props => props.theme["gray-500"]};
  }

  @media(width < 365px){
    > div{
      gap: .8rem;
    }
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: .8rem;

  > button{
    padding: .8rem;
    background: ${props => props.theme["white-800"]};
    display: flex;
    gap: .4rem;
    align-items: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
  }
  
  > button svg{
    color: ${props => props.theme.purple};
  }

  > button span{
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${props => props.theme["gray-500"]};
  }
`;

export const CartTotalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-500"]};
    line-height: 130%;

    > span:first-child{
      font-size: 1.4rem;
    }

    > span:last-child{
      font-size: 1.6rem;
    }
  }

  > div:last-child{
    color: ${props => props.theme["gray-700"]};

    > span{
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  padding: 1.2rem;
  cursor: pointer;
  transition: all .2s;
  margin-top: 2.4rem;

  &:hover{
    background: ${props => props.theme["yellow-dark"]};
  }
`;