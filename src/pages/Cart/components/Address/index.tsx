import { MapPinLine } from "phosphor-react";
import { TextInput } from "../../../../components/Form/TextInput";
import { AddressContainer, AddressForm, AddressHeading, InputWrapper } from "./styles";
import { FieldError, useFormContext } from "react-hook-form";

export function Address(){
  const { register, formState: {errors}} = useFormContext();
  
  const getFieldError = (error: any): FieldError | undefined => {
    return error && "type" in error ? (error as FieldError): undefined;
  }
  
  return(
    <AddressContainer>
      <AddressHeading>
        <MapPinLine size={22}/>
        <div>
          <span>Delivery Address</span>
          <p>Type your address where you would like to receive your order </p>
        </div>
      </AddressHeading>
      <AddressForm>
        <TextInput 
          placeholder="Zip Code"
          type="text"
          containerProps={{ style: {gridArea: "zipCode"}}}
          error={getFieldError(errors.zipCode)}
          {...register("zipCode")}
        />
        <TextInput 
          placeholder="Street"
          containerProps={{ style: {gridArea: "street"}}}
          error={getFieldError(errors.street)}
          {...register("street")}
        />
        <InputWrapper>
          <TextInput 
            placeholder="Number"
            type="number"
            containerProps={{ style: {gridArea: "number"}}}
            error={getFieldError(errors.number)}
            {...register("number", {valueAsNumber: true})}
          />
          <TextInput 
            placeholder="Complement"
            optional
            containerProps={{ style: {gridArea: "complement"}}}
            error={getFieldError(errors.complement)}
            {...register("complement")}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput 
            placeholder="Neighborhood"
            containerProps={{ style: {gridArea: "neighborhood"}}}
            error={getFieldError(errors.neighborhood)}
            {...register("neighborhood")}
          />
          <div className="city">
            <TextInput 
              placeholder="City"
              containerProps={{ style: {gridArea: "city"}}}
              error={getFieldError(errors.city)}
              {...register("city")}
            />
            <TextInput 
              placeholder="State"
              maxLength={2}
              containerProps={{ style: {gridArea: "state"}}}
              error={getFieldError(errors.state)}
              {...register("state")}
            />
          </div>
        </InputWrapper>
      </AddressForm>
  </AddressContainer>
  )
}