import React from "react";
import "./listItem.css";

function ListItem({name, value}) {
  return (
    <div className="listItem">
      <ul>
        <li>{name}</li>
      </ul>
      <ul>
          <li>
              {value}
          </li>
      </ul>
    </div>
  );
}
export default ListItem;
