import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = category => {

  const [state, setState] = useState({
    data:     [],
    loading:  true,
    meta:     {}
  });

  useEffect(()=>{
    getGifs(category).then(z=>console.log(z));
  }, [category]);

  return state;
}