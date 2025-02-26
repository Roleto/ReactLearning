import { useState } from 'react';

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputValue(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  function handleinputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputValue,
    handleinputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
