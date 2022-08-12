import { useState } from "react";
import PropTypes from 'prop-types';

export const useForm = ( defaultForm = {} ) => {
  
  const [form, setForm] = useState(defaultForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;

    // ... validation stuff

    setForm({
      ...form,
      [name]: value
    });

    console.log(form)
  }

  const onReset = () => { setForm(defaultForm) }

  return {
    ...defaultForm,
    form,
    onInputChange,
    onReset
  }
}

useForm.propTypes = {
  defaultForm: PropTypes.object
}