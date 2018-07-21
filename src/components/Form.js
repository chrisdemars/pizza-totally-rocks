import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem", backgroundColor: "aquamarine", padding: "20px"}}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">🍕🍕🍕</button>
  </form>
);

export default Form;