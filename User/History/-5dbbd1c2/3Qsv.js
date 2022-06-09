import {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  return(
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      <ol>
        {
          categories.reverse().map(cat => {
            const key = cat+categories.indexOf(cat);
            return <GifGrid key={key} cat={cat}/>
          })
        }
      </ol>
    </div>
  );

};

export default GifExpertApp;