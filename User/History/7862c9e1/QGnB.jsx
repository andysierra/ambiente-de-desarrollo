import { useState } from "react"

export const Counter = () => {

  const [{ counter1, counter2, counter3 }, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  return (
    <div>
      <h1>Counters:</h1>
      <hr />
      <ul>
        <li>
          <p>Counter 1: {counter1}</p>
        </li>
        <li>
          <p>Counter 2: {counter2}</p>
        </li>
        <li>
          <p>Counter 3: {counter3}</p>
        </li>
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => {
          /* setCounters({
            counter1: counter1 + 1,
            counter2,
            counter3
          }) */
          setCounters(counters=>({...counters, counter1:counter1+1}))
        }}>
        +1
      </button>
    </div>
  )
}
