import { Minus, Plus } from "phosphor-react";
import { QuantityContainer } from "./styles";

type InputProps = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityInput({ 
  quantity, 
  incrementQuantity, 
  decrementQuantity 
}: InputProps){
  return(
    <QuantityContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14}/>
      </button>
      <span>{quantity}</span>
      <button>
        <Plus size={14} onClick={incrementQuantity}/>
      </button>
    </QuantityContainer>
  )
}