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
      ({gifs, count}) => setState(
        {
          data: gifs,
          loading: false,
          meta: {count: count}
        }
      )
    );

  }, [category, limit]);
  
  return state;
}