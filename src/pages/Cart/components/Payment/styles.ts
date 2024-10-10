import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme["white-400"]};
  border-radius: 6px;
  margin-top: 1.5rem;

  @media(min-width: 1440px){
    padding: 4rem;
  }
`;

export const PaymentHeading = styled.div`
  display: flex;
  gap: .8rem;

  svg{
    color: ${props => props.theme["purple"]};
  }

  span{
    margin-bottom: 2px;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${props => props.theme["gray-700"]};
  }

  p{
    font-size: 1.4rem;
    line-height: 130%;
    color: ${props => props.theme["gray-500"]};
  }
`;

export const PaymentOptions = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 3.2rem;
  }

  > div:last-child{
    margin-top: 2rem;
  }

  @media (min-width: 768px){
    > div{
      flex-direction: row;
    }
  }
`;

export const PaymentErrorMessage = styled.div`
  font-size: 1.2rem;
  line-height: 130%;
  color: red;
`;