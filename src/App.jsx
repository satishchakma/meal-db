import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./assets/components/Header/Header";
import { Button } from "react-bootstrap";
import Meals from "./assets/components/Meals/Meals";
import { useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, [search]);
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}></Header>
      <Meals meals={meals}></Meals>
    </div>
  );
}

export default App;
