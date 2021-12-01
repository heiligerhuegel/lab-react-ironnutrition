import { useState } from "react";

function SeachBar({ seachFunc, hideseachbarFunc }) {
  const [seach, setseach] = useState("");

  const handleSeach = (event) => {
    setseach(event.target.value);
    seachFunc(event.target.value);
  };

  return (
    <>
      <form className="seachbar">
        <label>Seach:</label>
        <br />
        <input
          name="Seachbar"
          type="text"
          value={seach}
          onChange={handleSeach}
        />
        <hr />
      </form>
    </>
  );
}

export default SeachBar;
