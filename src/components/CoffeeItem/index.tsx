import { CoffeeItemContainer, TagsContainer, TextContainer } from "./styles";

export function CoffeeItem(){
  return(
    <CoffeeItemContainer>
      <img />
      <TagsContainer>
        <span>Tradicional</span>
        <span>Alcoólico</span>
      </TagsContainer>
      <TextContainer>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </TextContainer>
    </CoffeeItemContainer>
  );
}