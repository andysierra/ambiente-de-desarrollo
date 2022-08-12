import PropTypes from 'prop-types';
import { useState } from 'react';

export const useCounter = ( defaultValue = 0 ) => {
  
  const [counter, setCounter] = useState(defaultValue);
  
  const increment = (step=1) => {
    console.log("counter before "+counter);
    setCounter(counter+step, ()=>{console.log("counter now "+counter);});
  }
  const reset = () => {
    setCounter(defaultValue);
  }
  const decrement = (step=1) => {
    if(counter < 1) return;
    setCounter(counter-step);
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