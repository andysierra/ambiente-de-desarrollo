import { useBreakingBad } from "./hooks/useBreakingBad";
import { useCounter } from "./hooks/useCounter";
import { useQuoteList } from "./hooks/useQuoteList";

export const CombinacionHooks = () => {
  
  const getQuote = useBreakingBad();
  const {list, add} = useQuoteList('stairs', 'end');
  const {counter,decrement,increment,reset} = useCounter(-1);

  function addQuote() {
    increment();
    add(getQuote(counter));
  }

  return (
    <div>
      <div className="sticky-top sticky-xl-top sticky-lg-top">
        <div className="d-flex flex-row justify-content-between my-0 py-0">
          <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
          <button className="btn btn-primary" onClick={ addQuote }>Agregar quote</button>
        </div>
        <hr />
      </div>
      <div className="d-flex flex-column">
        {list}
      </div>
    </div>
  )
}