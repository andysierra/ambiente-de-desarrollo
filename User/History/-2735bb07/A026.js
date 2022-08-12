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
  const sleep     = ms => new Promise(resolve => setTimeout(resolve, ms));
  
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
    result = null;
  });




  it('El estado del hook inicialmente debe ser {loading:true}', ()=>{
    let Component = getWrappingComponent(useFetchGifs, category, limit);
    expect(result).toBe(null);
    act(() => ReactDOM.createRoot(container).render(<Component/>));
    expect(result).not.toBe(null);
    expect(result).toEqual({loading:true});
  });




  it(`El hook debe obtener ${limit} imagenes de la categoria ${category} en 3 segundos`, async ()=>{
    let Component = getWrappingComponent(useFetchGifs, category, limit);
    expect(result).toBe(null);
    act(() => ReactDOM.createRoot(container).render(<Component/>));
    await act(() => sleep(3000));

    expect(result).not.toBe(null);

    if(result != null) {
      expect(result.gifs.length).toBe(limit);
      expect(result.count).toBe(limit);
      expect(result.loading).toBe(false);
    }
  });

});