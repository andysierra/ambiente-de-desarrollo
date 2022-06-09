import {useState} from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  return(
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      <ol>
        {
          categories.map(cat => 
            <
          )
        }
      </ol>
    </div>
  );

};

export default GifExpertApp;