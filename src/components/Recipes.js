import React from "react";
import { Link } from "react-router-dom";

const Recipes = (props) => {
  return props.recipes.length > 0 ? (
    <div className="container">
      <div className="row">
        {props.recipes.map(({ recipe }) => {
          return (
            <div
              key={recipe.uri.split("#")[1]}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={recipe.image}
                  alt={recipe.label}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.label && recipe.label.length < 20
                      ? `${recipe.label}`
                      : `${recipe.label.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{recipe.source}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.uri.split("#")[1]}`,
                      state: { recipeUri: recipe.uri.split("#")[1] }
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default Recipes;
