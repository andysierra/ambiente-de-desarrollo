import PropTypes from 'prop-types';

export const useBreakingBad = () => {

  const url = 'https://www.breakingbadapi.com/api/quotes/';

  async function getQuote(id=1) {
    if(typeof id === 'number') {
      const received = await fetch(url+id);
      
      //const copy = received;
      //copy.json().then(json=>console.log('first obtained: '+json));

      return received.json;
    }
    else console.log("getCuote has received an invalid number: "+typeof(id));
    return undefined;
  }

  return getQuote;
}