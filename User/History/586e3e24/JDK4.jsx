import { useRef } from "react";
import { useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter"

export const UseMemoExample = () => {
  
  const [dark, setDark] = useState(false);
  const {counter, increment} = useCounter(0);
  
  const secondCounterRef = useRef(null);

  const theme = {
    backgroundColor:  dark? 'black' : 'white',
    color:            dark? 'white' : 'black'
  };

  const aVerySlowFunction = curCounter => {
    console.log('performing a very slow function!');
    secondCounterRef.current.innerHTML = counter;
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button 
        className="btn btn-sm btn-outline-primary"
        onClick={ ()=>{
          aVerySlowFunction(increment(1));
        } }>
          Increment
      </button>
      <button 
        className="btn btn-sm btn-outline-success"
        onClick={ ()=>{ setDark(dark => !dark) } }>
          Change theme
      </button>
      <div style={theme}>
        <p ref={secondCounterRef}>slow function not performed yet</p>
      </div>
    </>
  )
}
