import React, { useState } from "react";
import { Quote } from "../components/Quote";

export const useQuoteList = (sortAlign = 'center', justify='start', initial = []) => {

  const [list, setList] = useState(initial);


  function add(promise) {
    const id = list.length.toString()+'_'+Date.now();

    let newList = [
      ...list, 
      <Quote 
        key={id} 
        promise={promise} 
        align={sortAlign==='stairs'? (list.length%3) : sortAlign}>
      </Quote>]; 

    /* switch(justify) {
      case 'end':
        newList = [
          ...list, 
          <Quote 
            key={id} 
            promise={promise} 
            align={sortAlign==='stairs'? (list.length%3) : sortAlign}>
          </Quote>];
      break;
      default:
        newList = [
          <Quote 
            key={id} 
            promise={promise} 
            align={sortAlign==='stairs'? (list.length%3) : sortAlign}>
          </Quote>,
          ...list];
      break;
    } */

    //setList(newList);
  }

  return ({ list, add });
}
