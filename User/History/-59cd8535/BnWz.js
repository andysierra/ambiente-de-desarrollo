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
    expect(document.getElementsByTagName('input').length).toBe(1);
  });

  it('Más pruebas complicadas de react udemy video #110 testing: https://www.udemy.com/course/react-cero-experto/learn/lecture/32021650#questions/17707020?ranMID=39197&ranEAID=wizKxmN8no4&ranSiteID=wizKxmN8no4-xDfuL48f7vTxQgsDAvDy1A&LSNPUBID=wizKxmN8no4&utm_source=aff-campaign&utm_medium=udemyads',
  ()=>{
    
  });
});