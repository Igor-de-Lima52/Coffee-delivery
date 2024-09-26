import expresso from "../../assets/expresso.svg";
import { AddToCartButton } from "../AddToCartButton";
import { InputNumberOfQuantity } from "../InputNumberOfQuantity";
import { 
  CoffeeItemContainer, 
  PriceAndCartContainer, 
  PriceContainer, 
  TagsContainer, 
  TextContainer 
} from "./styles";

export function CoffeeItem(){
  return(
    <CoffeeItemContainer>
      <img src={expresso} />
      <TagsContainer>
        <span>Tradicional</span>
        <span>Alcoólico</span>
      </TagsContainer>
      <TextContainer>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </TextContainer>
      <PriceAndCartContainer>
        <PriceContainer>
          <span>R$</span>
          <span>9,90</span>
        </PriceContainer>
        <div>
          <InputNumberOfQuantity/>
          <AddToCartButton/>  
        </div>
      </PriceAndCartContainer>
    </CoffeeItemContainer>
  );
}