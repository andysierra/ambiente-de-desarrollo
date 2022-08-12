import { useState } from "react";

export const useForm = ( defaultForm = {} ) => {
  
  const [form, setForm] = useState(defaultForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;

    // ... validation stuff

    setForm({
      ...form,
      [name]: value
    });
  }

  const onReset = () => { setForm(defaultForm) }

  return {
    ...form,
    form,
    onInputChange,
    onReset
  }
}