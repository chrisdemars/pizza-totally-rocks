import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
class App extends Component {
  state = {
    recipes: []
  }
  setStorage = (recipes) => {
    let data = JSON.stringify(recipes);
    localStorage.setItem("recipes", data);
  }
  getStorage = () => {
    let json = localStorage.getItem("recipes");
    if (json) {
      json = [];
      this.setStorage(json);
    }
    return json;
  }
  getRecipe = async (e) => {
    // const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  }
  componentWillMount = () => {
    let recipes = this.getStorage();
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    this.setStorage(recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span role="img" aria-label="Pizza Slice">🍕</span> Pizza Totally Rocks <span role="img" aria-label="Pizza Slice">🍕</span></h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
