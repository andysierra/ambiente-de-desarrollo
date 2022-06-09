import {useState} from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import constants from './GifExpertApp.constants';
import { GifGridItem, GifGridItemLoading } from './GifGridItem';
import { InlineSpinner } from '../../components/InlineSpinner';
import './GifGrid.css';

const GifGrid = ({cat = ''}) => {

  const [state, setState] = useState({
    nImgLoaded: 0
  })

  const {data, loading, meta} = useFetchGifs(cat, constants.limit);

  const handleOnLoad = () => 
    setState(prevState => ({...prevState, nImgLoaded: prevState.nImgLoaded+1}));

  return (cat && cat.length > 0) ? 
    (
      <div className="card my-3 shadow-sm fade-in-down">
        <div className="card-header">
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row flex-nowrap'>
              <h3>{cat}</h3>
              {
                meta.nFound >= constants.limit
                && state.nImgLoaded !== constants.limit
                &&
                ( 
                  <>
                    <InlineSpinner 
                      className='text-primary align-self-center mx-3'/>
                    <small className='align-self-center py-0 my-0'>Transfiriendo desde Giphy...</small>
                  </>
                )
              }
            </div>
            <h5 style={{color: '#444'}}> {loading?'esperando ':meta.nFound} resultados </h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            {
              !loading? 
                data?.map(
                  img => <GifGridItem key={img.id} onload={handleOnLoad} {...img}/>
                )
              :
                <GifGridItemLoading placeholders={constants.giphySearchLimit}/>
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