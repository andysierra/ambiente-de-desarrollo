import React from 'react'
import { Quote } from './components/Quote'
import { useBreakingBad } from './hooks/useBreakingBad'

export const CombinacionHooks = () => {
  
  const {loading, qu} = useBreakingBad(2);

  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-0 py-0">
        <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
        <button className="btn btn-primary">Siguiente quote</button>
      </div>
      <hr />
      <div className="d-flex flex-column">

        <Quote { ...{quote: qu.quote, author: qu.author, align: 0} }></Quote>
        <Quote { ...{quote: qu.quote, author: qu.author, align: 1} }></Quote>
        <Quote { ...{quote: qu.quote, author: qu.author, align: 2} }></Quote>

      </div>
    </div>
  )
}
