import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import { getStorage, setStorage } from "./helpers/localStorage";

class App extends Component {
  state = {
    recipes: [],
    from: 0,
    to: 20
  };

  getRecipes = async () => {
    const query = this.props.location.search.split("=")[1];

    if (query || !getStorage("recipes")) {
      const api_call = await fetch(
        `https://api.edamam.com/search?q=pizza${
          query ? "+" + escape(query) : ""
        }&from=${this.state.from}&to=${this.state.to}&app_id=${
          process.env.REACT_APP_API_ID
        }&app_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api_call.json();
      this.setState({ recipes: data.hits });
      setStorage(query || "recipes", data.hits);
    } else {
      this.setState({ recipes: getStorage("recipes") });
    }
  };

  componentDidMount() {
    this.getRecipes();
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
        <Form getRecipe={this.getRecipes} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
