import { useEffect, useState } from "react";
import { 
  CardContainer, 
  CoffeeImg, 
  ControlContainer, 
  OrderContainer, 
  PriceContainer, 
  TagsContainer 
} from "./styles";
import { Check, ShoppingCart } from "phosphor-react";

import { QuantityInput } from "../Form/QuantityInput";
import { useCart } from "../../hooks/useCart";

type CardProps = {
  coffee:{
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
  }
}

export function Card({ coffee }: CardProps){
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { addItem } = useCart();

  function incrementQuantity(){
    setQuantity((state) => state + 1);
  }

  function decrementQuantity(){
    if(quantity > 1){
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem(){
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if(isItemAdded){
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000)
    }

    return () => {
      if(timeout){
        clearTimeout(timeout);
      }
    }

  }, [isItemAdded]);

  return(
    <CardContainer>
      <CoffeeImg src={coffee.imageUrl} />
      <TagsContainer>
        {
          coffee.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))
        }
      </TagsContainer>
      <h3>{coffee.title}</h3>
      <span>{coffee.description}</span>
      <ControlContainer>
        <PriceContainer>
          <span>$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </PriceContainer>
        <OrderContainer>
          <QuantityInput 
            quantity={quantity} 
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {
              isItemAdded ? (
                <Check weight="fill" size={22} />
              ): (
                <ShoppingCart weight="fill" size={22} />
              )
            }
          </button>
        </OrderContainer>
      </ControlContainer>
    </CardContainer>
  )
}