import React from "react";
import "./price.css";
import ListItem from "./listItem/listItem";
import img from "./images/img.png";

function Price() {
  return (
    <div className="price">
      <div className="priceList">
        <ListItem name="RitmStyle с погружением" value="1000р." />
        <ListItem name="Абонемент на RitmStyle" value="5500р." />
        <ListItem name="RitmStyle для пар" value="6000р." />
        <ListItem name="RitmStyle для беременных" value="13500р." />
        <ListItem name="RitmStyle +  фотосессия" value="11500р." />
      </div>
      <div className="priceImg">
        <img src={img} />
        <p>Подарочный сертификат </p>
      </div>
    </div>
  );
}
export default Price;
