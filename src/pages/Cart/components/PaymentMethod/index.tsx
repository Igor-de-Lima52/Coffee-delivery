import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodContainer } from "./styles";

export function PaymentMethod(){
  return(
    <PaymentMethodContainer>
      <div>
        <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          Credit Card
        </label>
        <input type="radio" id="debitCard" name="paymentMethod" value="debitCard" />
        <label htmlFor="debitCard">
          <Bank size={16}/>
          Debit Card
        </label>
        <input type="radio" id="cash" name="paymentMethod" value="cash" />
        <label htmlFor="cash">
          <Money size={16} />
          Cash
        </label>
      </div>
    </PaymentMethodContainer>
  )
}