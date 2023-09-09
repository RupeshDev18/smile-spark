import React from "react";
import "./CategorySelector.css"; // Import the CSS file for this component

function CategorySelector(props) {
  return (
    <div className="category-selector">
      <label>Select a Category:</label>
      <select value={props.category} onChange={props.onCategoryChange}>
        <option value="funny">Funny</option>
        <option value="romantic">Romantic</option>
        <option value="smooth">Smooth</option>
        <option value="clever">Clever</option>
        <option value="cute">Cute</option>
        <option value="corny">Corny</option>
        <option value="cheesy">Cheesy</option>
        <option value="flirty">Flirty</option>
      </select>
    </div>
  );
}

export default CategorySelector;
