import { 
  CustomerHouseCityWrapper, 
  CustomerNumberHouseWrapper, 
  FormInputsContainer, 
  InputWrapper 
} from "./styles";

import { useFormContext } from "react-hook-form";

export function FormInputs(){
  const dataForm = useFormContext();

  const { register } = dataForm;
  return(
    <FormInputsContainer>
      <InputWrapper>
        <label htmlFor="zipCode"/>
        <input 
          id="zipCode" 
          type="text" 
          required 
          placeholder="Zip Code"
          pattern="/\d{5}(-\d{4})?"
          {...register("zipCode") } 
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="street"/>
        <input 
          id="street" 
          type="text" 
          required placeholder="Street" {...register("street")} />
      </InputWrapper>
      <CustomerNumberHouseWrapper>
        <InputWrapper>
          <label htmlFor="number"/>
          <input 
            id="number" 
            type="number" 
            required 
            placeholder="Number" 
            {...register("number")} 
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="complement"/>
          <input 
            id="complement" 
            type="text" 
            placeholder="Complement" 
            {...register("complement")} 
          />
        </InputWrapper>
      </CustomerNumberHouseWrapper>
      <CustomerHouseCityWrapper>
        <InputWrapper>
          <label htmlFor="neighborhood"/>
          <input 
            id="neighborhood" 
            type="text" 
            placeholder="Neighborhood" 
            {...register("neighborhood")} 
          />
        </InputWrapper>
        <div>
          <InputWrapper>
            <label htmlFor="city"/>
            <input 
              id="city" 
              type="text" 
              placeholder="City" 
              {...register("city")} 
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="state"/>
            <input 
              id="state" 
              type="text" 
              placeholder="State" 
              {...register("state")} 
            />
          </InputWrapper>
        </div>
      </CustomerHouseCityWrapper>
    </FormInputsContainer>
  )
}