import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data:     [],
    loading:  true,
    meta:     {}
  });

  useEffect(()=>{
    setTimeout(()=>{  getGifs(category)
        .then(
          ({gifs, nFound}) => setState(
            {
              data: gifs,
              loading: false,
              meta: {nFound: nFound}
            }
          )
        );}, 3000)
  }, []);
  
  return state;
}