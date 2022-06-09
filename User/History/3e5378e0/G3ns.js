import React from 'react';
import {PropTypes} from 'react/prop-types';

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

export const GifGridItemLoading = ({placeholders=10})=> {
  return (
    <div className="card p-0 col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="card-body p-0 d-flex flex-col justify-content-center overflow-hidden">
        <i>icon loading</i>
      </div>
      <div className="card-footer">
        <p>loading...</p>
      </div>
    </div>
  );
}
GifGridItemLoading.propTypes = {
  placeholders : 
}