import React from "react";

const Form = (props) => (
  <form
    onSubmit={props.getRecipe}
    style={{
      marginBottom: "2rem",
      backgroundColor: "aquamarine",
      padding: "20px"
    }}
  >
    <input className="form__input" type="text" name="recipeName" aria-label="Search Pizza" />
    <button className="form__button">
      <span role="img" aria-label="Pizza Slice">
        🍕
      </span>
      <span role="img" aria-label="Pizza Slice">
        🍕
      </span>
      <span role="img" aria-label="Pizza Slice">
        🍕
      </span>
    </button>
  </form>
);

export default Form;
