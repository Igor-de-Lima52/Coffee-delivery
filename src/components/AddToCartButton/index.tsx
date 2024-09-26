import { ShoppingCart } from "phosphor-react";

import { ButtonContainer } from "./styles";

export function AddToCartButton(){
  return(
    <ButtonContainer>
      <ShoppingCart weight="fill" size={22}/>
    </ButtonContainer>
  );
}