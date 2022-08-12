import { useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter"

export const UseMemoExample = () => {
  
  const [dark, setDark] = useState(false);
  const {counter, increment} = useCounter(0);
  
  const theme = {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white' : 'black'
  };

  const aVerySlowFunction = ()=> {
    console.log('performing a very slow function!');
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button 
        className="btn btn-sm btn-outline-primary"
        onClick={ increment }>
          Increment
      </button>
      <button 
        className="btn btn-sm btn-outline-success"
        onClick={ ()=>{ setDark(dark => !dark) } }>
          Change theme
      </button>
      <div style={theme}>
        {counter}
      </div>
    </>
  )
}
