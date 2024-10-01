import styled from "styled-components";

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:nth-child(1){
    width: 40%;
  }

  @media (min-width: 1440px){
    gap: 1.6rem;
  }
`;

export const InputWrapper = styled.div`
  > input{
    width: 100%;
    height: 4.2rem;
    border-radius: 4px;
    padding: 1.2rem;
    border: 1px solid ${props => props.theme["white-800"]};
    background: ${props => props.theme["white-600"]};
    color: ${props => props.theme["gray-500"]};
    font-size: 1.4rem;
    line-height: 130%;

    &::placeholder{
      color: ${props => props.theme["gray-300"]};
    }
  }
`;

const BaseCustomerWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  @media(min-width: 1280px){
    > div:first-child{
      width: 30%;
    }
  }
`;

export const CustomerNumberHouseWrapper = styled(BaseCustomerWrapper)`
  > div:last-child{
    width: 70%;
  }
`;

export const CustomerHouseCityWrapper = styled(BaseCustomerWrapper)`
  flex-direction: column;

  > div:last-child{
    display: flex;
    gap: 1.2rem;

      > div:first-child{
        width: 70%;
      }
      > div:last-child{
        width: 30%;
      }
  }
  @media(min-width: 1280px){
    flex-direction: row;
    
    > div:last-child{
      width: 70%;

      > div:first-child{
        width: 80%;
      }
      > div:last-child{
        width: 20%;
      }
    }
    
  }
`;