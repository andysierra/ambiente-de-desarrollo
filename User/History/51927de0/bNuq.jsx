import React from 'react'

export const Quote = ({quote='No quote', author='no author', align='center', promise=undefined}) => {

  useEffect(() => {
    console.log('promise has changed'+promise)
  }, [promise])
  

  if(promise) {
    promise.then(
      data => {
        if(data && data[0]) {
          console.log(data[0])
          quote = data[0].quote;
          author = data[0].author;
        }
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
