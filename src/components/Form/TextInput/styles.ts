import styled from "styled-components";


export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${props => props.theme["white-800"]};
  background: ${props => props.theme["white-600"]};
  transition: all .2s;

  &[data-state="focused"]{
    border-color: ${props => props.theme["yellow-dark"]}
  }

  &[data-state="blurred"]{
    border-color: ${props => props.theme["white-800"]};;
  }

  input{
    color: ${props => props.theme["gray-500"]};
    width: 100%;
    background: transparent;
    border-radius: 6px;
    border: none;
    padding: 1.2rem;
    outline: none;

    &::placeholder{
      color: ${props => props.theme["gray-300"]};
    }
  }

  span{
    color: ${props => props.theme["gray-300"]};
    padding-right: 1.2rem;
    font-size: 1.4rem;
    line-height: 130%;
    font-style: italic;
  }
`;

export const ErrorMessageContainer = styled.div`
  font-size: 1.2rem;
  line-height: 130%;
  color: red;
`;
