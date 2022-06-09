import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from '../../pages/GifExpertApp/GifGridItem';
import constants from '../../pages/GifExpertApp/GifExpertApp.constants';

describe('Tests over GifGridItem', ()=>{
  test('should render the component correctly', done => {
    
    const id = 'some id';
    const title = 'some title';
    const url = 'https://media2.giphy.com/media/zj6NmJC6trBhm/giphy.gif?'+
    'cid=c0222e32lx6l5f4wy8buqpwvenpm9bi8du5loy8s3klv7byz&rid=giphy.gif&ct=g';
    const onload = ()=>{
      console.log('loaded!');
      done();
    };

    const wrapper = shallow (
      <GifGridItem 
        id      = {id} 
        title   = {title} 
        url     = {url} 
        onload  = {onload}/>
    );
    expect(wrapper).toMatchSnapshot();
  })
});