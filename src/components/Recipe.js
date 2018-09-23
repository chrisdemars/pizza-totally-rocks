import React from 'react';
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    // const title = this.props.location.state.recipe;
    const req = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);

    const res = await req.json();
    this.setState({ activeRecipe: res.hits[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (  
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe" style={{ marginBottom: "2rem", backgroundColor: "aquamarine", padding: "20px"}}>
            <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>
            <h3 className="active-recipe__title">{ recipe.label }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ recipe.source }</span>
            </h4>
            <p className="active-recipe__website">Website:
              <span><a href={recipe.url}>{recipe.url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;
