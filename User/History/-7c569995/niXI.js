import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = (category, limit=10) => {

  const [state, setState] = useState({
    loading:  true
  });

  useEffect(()=>{

    getGifs(category, limit)
      .then(
        response => setState({...response, loading: false})
      );

  }, [category, limit]);
  
  return state;
}