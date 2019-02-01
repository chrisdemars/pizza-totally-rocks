import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

class App extends Component {
  state = {
    recipes: []
  };

  setStorage = (name, item) => {
    let data = JSON.stringify(item);
    localStorage.setItem(name, data);
  };

  getStorage = (name) => {
    let json = localStorage.getItem(name);
    if (!json) {
      json = [];
      this.setStorage(name, json);
    }
    return json;
  };

  getRecipe = async () => {
    const api_call = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
    this.setStorage("recipes", data.hits);
  };

  componentDidMount() {
    this.getRecipe();
  }

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
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
