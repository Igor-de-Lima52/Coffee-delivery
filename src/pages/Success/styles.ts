import styled from "styled-components";

export const SuccessContainer = styled.main`
  width: 100%;
  margin-top: 3rem;
  padding: 0 2.4rem 5rem;
  display: flex;
  flex-direction: column;
  
  > h3{
    font-family: "Baloo 2", sans-serif;
    color: ${props => props.theme["yellow-dark"]};
    font-size: 3.2rem;
    font-weight: bold;
  }
  
  > p{
    color: ${props => props.theme["gray-700"]};
    font-size: 2rem;
    line-height: 130%;
    margin-bottom: 4rem;
  }
  
  > div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  > div img{
    display: none;
    max-width: 40rem; 
  }
  
  @media(min-width: 560px){
    align-items: center;
  }
  @media(min-width: 1280px){
    margin-top: 8rem;
    padding: 0 15rem;
    align-items: flex-start;
    
    > div{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    > div img{
      display: block;
    }
  }
`;

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  max-width: 52.5rem;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${props =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};

  @media(min-width: 560px){
    align-items: center;
    width: 52.5rem;
  }

  @media(min-width: 820px){
    max-width: 70rem;
    width: 70rem;
  }

  @media(min-width: 1280px){
    max-width: 52.5rem;
    width: 52.5rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background: ${props => props.theme.white};
  border-radius: 6px 36px;

  @media(min-width: 768px){
    padding: 4rem;
  }
`;

export const TopicContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  color: ${props => props.theme["gray-500"]};

  > div{
    font-size: 1.2rem;
    line-height: 130%;
  }
  > div:first-child span{
    font-weight: 400;
  }
  > div span{
    font-weight: bold;
  }
  > div p span{
    font-weight: bold;
  }

  @media(min-width: 768px){
    > div{
      font-size: 1.6rem;
    }
  }
  @media(min-width: 820px){
    > div{
      font-size: 2rem;
    }
  }
  @media(min-width: 1280px){
    > div{
      font-size: 1.6rem;
    }
  }
`;

const BaseContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const LocalContainer = styled(BaseContainer)`
  background: ${props => props.theme.purple};
`;

export const TimerContainer = styled(BaseContainer)`
  background: ${props => props.theme["yellow-dark"]};
`;

export const PaymentContainer = styled(BaseContainer)`
  background: ${props => props.theme["yellow-dark"]};
`;