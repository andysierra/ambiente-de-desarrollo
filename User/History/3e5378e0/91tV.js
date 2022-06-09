import React from 'react'

const GifGridItem = ({id, title, url})=> {
  return (
    <div className="card p-0 col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="card-body p-0 d-flex flex-col justify-content-center">
        <img 
          src={url} 
          alt={id+title}
          height="100%"/>
      </div>
      <div className="card-footer">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default GifGridItem;