import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';

export const GifGridItem = ({id, title, url})=> {
  return (
    <div className="card p-0 col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="card-body p-0 d-flex flex-col justify-content-center overflow-hidden">
        <img 
          src={url} 
          alt={id+title}
          height="200px"/>
      </div>
      <div className="card-footer">
        <p>{title}</p>
      </div>
    </div>
  );
}

export const GifGridItemLoading = ({placeholders=1})=> {
  return (
    <div style={{display:'grid', gridTemplateColumns: 'repeat(5, 1fr)', columnGap: '10px', rowGap: '5px'}}>
      {
        Array.from(Array(placeholders).keys()).map(
          (placeholder, idx) => (
            <div className="h-25" key={Date.now().toString()+idx}>
              <div className='d-flex flex-column justify-content-center'>
                <div className="skeleton" style={{height: '20px'}}></div>
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <div className="skeleton"></div>
              </div>
            </div>
          )
        )
      }
    </div>
  );
}
GifGridItemLoading.propTypes = {
  placeholders : PropTypes.number
}