import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from '../../pages/GifExpertApp/GifGridItem';
import constants from '../../pages/GifExpertApp/GifExpertApp.constants';

describe('Tests over GifGridItem', ()=>{

  // Arrange
  const id = 'some id';
  const title = 'some title';
  const url = 'https://media2.giphy.com/media/zj6NmJC6trBhm/giphy.gif?'+
  'cid=c0222e32lx6l5f4wy8buqpwvenpm9bi8du5loy8s3klv7byz&rid=giphy.gif&ct=g';
  
  const onload = ()=>{console.log('loaded!')};
  const wrapper = shallow (
    <GifGridItem 
      id      = {id} 
      title   = {title} 
      url     = {url} 
      onload  = {onload}/>
  );

  test('should render the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
    const img = wrapper.find('img');
    expect(img.prop('alt')).toBe(id+title);
    expect(img.prop('src')).toBe(url);
    expect(wrapper.find('p').text()).toBe(title);
  });

  test('it is a card that have card-body and card-footer', () => {
    expect(wrapper.find('div'));
    
  })
});