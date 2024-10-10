import styled from "styled-components";

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme["white-400"]};
  border-radius: 6px;
  margin-top: 1.5rem;

  @media(min-width: 1440px){
    padding: 4rem;
  }
`;

export const AddressHeading = styled.div`
  display: flex;
  gap: .8rem;

  svg{
    color: ${props => props.theme["yellow-dark"]};
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

export const AddressForm = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:first-child{
    width: 50%;
  }

  @media(min-width: 768px){
    > div:first-child{
      width: 35%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  > div:first-child{
    width: 35%;
  }

  &:last-child{
    flex-direction: column;
    > div:first-child{
      width: 100%;
    }
    
    > div.city{
      display: flex;
      gap: 1.2rem;
      
      > div:first-child{
        width: 75%;
      }

      > div:last-child{
        width: 25%;
      }
    }
  }

  @media(min-width: 768px){
    > div:last-child{
      width: 65%;
    }

    &:last-child{
      flex-direction: row;

      > div:first-child{
        width: 35%;
      }
      > div.city{
      
        > div:first-child{
          width: 80%;
        }

        > div:last-child{
          width: 20%;
        }
      }
    }
  }
`;