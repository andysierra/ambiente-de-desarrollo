export const useForm = ( defaultState = {} ) => {
  
  const [form, setForm] = useState(defaultState);

  function onInputChange({target}) {
    const [name, value] = target;

    // ... validation stuff

    setForm({
      ...form,
      [name]: value
    });
  }

  return {
    ...defaultState,
    form,
    onInputChange
  }
}
