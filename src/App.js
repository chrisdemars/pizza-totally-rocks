import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

class App extends Component {
  state = {
    recipes: []
  };

  setStorage = (recipes) => {
    let data = JSON.stringify(recipes);
    localStorage.setItem("recipes", data);
  };

  getStorage = () => {
    let json = localStorage.getItem("recipes");
    if (!json) {
      json = [];
      this.setStorage(json);
    }
    return json;
  };

  getRecipe = async () => {
    const api_call = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
  };

  componentWillMount = () => {
    const json = localStorage.getItem("recipes");
    const hits = JSON.parse(json);
    this.setState({ hits });
  };

  componentDidUpdate = () => {
    const hits = JSON.stringify(this.state.hits);
    localStorage.setItem("recipes", hits);
    this.setStorage({ hits });
    return this.hits;
  };

  componentWillMount = async () => {
    let recipes = await this.getRecipe();
    this.setState({ recipes: recipes });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span role="img" aria-label="Pizza Slice">
              🍕
            </span>{" "}
            Pizza Totally Rocks{" "}
            <span role="img" aria-label="Pizza Slice">
              🍕
            </span>
          </h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.hits} />
      </div>
    );
  }
}

export default App;
