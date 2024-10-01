import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { AddressContainer, CartContainer, CoffeeSelectedContainer, DivTitleInfo, PaymentFormContainer } from "./styles";
import { FormInputs } from "./components/FormInputs";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormProvider, useForm } from "react-hook-form";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = zod.object({
  zipCode: zod.number()
    .min(5, "You need to type a valid Zip Code")
    .max(5, "You need to type a valid Zip Code"),
  street: zod.string().min(3, "Street is required").max(100),
  number: zod.number().min(1, "Number is required").max(8),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, "Neighborhood is required").max(50),
  city: zod.string().min(3, "City is required").max(50),
  state: zod.string().length(2, "Must have 2 characters"),
  wayOfPayment: zod.enum(["creditCard", "debitCard", "cash"])
})

type FormData = zod.infer<typeof schema>;

export function Cart(){
  const dataForm = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const { handleSubmit } = dataForm;
  
  function handleFinishOrder(data: FormData){
    console.log(data);
  }

  return(
    <CartContainer>
      <form onSubmit={handleSubmit(handleFinishOrder)}>
        <FormProvider {...dataForm}>
          <AddressContainer>
            <h3>Complete your order</h3>
            <div>
              <div>
                <MapPinLine size={22}/>
                <DivTitleInfo>
                  <span>Delivery Address</span>
                  <p>Type your address where you would like to receive your order </p>
                </DivTitleInfo>
              </div>
              <FormInputs/>
            </div>
          </AddressContainer>
          <PaymentFormContainer>
            <div>
              <CurrencyDollar size={22}/>
              <DivTitleInfo>
                <span>Pagamento</span>
                <p>The payment is made on delivery. Choose the way you wish pay</p>
              </DivTitleInfo>
            </div>
              <PaymentMethod />
          </PaymentFormContainer>
          <CoffeeSelectedContainer>

          </CoffeeSelectedContainer>
        </FormProvider>
      </form>
    </CartContainer>
  )
}