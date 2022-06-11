import { shallow } from "enzyme";
import GifExpertApp from "../../pages/GifExpertApp/GifExpertApp";

describe('Pruebas sobre GifExpertApp', ()=>{

  test('Debe de hacer match con snapshot', ()=>{
    const wrapper = shallow(<GifExpertApp/>);
    expect(wrapper).toMatchSnapshot();
  });

});