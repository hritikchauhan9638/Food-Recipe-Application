/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../recipe-UI/style.css';

function Recipe({ recipe }) {
  return (
    <div className='recipeTile'>
      <img
        src={recipe['recipe']['image']}
        alt='recipe image'
        className='recipeTile__image'
        onClick={() => window.open(recipe['recipe']['url'])}
      />
      <p className='recipeTile__name'>{recipe['recipe']['label']}</p>
    </div>
  );
}

export default Recipe;
