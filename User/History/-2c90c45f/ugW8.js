import { useEffect, useState } from "react"

export const useBreakingBad = (quoteId = 1) => {
  
  const defaultData = {
    loading: true,
    quote: {}  // {quote:'', author:''}
  }
  const url = 'https://www.breakingbadapi.com/api/quotes/';
  const [data, setData] = useState(defaultData);

  useEffect(() => { getQuote() }, [quoteId])

  async function getQuote() {
    const received = await fetch(url+quoteId);
    const data = await received.json();

    console.log(data)
    
    !!data && setData({
      loading: false,
      quote: data[0]
    });
  }
  
  return data;
}
