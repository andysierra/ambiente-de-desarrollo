import { shallow } from "enzyme";
import AddCategory from "../../pages/GifExpertApp/AddCategory";

describe('', ()=>{
  
  let fn = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={fn} />);

  beforeEach(()=>{
    wrapper = shallow(<AddCategory setCategories={fn} />);
  });
  
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    // prepare
    const input = wrapper.find('input');
    const inputValue = 'ironman';

    // simulate
    input.simulate('change', {
      target: {
        value: inputValue
      }
    });
    wrapper.find('form').simulate('submit', {preventDefault(){}});

    // expect results
    expect(fn).toHaveBeenCalledTimes(1);  // was fn called once?
    expect(fn).toHaveBeenCalledWith(expect.any(Function)); // was fn called with useState's way to set state with function?
    expect(input.prop('value')).toBe(''); // input text was empty correctly?
  })
});