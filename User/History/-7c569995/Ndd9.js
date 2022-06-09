import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/Giphy';

export const useFetchGifs = category => {

  const [state, setState] = useState({
    data:     [],
    loading:  true,
    meta:     {}
  });

  useEffect(()=>{
    const {data, info:meta} = await getGifs(category);

    console.log(data);
  }, [category]);
}