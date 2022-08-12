import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign = 'center', justify='start', initial = []) => {

  const [list, setList] = useState(initial);

  function add(promise) {
    let   newList = [];
    const id = list.length.toString()+'_'+Date.now();
    const newQuote = 
      <Quote
        key     = {id}
        promise = {promise}
        align   = {sortAlign === 'stairs' ? (list.length % 3) : sortAlign}>
      </Quote>;

    switch(justify) {
      case 'end':   newList = [...list, newQuote]; break;
      default:      newList = [newQuote, ...list]; break;
    }

    setList(newList);
  }

  return ({ list, add });
}
