import PropTypes from 'prop-types';
import { useState } from 'react';

export const useCounter = ( defaultValue = 0 ) => {
  
  const [counter, setCounter] = useState(defaultValue);

  const increment = (step=1) => {
    const newVal = counter+step;
    console.log(typeof(step));
    if(typeof(step) !== 'Number') step = 1;
    setCounter(newVal);
    return newVal;
  }
  const reset = () => {
    setCounter(defaultValue);
    return defaultValue;
  }
  const decrement = (step=1) => {
    if(counter < 1) return;
    if(typeof(step) !== 'Number') step = 1;
    const newVal = counter-step;
    setCounter(newVal);
    return newVal;
  }

  return {
    counter,
    increment,
    reset,
    decrement
  }
}

useCounter.propTypes = {
  defaultValue: PropTypes.number
}