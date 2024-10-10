import { CartContainer, InfoContainer } from "./styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";


import { schema } from "../../validationSchema";
import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { useCart } from "../../hooks/useCart";
import { CartTotal } from "./components/CartTotal";

type FormInputs = {
  zipCode: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash"
}

export function Cart(){
  const { 
    cart, 
    checkout, 
  } = useCart();

  const dataForm = useForm<FormInputs>({
    resolver: zodResolver(schema)
  });

  const { handleSubmit } = dataForm;
  
  const handleOrderCheckout: SubmitHandler<FormInputs> = data => {
    if(cart.length === 0){
      return alert("You need to have a minimum one coffee added in the cart");
    }

    checkout(data);
  }

  return(
    <CartContainer>
      <FormProvider {...dataForm}>
        <InfoContainer>
          <h3>Complete your order</h3>
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <Address />
            <Payment />
          </form>
        </InfoContainer>
        <InfoContainer>
          <h3>Selected Coffees</h3>
          <CartTotal formId="order" />
        </InfoContainer>
      </FormProvider>
    </CartContainer>
  )
}