import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";
import { useFetchGifs } from '../../../hooks/useFetchGifs';

// React 18 compatibility:
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas sobre el hook useFetchGifs', ()=>{
  
  jest.setTimeout(10000);

  let container   = null;
  const category  = 'Homer Simpson';
  const limit     = 4;
  
  function getWrappingComponent(hook, ...params) {
    let result = {};
    return [
      // returns component that wrappes hook:
      ()=>{
        result = hook(...params);
        return null;
      },

      // returns the hook result
      result
    ];
  }




  beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container);
  });




  afterEach(()=>{
    document.body.removeChild(container);
    container = null;
  });




  it('El estado del hook inicialmente debe ser {loading:true}', ()=>{
    let [Component, result] = getWrappingComponent(useFetchGifs, category, limit);
    console.log(result);
    act(()=>{  });
  })

});