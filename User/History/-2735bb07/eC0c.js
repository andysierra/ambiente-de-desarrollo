import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";
import { useFetchGifs } from '../../../hooks/useFetchGifs';

// React 18 compatibility:
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas sobre el hook useFetchGifs', ()=>{
  
  jest.setTimeout(10000);

  let container   = null;
  let result      = null;
  const category  = 'Homer Simpson';
  const limit     = 4;
  
  function getWrappingComponent(hook, ...params) {
    return ()=>{
      result = hook(...params);
      return null;
    };
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
    let Component = getWrappingComponent(useFetchGifs, category, limit);
    console.log(result);
    act(()=>{ ReactDOM.createRoot(container).render(<Component/>); });
    console.log(result);
  })

});