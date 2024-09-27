import { useContext } from "react";
import { AddToCartButton } from "../AddToCartButton";
import { InputNumberOfQuantity } from "../InputNumberOfQuantity";
import { CoffeeContext } from "../../context/CoffeesContext";

import { 
  CoffeeItemContainer, 
  CoffeeListContainer, 
  PriceAndCartContainer, 
  PriceContainer, 
  TagsContainer, 
  TextContainer 
} from "./styles";


export function CoffeeList(){
  const { coffeeDish } = useContext(CoffeeContext);

  return(
    <CoffeeListContainer>
      {
        coffeeDish.map(coffee => (
          <CoffeeItemContainer key={coffee.id}>
            <img src={coffee.imageUrl} />
            <TagsContainer>
              {
                coffee.tags.map((tag, index) => 
                  <span key={index}>{tag}</span>
                )
              }
            </TagsContainer>
            <TextContainer>
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>
            </TextContainer>
            <PriceAndCartContainer>
              <PriceContainer>
                <span>$</span>
                <span>{coffee.price.toFixed(2)}</span>
              </PriceContainer>
              <div>
                <InputNumberOfQuantity/>
                <AddToCartButton/>  
              </div>
            </PriceAndCartContainer>
          </CoffeeItemContainer>
        ))
      }
    </CoffeeListContainer>
  )
}