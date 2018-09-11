import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipes && props.recipes.map((recipe) => {
      return (
        <div key={recipe.label} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
            <img 
              className="recipe__box-img" 
              src={recipe.image} 
              alt={recipe.label}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.label.length < 20 ? `${recipe.label}` : `${recipe.label.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  { recipe.source }
                </span></p>
              </div>
              <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/recipe/${recipe.uri}`,
                  state: { recipe: recipe.label }
                }}>View Recipe</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Recipes;