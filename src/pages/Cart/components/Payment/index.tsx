import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Radio } from "../../../../components/Form/Radio";
import { PaymentContainer, PaymentErrorMessage, PaymentHeading, PaymentOptions } from "./styles";
import { FieldError, useFormContext } from "react-hook-form";

const getFieldError = (error: any): FieldError | undefined => {
  return error && "type" in error ? (error as FieldError): undefined;
}

export function Payment(){
  const { register, watch, formState: {errors} } = useFormContext();

  const selectedPaymentMethod = watch("paymentMethod");

  const paymentError = getFieldError(errors.paymentMethod);

  return(
    <PaymentContainer>
      <PaymentHeading>
        <CurrencyDollar size={22}/>
        <div>
          <span>Payment</span>
          <p>The payment is made on delivery. Choose the way you wish pay</p>
        </div>
      </PaymentHeading>
      <PaymentOptions>
        <div>
          <Radio 
            isSelected={selectedPaymentMethod === "credit"}
            {...register("paymentMethod")}
            value="credit"
          >
            <CreditCard size={16}/>
            <span>Credit card</span>
          </Radio>
          <Radio 
            isSelected={selectedPaymentMethod === "debit"}
            {...register("paymentMethod")}
            value="debit"
          >
            <Bank size={16}/>
            <span>Debit card</span>
          </Radio>
          <Radio 
            isSelected={selectedPaymentMethod === "cash"}
            {...register("paymentMethod")}
            value="cash"
          >
            <Money size={16}/>
            <span>Cash</span>
          </Radio>
        </div>
          {errors.paymentMethod && (
            <PaymentErrorMessage role="alert">
              {paymentError?.message && <span>{paymentError.message}</span>}
            </PaymentErrorMessage>
          )}
      </PaymentOptions>
    </PaymentContainer>
  )
}