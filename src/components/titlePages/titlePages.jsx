import React from "react";
import "./titlePages.css";

import Services from "../services/services";
import Reviews from "../reviews/reviews";
import About from "../about/about";
import Price from "../price/price";
import Contacts from "../contacts/contacts";
function TitlePages() {
  return (
    <div className="titlePages">
      <div className="container">
        <div className="first-screen">
          <div className="screenText">
            <p>Укрепление здоровья</p>
          </div>
          <div className="screenTitle">
            <p> Акватерапия RitmStyle</p>
          </div>
        </div>
        <div className="header_services">
          <div className="servicesTitle">
            <p>Сеансы RitmStyle</p>
          </div>
          <Services />
        </div>
        <div className="header_reviews">
          <div className="reviewsTitle">
            <p>Отзывы</p>
            <Reviews name="Кира Иванова" />
            {/* <Reviews name='Александра Дмитриева'/>
            <Reviews name='Яна Жернова'/> */}
          </div>
        </div>
        <div className="header_about">
          <div className="about_Title">
            <p> Об RitmStyle</p>
            <About />
          </div>
        </div>
        <div className="header_price">
          <div className="price_Title">
            <p> Стоимость сеансов</p>
          </div>
          <Price />
        </div>
        <div className="header_contacts">
          <Contacts />
        </div>
        
      </div>
    </div>
  );
}
export default TitlePages;
