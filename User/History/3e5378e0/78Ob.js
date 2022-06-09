import React from 'react';
import PropTypes from 'prop-types';

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
    <div style={{display:'grid', gridTemplateColums: repeat(1+'fr', 10)}}>
      {
        Array.from(Array(placeholders).keys()).map(
          (placeholder, idx) => (
            <div className="card" key={Date.now().toString()+'_'+idx}>
              <div className="card-body">
                <h5>Loading...</h5>
              </div>
              <div className="card-footer">
                <p>Loading...</p>
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