import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getStorage, setStorage } from "../helpers/localStorage";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecipe: {}
    };
  }

  getRecipe = async () => {
    const recipeUri = this.props.location.state.recipeUri;
    if (getStorage(recipeUri)) {
      this.setState({ activeRecipe: getStorage(recipeUri) });
    } else {
      const searchUrl =
        escape("http://www.edamam.com/ontologies/edamam.owl#") +
        escape(recipeUri);

      const req = await fetch(
        `https://api.edamam.com/search?r=${searchUrl}&app_id=${
          process.env.REACT_APP_API_ID
        }&app_key=${process.env.REACT_APP_API_KEY}`
      );

      const res = await req.json();
      this.setState({ activeRecipe: res[0] });
      setStorage(recipeUri, res[0]);
    }
  };

  componentDidMount() {
    if (this.props.location.state.recipeUri) {
      this.getRecipe();
    }
  }

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe && (
          <div
            className="active-recipe"
            style={{
              marginBottom: "2rem",
              backgroundColor: "aquamarine",
              padding: "20px"
            }}
          >
            <img
              className="active-recipe__img"
              src={recipe.image}
              alt={recipe.label}
            />
            <h3 className="active-recipe__title">{recipe.label}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.source}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.url}>{recipe.url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
