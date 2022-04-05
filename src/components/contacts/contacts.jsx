import React from "react";
import "./contacts.css";
import { YMaps, Map } from "react-yandex-maps";
import Location from "./location/location";
import icon from "./images/icon.svg";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contactsMap">
        <YMaps>
          <div>
            <Map
              width="856px"
              height="604px"
              defaultState={{ center: [59.94, 30.31], zoom: 10 }}
            />
          </div>
        </YMaps>
      </div>
      <div className="contactsLocationBox">
        <div className="contactsLocation">
          <div className="locationName">
            <p> Бассейн WorkClass</p>
          </div>
          <Location icon={icon} text="Невский 140" />
          <Location icon={icon1} text="м. Спасская" />
          <Location icon={icon1} text="Запись по договоренности" />
          <div className="locationBtn">
            <button>
              <a href="#"> Записаться на сеанс</a>
            </button>
          </div>
        </div>
        <div className="contactsLocation">
          <div className="locationName">
            <p> Бассейн "На Гороховой"</p>
          </div>
          <Location icon={icon} text="3-й проезд Иванова" />
          <Location icon={icon1} text="м. Крестовский остров" />
          <Location icon={icon1} text="Запись по договоренности" />
          <div className="locationBtn">
            <button>
              <a href="#"> Записаться на сеанс</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
