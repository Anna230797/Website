import React from "react";
import "./header.css";
import Menu from "./menu/menu";


import Vector from "./images/Vector.svg";
import W from "./images/W.svg";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_MenuBox">
          <div className="header_logo">
            <img src={Vector} />
            <img src={W} />
          </div>
          <div className="header_menu">
            <Menu name="Главная" url='#' />
            <Menu name="Сеансы" url='#'/>
            <Menu name="Отзывы" url='#' />
            <Menu name="Контакты" url='#'/>
            <Menu name="Новости" url='news' />
            <Menu name="Обо мне" url='#'/>
            <Menu name="Блог"  url='#'/>
          </div>
          <div className="menu_btn">
            <button>
              <a href="#">Записаться на сеанс </a>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Header;
