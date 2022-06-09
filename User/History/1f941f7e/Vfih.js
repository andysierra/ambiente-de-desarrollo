import { shallow } from "enzyme";
import GifGrid from "../../pages/GifExpertApp/GifGrid";

describe('pruebas sobre Gifgrid.js', () => {

  let category = "pokemon";
  let wrapper = shallow(<GifGrid cat={category} />);

  beforeEach(()=>{
    wrapper = shallow(<GifGrid cat={category} />);
  });

  test('should first', () => {
    
    expect(wrapper).toMatchSnapshot();

  })
})