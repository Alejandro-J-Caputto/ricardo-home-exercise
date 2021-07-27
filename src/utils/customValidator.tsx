export interface Validatable {
    // value: string | number | Date;
    valueCompare?: string | number
    type?: string
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }
const customValidator = (
    validableInput: Validatable,
    value: string | number
  ) => {
    let isValid = true;
    if (validableInput.required) {
      isValid = isValid && value.toString().trim().length !== 0;
    }
    if (validableInput.type === "email") {
      isValid = isValid && value.toString().trim().includes("@");
    }
    if (validableInput.minLength != null && typeof value === "string") {
      isValid = isValid && value.length > validableInput.minLength;
    }
    if (validableInput.maxLength != null && typeof value === "string") {
      isValid = isValid && value.length < validableInput.maxLength;
    }
    if (validableInput.min != null && typeof value === "number") {
      isValid = isValid && value > validableInput.min;
    }
    if (validableInput.max != null && typeof value === "number") {
      isValid = isValid && value < validableInput.max;
    }
    if (validableInput.valueCompare) {
      isValid = isValid && validableInput.valueCompare === value;
    }
    return isValid;
  };
  
  export default customValidator;