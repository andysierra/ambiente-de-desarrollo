import { useState } from "react";

export const useForm = ( defaultState = {} ) => {
  
  const [form, setForm] = useState(defaultState);

  function onInputChange({target}) {
    const {name, value} = target;
    console.log(name, value)

    // ... validation stuff

    setForm({
      ...form,
      [name]: value
    });
  }

  function onReset() { setForm(defaultState) }

  return {
    ...defaultState,
    form,
    onInputChange,
    onReset
  }
}