import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = (category, limit=10) => {

  const [state, setState] = useState({
    data:     [],
    loading:  true,
    meta:     {}
  });

  useEffect(()=>{

    getGifs(category, limit)
    .then(
      ({gifs, nFound}) => setState(
        {
          data: gifs,
          loading: false,
          meta: {nFound: nFound}
        }
      )
    );

  }, [category, limit]);
  
  return state;
}