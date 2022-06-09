import {useState} from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import constants from './GifExpertApp.constants';
import { GifGridItem, GifGridItemLoading } from './GifGridItem';
import { InlineSpinner } from '../../components/InlineSpinner';
import './GifGrid.css';

const GifGrid = ({cat = ''}) => {

  const [state, setState] = useState({
    imgLoads: 0
  })

  const {data, loading, meta:{count}} = useFetchGifs(cat, constants.limit);

  const handleOnLoad = () => 
    setState(prevState => ({...prevState, imgLoads: prevState.imgLoads+1}));


  return (
    <div className="card my-3 shadow-sm fade-in-down">
      <div className="card-header">
        <div className='d-flex flex-row justify-content-between'>
          <div className='d-flex flex-row flex-nowrap'>
            <h3>{cat}</h3>
            { 
              state.imgLoads < constants.limit && (
                <>
                  <InlineSpinner className='text-primary align-self-center mx-3'/>
                  <small className='align-self-center py-0 my-0'>Transfiriendo desde Giphy...</small>
                </>
              )
            }
          </div>
          <h5 style={{color: '#444'}}> 
            {
              loading?
                'Esperando ' : 
                count > 0? 
                  count : 
                  'No se encontraron '
            } resultados 
          </h5>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {
            data?.map(
              img => <GifGridItem key={img.id} onload={handleOnLoad} {...img}/>
            )
          }
        </div>
      </div>
    </div>
  );


 /*  return (!loading && meta.nFound<1) ? 
    (
      <div className="card my-3 shadow-sm fade-in-down">
        <div className="card-header">
        <div className='d-flex flex-row justify-content-between'>
            <div>
              <h3>{cat}</h3>
            </div>
            <h5 style={{color: '#444'}}> Sin resultados 😔 </h5>
          </div>
        </div>
        <div className="card-body">
          <h1>¯\_(ツ)_/¯</h1>
        </div>
      </div>
    )
    :
    (
      <div className="card my-3 shadow-sm fade-in-down">
        <div className="card-header">
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row flex-nowrap'>
              <h3>{cat}</h3>
              {
                state.nImgLoaded !== (meta.nFound >= constants.limit? constants.limit : meta.nFound)
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
    ); */

};

GifGrid.propTypes = {
  cat: PropTypes.string
};

export default GifGrid;