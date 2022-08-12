import { useState } from "react";
import { Quote } from "../components/Quote";
import { useBreakingBad } from "./useBreakingBad";
import PropTypes from 'prop-types';

export const useQuoteList = (quoteList = []) => {
  const [list, setList]               = useState(quoteList);
  const [listLoading, setListLoading] = useState(false);

  function addQuote(quoteId) {
    const {loading, quote} = useBreakingBad(quoteId);

    // Temporal destructuring
    const obtained = {
      quote: quote.quote,
      author: quote.author
    }

    setListLoading(loading);
    setList([...list, <Quote {...obtained}></Quote>]);
  }

  return (
    {
      returnedList: list.map(entry => <Quote {...entry}></Quote>),
      addQuote,
      listLoading
    }
  );
}

useQuoteList.propTypes = {
  quoteId: PropTypes.number.isRequired
}