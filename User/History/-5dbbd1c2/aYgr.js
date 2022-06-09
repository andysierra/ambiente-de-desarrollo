import {useState} from 'react';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    setCategories(cats => [...cats, 'alpha']);
  }

  return(
    <div>
      <h2>GifExpertApp</h2>
      <hr/>

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {
          categories.map(cat => <li key={cat}>{cat}</li>)
        }
      </ol>
    </div>
  );

};

export default GifExpertApp;