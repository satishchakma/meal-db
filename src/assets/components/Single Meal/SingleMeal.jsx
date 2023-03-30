import React from "react";
import "./SingleMeal.css";

const SingleMeal = ({ meal }) => {
  console.log(meal);
  return (
    <div className="singleMeal">
      <img src={meal.strMealThumb} />
      <h2>{meal.strMeal}</h2>
      <p>{meal.strInstructions.slice(0, 100)}</p>
    </div>
  );
};

export default SingleMeal;
