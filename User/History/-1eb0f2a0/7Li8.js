import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGrid from "../../pages/GifExpertApp/GifGrid";

// Mockeo el custom hook, INHABILITANDO SU IMPL. EN EL COMPONENTE:
jest.mock("../../hooks/useFetchGifs");

describe('pruebas sobre Gifgrid.js', () => {

  let category = "pokemon";

  // let wrapper = shallow(<GifGrid cat={category} />);
  // In this case i prefer use shallow in each test
  /* beforeEach(()=>{
    wrapper = shallow(<GifGrid cat={category} />);
  }); */




  test('debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid cat={category} />); 
    expect(wrapper).toMatchSnapshot();
  });



  
  test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {

    const gifsDePrueba = [
      {
        id: '1',
        title: category,
        url: 'https://media.giphy.com/media/urC4810EjpQitkFWEn/giphy.gif'
      },
      {
        id: '2',
        title: category,
        url: 'https://media.giphy.com/media/urC4810EjpQitkFWEn/giphy.gif'
      }
    ];

    useFetchGifs.mockReturnValue({
      gifs:       gifsDePrueba,
      count:      2,
      totalCount: 999,
      loading:    false
    });
    const wrapper = shallow(<GifGrid cat={category} />); 
    expect(wrapper.find('GifGridItem').length).toBe(gifsDePrueba.length);
  });
})