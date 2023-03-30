import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleMeal from "../Single Meal/SingleMeal";
import "./Meals.css";

const Meals = ({ meals }) => {
  return (
    <div className="Meals">
      {meals.map((meal) => (
        <SingleMeal meal={meal}></SingleMeal>
      ))}
    </div>
  );
};

export default Meals;
