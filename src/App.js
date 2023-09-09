import React, { useState } from "react";
import CategorySelector from "./Components/CategorySelector/CategorySelector";
import PickupLineDisplay from "./Components/PickupLineDisplay/PickupLineDisplay";
// import axios from "axios";

function App() {
  const [category, setCategory] = useState("funny");
  const [pickupLine, setPickupLine] = useState("welcome");

  const fetchRandomPickupLine = async () => {
    const result = await fetch(
      `https://smile-spark-4d2n.onrender.com/api/pickup-line/${category}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const a = await result.json();
    console.log(a);
    setPickupLine(a.pickupLine);
  };

  return (
    <div className="App">
      <h1>Random Pickup Line Generator</h1>
      <CategorySelector
        category={category}
        onCategoryChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={fetchRandomPickupLine}>Get Pickup Line</button>
      {pickupLine && <PickupLineDisplay pickupLine={pickupLine} />}
    </div>
  );
}

export default App;
