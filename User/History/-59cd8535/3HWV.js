import { shallow } from "enzyme"; // on migration process
import { render, screen, fireEvent } from '@testing-library/react';
import GifExpertApp from "../../pages/GifExpertApp/GifExpertApp";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas sobre GifExpertApp', ()=>{

  let container;

  beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(()=>{
    document.body.removeChild(container);
    container = null;
  });

  test('Debe de hacer match con snapshot', ()=>{
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('[With React 18 deprecation warning] debe tener un input', ()=>{
    const wrapper = render(<GifExpertApp/>);
    screen.debug();
  });

});