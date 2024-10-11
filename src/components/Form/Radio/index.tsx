import { forwardRef, InputHTMLAttributes, useContext } from "react";
import { RadioContainer } from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ children, isSelected, ...rest }, ref) => {
  const { isThemeLightOn } = useContext(ThemeContext);

  return(
    <RadioContainer data-state={isSelected} isthemelighton={isThemeLightOn ? isThemeLightOn : undefined}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </RadioContainer>
  );
})