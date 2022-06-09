import React from 'react'

const GifGridItem = ({id, title, url})=> {
  return (
    <div className="card col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
      <div className="card-body p-0">
        <img 
          src={url} 
          alt={id+title}
          className="img-fluid"/>
      </div>
      <div className="card-footer">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default GifGridItem;