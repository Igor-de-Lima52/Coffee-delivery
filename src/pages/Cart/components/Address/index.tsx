import { MapPinLine } from "phosphor-react";
import { TextInput } from "../../../../components/Form/TextInput";
import { AddressContainer, AddressForm, AddressHeading, InputWrapper } from "./styles";
import { FieldError, useFormContext } from "react-hook-form";
import { placeholders, texts } from "./language";

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
          <span>{texts.span}</span>
          <p>{texts.paragraph}</p>
        </div>
      </AddressHeading>
      <AddressForm>
        <TextInput 
          placeholder={placeholders.zipCode}
          type="text"
          containerProps={{ style: {gridArea: "zipCode"}}}
          error={getFieldError(errors.zipCode)}
          {...register("zipCode")}
        />
        <TextInput 
          placeholder={placeholders.street}
          containerProps={{ style: {gridArea: "street"}}}
          error={getFieldError(errors.street)}
          {...register("street")}
        />
        <InputWrapper>
          <TextInput 
            placeholder={placeholders.number}
            type="number"
            containerProps={{ style: {gridArea: "number"}}}
            error={getFieldError(errors.number)}
            {...register("number", {valueAsNumber: true})}
          />
          <TextInput 
            placeholder={placeholders.complement}
            optional
            containerProps={{ style: {gridArea: "complement"}}}
            error={getFieldError(errors.complement)}
            {...register("complement")}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput 
            placeholder={placeholders.neighborhood}
            containerProps={{ style: {gridArea: "neighborhood"}}}
            error={getFieldError(errors.neighborhood)}
            {...register("neighborhood")}
          />
          <div className="city">
            <TextInput 
              placeholder={placeholders.city}
              containerProps={{ style: {gridArea: "city"}}}
              error={getFieldError(errors.city)}
              {...register("city")}
            />
            <TextInput 
              placeholder={placeholders.state}
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