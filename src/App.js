import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Recipe from './recipe-UI/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [healthLabel, setHealthLabel] = useState('vegan');

  // Api related
  const YOUR_APP_ID = 'fa108253';
  const YOUR_APP_KEY = '2b4bde5dbb9643852e1aa23509810d0c';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    const res = await axios.get(url);
    const data = res.data;
    setRecipes(data.hits);
    console.log(recipes);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className='app'>
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input
          type='text'
          className='app__input'
          placeholder='Type ingredient'
          autoComplete='off'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select name='' className='app__healthlabels'>
          <option value='vegan' onClick={() => setHealthLabel('vegan')}>
            Vegan
          </option>
          <option
            value='vegetarian'
            onClick={() => setHealthLabel('vegetarian')}
          >
            Vegetarian
          </option>
          <option value='low-sugar' onClick={() => setHealthLabel('low-sugar')}>
            Low-sugar
          </option>
          <option
            value='dairy-free'
            onClick={() => setHealthLabel('dairy-free')}
          >
            Dairy-free
          </option>
          <option
            value='imuno-supportive'
            onClick={() => setHealthLabel('imuno-supportive')}
          >
            Imuno-supportive
          </option>
          <option
            value='wheat-free'
            onClick={() => setHealthLabel('wheat-free')}
          >
            Wheat-free
          </option>
        </select>
        <input type='submit' value='Get Recipe' className='app__submit' />
      </form>
      <div className='app__recipes'>
        {recipes.map((recipe, index) => {
          return <Recipe key={index} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;

// We used EDAMAM API for fetching recipes

