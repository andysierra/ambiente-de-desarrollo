import React, { useEffect } from 'react'

export const Quote = ({quote='No quote', author='no author', align='center', promise=undefined}) => {

  let x = quote;
  let y = author;

  if(promise) {
    promise.then(
      data => {
        if(data && data[0]) {
          console.log(data[0])
          x = 'perron';
          y = 'perroncio';
        }
      }
    );
  }

  let orientation = 'center';
  ['start', 'left', 0].includes(align)    && (orientation = 'start');
  ['center', 'middle', 1].includes(align) && (orientation = 'center');
  ['end', 'right', 2].includes(align)     && (orientation = 'end');

  return (
    <figure className={'card p-3 shadow text-'+orientation}>
      <blockquote className='blockquote'>
        <h3>"{x}"</h3>
      </blockquote>
      <figcaption className='blockquote-footer mt-1 mb-0 pb-0'>
        {y}
      </figcaption>
    </figure>
  )
}
