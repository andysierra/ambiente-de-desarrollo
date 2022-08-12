import { useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter"

export const UseMemoExample = () => {
  
  const [dark, setDark] = useState(false);
  const {counter, increment} = useCounter(0);
  
  const theme = {
    backgroundColor: dark? 'black' : 'white',
    foregroundColor: dark? 'white' : 'black'
  };
console.log(counter);


  return (
    <>
      <h1>Counter: {counter}</h1>
      <button 
        className="btn btn-small btn-outline-primary"
        onClick={ increment }>
          Increment
      </button>
    </>
  )
}
