import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign, initial = []) => {

  const [list, setList] = useState(initial);

  function add(quote, author) {
    !quote && (quote = 'loading...');
    !author && (author = 'loafing...');

    let align = 'snake';
    ['start', 'left', 0]    .includes(sortAlign) && (align = 'start');
    ['center', 'middle', 1] .includes(sortAlign) && (align = 'center');
    ['end', 'right', 2]     .includes(sortAlign) && (align = 'end');
    sortAlign == 'snake' && (align = list.length % 3);

    setList([
      ...list,
      <Quote
        key={list.length.toString() + '_' + Date.now().toString()}
        quote={quote}
        author={author}
        align={align}>
      </Quote>
    ]);
  }

  return ({ list, add });
}
