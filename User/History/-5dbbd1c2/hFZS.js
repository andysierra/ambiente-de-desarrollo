import {useState} from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = _ => setCategories(cats => [...cats, 'alpha']);

  return(
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>

      {/* <button className='btn btn-success' onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map(cat => <li key={cat}>{cat}</li>)
        }
      </ol>
    </div>
  );

};

export default GifExpertApp;