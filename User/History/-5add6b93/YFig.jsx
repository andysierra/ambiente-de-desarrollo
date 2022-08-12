import React from 'react'
import { Quote } from './components/Quote'
import { useBreakingBad } from './hooks/useBreakingBad'
import { useQuoteList } from './hooks/useQuoteList'

export const CombinacionHooks = () => {
  
  const {returnedList, addQuote, listLoading} = useQuoteList();

  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-0 py-0">
        <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
        <button className="btn btn-primary" onClick={addQuote}>Agregar quote</button>
      </div>
      <hr />
      <div className="d-flex flex-column">

        {console.log(returnedList)}

      </div>
    </div>
  )
}
