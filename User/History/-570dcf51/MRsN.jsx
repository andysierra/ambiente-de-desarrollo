import React, { useState } from "react";

export const useQuoteList = (initial = []) => {
  
  const [list, setList] = useState(initial);

  function add(newQuote) {
    if(React.isValidElement(newQuote))
      setList([...list, newQuote]);
  }
  
  return ({ list, add });
}
