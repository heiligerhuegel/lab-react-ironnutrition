import { useState } from "react";
import "./../App.css";

function AddFoodForm({ addFood, hideForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };

  const handleServings = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    // Prevent default behavior of browser (reload)
    event.preventDefault();

    // Get the data from the state/inputs
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log(newFood);
    // FUNCTION FROM TOP TO ADD NEW MOVIE WITH THE DATA PASSED BY FORM
    addFood(newFood);

    //clearinputs
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={hideForm ? "hidePanel" : "showPanel"}
    >
      <label>Name</label>
      <br />
      <input name="name" value={name} type="text" onChange={handleName} />
      <br />
      <label>Image</label>
      <br />
      <input name="image" value={image} type="text" onChange={handleImage} />
      <br />
      <label>Calories</label>
      <br />
      <input
        name="calories"
        value={calories}
        type="number"
        onChange={handleCalories}
      />
      <br />
      <label>Servings</label>
      <br />
      <input
        name="servings"
        value={servings}
        type="number"
        onChange={handleServings}
      />
      <br />
      <button type="submit">Submit</button>
      <hr />
    </form>
  );
}

export default AddFoodForm;
