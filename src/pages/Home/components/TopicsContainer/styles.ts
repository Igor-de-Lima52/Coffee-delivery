import styled from "styled-components";

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