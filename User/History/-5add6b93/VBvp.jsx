import { Quote } from "./components/Quote";
import { useBreakingBad } from "./hooks/useBreakingBad";
import { useQuoteList } from "./hooks/useQuoteList";

export const CombinacionHooks = () => {
  
  const getQuote = useBreakingBad();
  const {list, add} = useQuoteList('stairs', 'reverse');

  return (
    <div>
      <div className="sticky-top sticky-xl-top sticky-lg-top bg-warning">
        <div className="d-flex flex-row justify-content-between my-0 py-0">
          <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
          <button className="btn btn-primary" onClick={ ()=>{add(getQuote(1))} }>Agregar quote</button>
        </div>
        <hr />
      </div>
      <div className="d-flex flex-column">
        {list}

      </div>
    </div>
  )
}