import {useState, useEffect} from 'react';
import { giphySearch } from '../helpers/Giphy';

export const useFetchGifs = (category, limit=10) => {

  const [state, setState] = useState({
    loading:  true
  });

  useEffect(()=>{

    giphySearch(category, limit)
      .then(
        response => {
          console.log('found '+JSON.stringify(response));
          setState({...response, loading: false});
        }
      );

  }, [category, limit]);
  
  return state;
}