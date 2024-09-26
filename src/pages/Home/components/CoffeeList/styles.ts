import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.2rem;
  margin-top: 5.4rem;  

  @media(min-width: 600px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 900px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px){
    grid-template-columns: repeat(4, 1fr);
  }
`;