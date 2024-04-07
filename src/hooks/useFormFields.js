import { useState } from "react";

export const useFormFields = (fields = []) => {
  const initialiseFormFields = () => {
    const _formFields = {};
    fields.forEach((field) => {
      _formFields[field] = {
        value: "",
        isError: false,
      };
    });
    return _formFields;
  };

  const [formFields, setFormFields] = useState(initialiseFormFields());

  const handleFieldChange = (event) => {
    const { id, value } = event.target;
    setFormFields({
      ...formFields,
      [id]: {
        ...formFields[id],
        value,
      },
    });
  };

  const checkFieldError = () => {
    const _formFields = { ...formFields };
    let isFormError = false;
    fields.forEach((field) => {
      if (formFields[field].value === "") {
        isFormError = true;
        _formFields[field] = {
          ..._formFields[field],
          isError: true,
        };
      }
    });
    setFormFields(_formFields);
    return isFormError;
  };

  const resetFields = () => {
    setFormFields(initialiseFormFields());
  };

  return {
    formFields,
    handleFieldChange,
    checkFieldError,
    resetFields,
  };
};
