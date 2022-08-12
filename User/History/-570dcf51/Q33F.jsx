import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign, initial = []) => {

  const [list, setList] = useState(initial);

  function add(promise) {
    promise.then(
      data => console.log(data)
    );
  }

  return ({ list, add });
}
