import React, { useEffect, useState } from 'react'

export const Quote = ({quote='Loading Quote', author='Loading', align='center', promise=undefined}) => {

  const [state, setState] = useState({
    quote: quote,
    author: author
  });

  useEffect(() => {
    if(promise) {
      promise.then(
        data => {
          const notNull = data && data[0];
          setState({
            quote: notNull? data[0].quote : 'Limit reached!',
            author: notNull? data[0].author : 'You can not request for more quotes, please reload.'
          });
        }
      );
    }
    else {
      setState({
        quote: 'Error',
        author: 'Please check your connection.'
      });
    }
  }, [promise]);
  

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
