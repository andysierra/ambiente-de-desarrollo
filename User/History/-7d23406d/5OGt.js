import { shallow } from "enzyme";
import AddCategory from "../../pages/GifExpertApp/AddCategory";

describe('', ()=>{
  
  let fn = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={fn} />);

  beforeEach(()=>{
    wrapper = shallow(<AddCategory setCategories={fn} />);
  });
  
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const inputValue = 'ironman';

    input.simulate('change', {
      target: {
        value: inputValue
      }
    });

    wrapper.find('form').simulate('submit', {preventDefault(){}});

    expect(fn).toHaveBeenCalled();

    expect(input.prop('value')).toBe('');
  })
});