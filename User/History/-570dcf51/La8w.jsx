import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign, initial = []) => {

  const [list, setList] = useState(initial);

  function add(promise) {
    setList([...list, <Quote promise={promise}></Quote>]);
  }

  return ({ list, add });
}
