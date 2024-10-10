import { Trash } from "phosphor-react";

import { Fragment } from "react/jsx-runtime";
import { QuantityInput } from "../../../../components/Form/QuantityInput";

import { useCart } from "../../../../hooks/useCart";

import { coffees } from "../../../../../data.json";
import { CartTotalContainer, CartTotalInfo, CheckoutButton, Coffee, CoffeeInfo } from "./styles";

interface CardProps {
  formId: string;
}

export function CartTotal({formId }: CardProps){
  const { cart, incrementItemQuantity, decrementItemQuantity, removeItem} = useCart();
  
  const shippingPrice = 3.5;
  
  const coffeesInCart = cart.map(item => {
    const coffeeInfo = coffees.find(coffee => coffee.id === item.id)

    if(!coffeeInfo){
      throw new Error("Invalid coffee.");
    }

    return{
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousPrice, currentItem) => {
    return (previousPrice += currentItem.price * currentItem.quantity)
  }, 0);
  
  function handleItemIncrement(itemId: number){
    incrementItemQuantity(itemId);
  }


  function handleItemDecrement(itemId: number){
    decrementItemQuantity(itemId);
  }


  function handleItemRemove(itemId: number){
    removeItem(itemId);
  }
  
  return(
    <CartTotalContainer>
      {coffeesInCart.map(coffee => (
        <Fragment key={coffee.id}>
          <Coffee>
            <div>
              <img src={coffee.imageUrl} alt={coffee.title} />
              <div>
                <span>{coffee.title}</span>
                <CoffeeInfo>
                  <QuantityInput 
                    quantity={coffee.quantity}
                    incrementQuantity={() => handleItemIncrement(coffee.id)}
                    decrementQuantity={() => handleItemDecrement(coffee.id)}
                  />
                  <button onClick={() => handleItemRemove(coffee.id)}>
                    <Trash />
                    <span>Remove</span>
                  </button>
                </CoffeeInfo>
              </div>
            </div>
            <aside>$ {coffee.price?.toFixed(2)}</aside>
          </Coffee>
          <span/>
        </Fragment>
      ))}
      <CartTotalInfo>
        <div>
          <span>Total items</span>
          <span>
              {new Intl.NumberFormat("us", {
                currency: "USD",
                style: "currency",
              }).format(totalItemsPrice)}
          </span>
        </div>
        <div>
          <span>Delivery</span>
          <span>
            {new Intl.NumberFormat("us", {
              currency: "USD",
              style: "currency",
            }).format(shippingPrice)}
          </span>
        </div>
        <div>
          <span>Total</span>
          <span>
            {new Intl.NumberFormat("us", {
              currency: "USD",
              style: "currency",
            }).format(totalItemsPrice + shippingPrice)}
          </span>
        </div>
      </CartTotalInfo>
      <CheckoutButton type="submit" form={formId} >
        Confirm order
      </CheckoutButton>
    </CartTotalContainer>
  )
}