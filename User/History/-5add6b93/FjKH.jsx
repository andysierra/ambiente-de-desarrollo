import { Quote } from "./components/Quote";
import { useBreakingBad } from "./hooks/useBreakingBad";
import { useQuoteList } from "./hooks/useQuoteList";

export const CombinacionHooks = () => {
  
  const getQuote = useBreakingBad();
  const {list, add} = useQuoteList();

  function addToList() {
    getQuote(1).then(
      data => {
        if(!!data) {
          const quote = data[0].quote;
          const author = data[0].author;
          
          add(
            <Quote 
              quote={quote}
              author={author}>
            </Quote>
          );
        }
      }
    );
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