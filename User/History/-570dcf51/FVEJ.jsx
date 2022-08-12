import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign, initial = []) => {

  const [list, setList] = useState(initial);

  function add(promise) {
    const id = list.length.toString()+'_'+Date.now();
    setList([...list, <Quote key={id} promise={promise}></Quote>]);
  }

  return ({ list, add });
}
