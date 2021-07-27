import { ChangeEvent, useState } from "react";
import customValidator, { Validatable } from "../utils/customValidator";

const useInputs = (valOpts: Validatable) => {
    const [inputValue, setInputValue] = useState("");
    const [isDirty, setIsDirty] = useState(false);
  
    const formValueIsValid = customValidator(valOpts, inputValue);
    const containsError = !formValueIsValid && isDirty;
  
    const inputChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(target.value);
    };
  
    const inputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsDirty(true);
    };
  
    const reset = () => {
      setInputValue("");
      setIsDirty(false);
    };
  
    const focusError = () => {
      setIsDirty(false);
    };
  
    return {
      value: inputValue,
      isValid: formValueIsValid,
      containsError,
      inputChangeHandler,
      inputBlurHandler,
      reset,
      focusError,
    };
  };
  
  export default useInputs;
  