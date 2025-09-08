import React, { 
  forwardRef, 
  HTMLAttributes, 
  InputHTMLAttributes, 
  LegacyRef, 
  useContext, 
  useState 
} from "react";
import { FieldError } from "react-hook-form";
import { BoxContainer, ErrorMessageContainer, TextInputContainer } from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";
import { texts } from "./language";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
}

export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, onFocus, onBlur, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
  ){
    const { isThemeLightOn } = useContext(ThemeContext);

    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(event: React.FocusEvent<HTMLInputElement>){
      setIsFocused(true);
      onFocus?.(event);
    }
    function handleBlur(event: React.FocusEvent<HTMLInputElement>){
      setIsFocused(false);
      onBlur?.(event);
    }

    return(
      <BoxContainer {...containerProps}>
        <TextInputContainer data-state={isFocused ? "focused" : "blurred"} isthemelighton={isThemeLightOn ? isThemeLightOn : undefined}>
          <input 
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...rest}
          />
          {optional ? <span>{texts.span}</span> : null}
        </TextInputContainer>
        {error?.message ? (
          <ErrorMessageContainer role="alert">{error.message}</ErrorMessageContainer>
        ): null}
      </BoxContainer>
    )
  }
)