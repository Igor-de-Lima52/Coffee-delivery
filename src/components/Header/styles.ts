import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  img{
    cursor: pointer;
  }

  @media (min-width: 768px){
    padding: 3.2rem 0;
  }
  
  @media(min-width: 1280px){
    padding: 3.2rem 16rem;
  } 
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  button{
    cursor: pointer;
  }

  button:first-child{
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
    border: 0;
    line-height: 0;
    padding: .8rem;
    border-radius: 6px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    svg{
      color: ${props => props.theme.purple};
    }
  }

  button:last-child{
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    border: 0;
    line-height: 0;
    padding: .8rem;
    border-radius: 6px;
  }
`;