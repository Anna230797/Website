import React from "react";
import "./newsItem.css";
import New from "./new/new";

function NewsItem() {
  return (
    <div className="newsItem">
      <div className="container">
      <hr></hr>  
        <div className="newsItemTitle">
          <p>Новости</p>
        </div>
        <div className="itemNews">
          <New Text='Новый формат сеансов'/>
          <New Text='Новый формат сеансов'/>
          <New Text='Новый формат сеансов'/>
          <New Text='Новый формат сеансов'/>
          <New Text='Новый формат сеансов'/>
          <New Text='Новый формат сеансов'/>
        </div>
        <hr></hr>  
      </div>
    </div>
  );
}
export default NewsItem;
