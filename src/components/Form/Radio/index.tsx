import { forwardRef, InputHTMLAttributes } from "react";
import { RadioContainer } from "./styles";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ children, isSelected, ...rest }, ref) => {
  return(
    <RadioContainer data-state={isSelected}>
      <input type="radio" ref={ref} {...rest}/>
      {children}
    </RadioContainer>
  );
})