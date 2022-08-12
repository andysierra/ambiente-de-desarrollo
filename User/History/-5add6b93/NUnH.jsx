import React from 'react'
import { Quote } from './components/Quote'

export const CombinacionHooks = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between my-0 py-0">
        <p className='display-6 my-0 py-0'>BreakingBad Quotes!</p>
        <button className="btn btn-primary">Siguiente quote</button>
      </div>
      <hr />
      <div className="d-flex flex-column">

        <Quote { ...{quote: 'Some fucking quote', author: 'Me, just fucking me', align: 1} }></Quote>
        <Quote { ...{quote: 'Some fucking quote', author: 'Me, just fucking me', align: 1} }></Quote>

      </div>
    </div>
  )
}
