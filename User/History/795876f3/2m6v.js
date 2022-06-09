import {useState} from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GifExpertAppConstants from './GifExpertApp.constants';
import { GifGridItem, GifGridItemLoading } from './GifGridItem';
import { InlineSpinner } from '../../components/InlineSpinner';

const GifGrid = ({cat = ''}) => {

  const [state, setState] = useState({
    nImgLoaded: 0
  })

  const {data, loading, meta} = useFetchGifs(cat, GifExpertAppConstants.giphySearchLimit);

  const handleOnLoad = () => 
    setState(prevState => ({...prevState, nImgLoaded: prevState.nImgLoaded+1}));

  return (cat && cat.length > 0) ? 
    (
      <div className="card my-3 shadow-sm">
        <div className="card-header">
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row flex-nowrap'>
              <h3>{cat}</h3>
              {
                /* state.nImgLoaded===GifExpertAppConstants.giphySearchLimit
                && */
                <InlineSpinner className='text-primary w-50 h-50 align-self-center'/>
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
                <GifGridItemLoading placeholders={GifExpertAppConstants.giphySearchLimit}/>
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