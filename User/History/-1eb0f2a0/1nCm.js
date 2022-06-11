import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGrid from "../../pages/GifExpertApp/GifGrid";

// Mockeo el custom hook, INHABILITANDO SU IMPL. EN EL COMPONENTE:
jest.mock("../../hooks/useFetchGifs");

describe('pruebas sobre Gifgrid.js', () => {

  let category = "pokemon";
  let wrapper = shallow(<GifGrid cat={category} />);

  // In this case i prefer use shallow in each test
  /* beforeEach(()=>{
    wrapper = shallow(<GifGrid cat={category} />);
  }); */

  test('debe mostrarse correctamente', () => {
    useFetchGifs.mockReturn({
      gifs: [],
      loading: true
    });
    wrapper = shallow(<GifGrid cat={category} />); 
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {
    
  });
})