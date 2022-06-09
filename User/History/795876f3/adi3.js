import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem, GifGridItemLoading } from './GifGridItem';

const GifGrid = ({cat = ''}) => {

  const {data, loading, meta} = useFetchGifs(cat);

  return (cat && cat.length > 0) ? 
    (
      <div className="card my-3 shadow-sm">
        <div className="card-header">
          <div className='d-flex flex-row justify-content-between'>
            <h3>{cat}</h3>
            <h5 style={{color: '#444'}}>{loading?'esperando ':meta.nFound} resultados</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            {
              !loading? data?.map(
                img => <GifGridItem key={img.id} {...img}/>
              )
              :
              <GifGridItemLoading placeholders={10}/>
            }
          </div>
        </div>
      </div>
    )
    :
    (
      <h3>Sin categoría</h3>
    );

};

GifGrid.propTypes = {
  cat: PropTypes.string
};

export default GifGrid;