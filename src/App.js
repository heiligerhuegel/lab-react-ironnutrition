import "./App.css";
import foodsJSON from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SeachBar from "./components/SeachBar";

function App() {
  const [allfoods, setAllFoods] = useState(foodsJSON);
  const [foods, setFoods] = useState(foodsJSON);
  const [hideForm, sethideForm] = useState(true);

  const addFood = (newFood) => {
    const newFoods = [newFood, ...foods];
    setFoods(newFoods);
  };

  const seachFunc = (str) => {
    // get str.length
    let letters = str.length;
    // compate letters.length to each element in array in lowercase
    const seachedFoods = allfoods.filter((food) => {
      if (food.name.slice(0, letters).toLowerCase() === str.toLowerCase()) {
        return food;
      }
    });
    setFoods(seachedFoods);
  };

  const deleteFunc = (foodName) => {
    const goodFoodArr = allfoods.filter((food) => {
      console.log(food.name);
      console.log(foodName);
      return foodName !== food.name;
    });
    setAllFoods(goodFoodArr);
    setFoods(goodFoodArr);
  };

  const hideFormButton = () => {
    sethideForm(!hideForm);
  };

  return (
    <div className="App">
      <h1>Food List:</h1>
      <SeachBar seachFunc={seachFunc} />
      <AddFoodForm addFood={addFood} hideForm={hideForm} />
      <button
        onClick={() => {
          hideFormButton();
        }}
      >
        {hideForm ? "Show Form" : "Hide Form"}
      </button>

      {foods.length === 0 && <p>No Food!</p>}
      {foods.map((food) => (
        <FoodBox key={food.name} food={food} handleDelete={deleteFunc} />
      ))}
    </div>
  );
}

export default App;
