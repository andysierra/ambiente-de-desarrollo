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
          categories.reverse().map(cat => 
            <GifGrid 
              key={
                categories.filter(c=>cat===c).length>1?
                  cat+categories.filter(c=>cat===c).length
                  :
                  cat
                } 
                cat={cat} />
          )
        }
      </ol>
    </div>
  );

};

export default GifExpertApp;