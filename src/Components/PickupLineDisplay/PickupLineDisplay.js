import React from "react";
import "./PickupLineDisplay.css"; // Import the CSS file for this component

function PickupLineDisplay(props) {
  return (
    <div className="pickup-line">
      <p>
        <strong>Pickup Line:</strong>
      </p>
      <p className="line-text">{props.pickupLine}</p>
    </div>
  );
}

export default PickupLineDisplay;
