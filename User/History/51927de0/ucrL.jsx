import React, { useEffect, useState } from 'react'

export const Quote = ({quote='No quote', author='no author', align='center', promise=undefined}) => {

  const [state, setState] = useState({
    quote: quote,
    author: author
  });

  if(promise) {
    promise.then(x=>console.log(x()));
  }

  let orientation = 'center';
  ['start', 'left', 0].includes(align)    && (orientation = 'start');
  ['center', 'middle', 1].includes(align) && (orientation = 'center');
  ['end', 'right', 2].includes(align)     && (orientation = 'end');

  return (
    <figure className={'card p-3 shadow text-'+orientation}>
      <blockquote className='blockquote'>
        <h3>"{state.quote}"</h3>
      </blockquote>
      <figcaption className='blockquote-footer mt-1 mb-0 pb-0'>
        {state.author}
      </figcaption>
    </figure>
  )
}