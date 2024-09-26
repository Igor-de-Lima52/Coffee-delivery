import { Minus, Plus } from "phosphor-react";
import { QuantityContainer } from "./styles";
import { useState } from "react";

export function InputNumberOfQuantity(){
  const [quantity, setQuantity] = useState(0);

  function AddOneOfTheQuantity(){
    setQuantity(prevState => Math.min(prevState + 1, 10));
  }

  function SubtractOneOfTheQuantity(){
    setQuantity(prevState => Math.max(prevState - 1, 0));
  }

  return(
    <QuantityContainer>
      <button onClick={SubtractOneOfTheQuantity}>
        <Minus size={14}/>
      </button>
      <span>{quantity}</span>
      <button onClick={AddOneOfTheQuantity}>
        <Plus size={14}/>
      </button>
    </QuantityContainer>
  );
}