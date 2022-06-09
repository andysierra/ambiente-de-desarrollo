import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from '../../pages/GifExpertApp/GifGridItem';
import constants from '../../pages/GifExpertApp/GifExpertApp.constants';

describe('Tests over GifGridItem', ()=>{
  test('should render the component correctly', () => {
    
    //const {gifs, loading, count, totalCount} = useFetchGifs("megamente", constants.limit);

    const wrapper = shallow(<GifGridItem/>);
    expect(wrapper).toMatchSnapshot();
  })
});