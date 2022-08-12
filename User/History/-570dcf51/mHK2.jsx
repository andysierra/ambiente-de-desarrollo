import { useState } from "react";
import { Quote } from "../components/Quote";
import { useBreakingBad } from "./useBreakingBad";
import PropTypes from 'prop-types';

export const useQuoteList = (quoteList = []) => {
  const [list, setList]               = useState(quoteList);

  function addQuote(quote) {
    console.log(typeof(<Quote></Quote>));
  }

  return (
    {
      returnedList: list.map(entry => <Quote {...entry}></Quote>),
      addQuote
    }
  );
}