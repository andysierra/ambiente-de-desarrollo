import { useBreakingBad } from "./hooks/useBreakingBad";
import { useQuoteList } from "./hooks/useQuoteList";

export const CombinacionHooks = () => {
  
  const getQuote = useBreakingBad();
  const {list, add} = useQuoteList();

  function addToList() {
    console.log(getQuote(1));
  }

  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-0 py-0">
        <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
        <button className="btn btn-primary" onClick={ addToList }>Agregar quote</button>
      </div>
      <hr />
      <div className="d-flex flex-column">

        {list}

      </div>
    </div>
  )
}