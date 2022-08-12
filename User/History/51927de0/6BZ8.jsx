import React from 'react'

export const Quote = ({quote='No quote', author='no author', align='center', promise=undefined}) => {

  if(promise) {
    promise.then(
      data => {
        console.log('oh fucking yeah: '+JSON.stringify(data))
        quote = data.quote;
        author = data.author;
        data.align && (align = data.align);
      }
    );
  }

  let orientation;
  ['start', 'left', 0].includes(align)    && (orientation = 'start');
  ['center', 'middle', 1].includes(align) && (orientation = 'center');
  ['end', 'right', 2].includes(align)     && (orientation = 'end');

  return (
    <figure className={'card p-3 shadow text-'+orientation}>
      <blockquote className='blockquote'>
        <h3>"{quote}"</h3>
      </blockquote>
      <figcaption className='blockquote-footer mt-1 mb-0 pb-0'>
        {author}
      </figcaption>
    </figure>
  )
}
