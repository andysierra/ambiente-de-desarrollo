import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from '../../pages/GifExpertApp/GifGridItem';
import constants from '../../pages/GifExpertApp/GifExpertApp.constants';

describe('Tests over GifGridItem', ()=>{
  test('should render the component correctly', () => {
    
    const {data, loading, meta} = useFetchGifs("megamente", constants.limit);

    console.log(data, loading, meta);
  })
});