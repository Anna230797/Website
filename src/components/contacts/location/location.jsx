import React from "react";
import "./location.css";


function Location({icon, text}) {
  return (
    <div className="location">
      <div className="imgAdd">
        <img src={icon} /> <p>{text}</p>
      </div>
    </div>
  );
}
export default Location;
