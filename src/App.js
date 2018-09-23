import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
    console.log(this.state.hits);
  }
  componentWillMount = () => {
    const json = localStorage.getItem("recipes");
    const hits = JSON.parse(json);
    this.setState({ hits });
  }
  componentDidUpdate = () => {
    const hits = JSON.stringify(this.state.hits);
    localStorage.setItem("recipes", hits);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🍕 Pizza Totally Rocks 🍕</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.hits} />
      </div>
    );
  }
}

export default App;