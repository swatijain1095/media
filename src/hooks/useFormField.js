import { useState } from "react";

export const useFormField = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const checkError = () => {
    if (value === "") {
      setIsError(true);
      return true;
    }
    return false;
  };

  const reset = () => {
    setValue("");
    setIsError(false);
  };

  return {
    value,
    isError,
    handleChange,
    checkError,
    reset,
  };
};
