import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu({ name, url }) {
  return (
    <div className="menu">
      <p>
        <Link to={url}> {name} </Link>
      </p>
    </div>
  );
}
export default Menu;
