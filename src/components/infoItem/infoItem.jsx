import React from "react";
import "./infoItem.css";
import image from "./images/image.png";

function InfoItem() {
  return (
      
    <div className="infoItem">
      <div className="container">
        <hr></hr>  
        <div className="infoTitle">
          <p>Новый формат сеансов</p>
        </div>
        <div className="infoBox">
          <div className="info">
            <div className="data">
              <p>13.02.2022</p>
            </div>
            <div className="infoSubTitle">
              <p>Новый формат сеансов</p>
            </div>
            <div className="infoText">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                massa vitae tempus at pretium lacus viverra. Vitae libero
                vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh
                et morbi tristique suspendisse morbi. Consequat facilisi tortor
                consectetur magnis odio. Risus, aenean tortor cras consectetur
                lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a.
                Maecenas sed pellentesque bibendum vitae at praesent sed. Amet
                pretium arcu gravida arcu ut dui sem quis id. Tristique in leo
                donec proin odio eget. Neque ut in egestas lacus sit nunc, nec.
                Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar
                nunc fermentum vulputate ultrices pulvinar sed ultrices quis.
                Tempor facilisis tellus ac, odio. A amet congue tristique nibh
                malesuada lectus. Purus quam dapibus rhoncus iaculis amet
                tristique. Mattis fusce lorem fames mauris orci rhoncus, amet
                fringilla. Quis integer vitae at vitae urna etiam sed eu sit.
                Vitae turpis ullamcorper habitant fermentum aliquet volutpat.{" "}
              </p>
            </div>
          </div>
          <div className="infoImg">
            <img src={image} />
          </div>
        </div>
        <hr></hr>  
      </div>
    </div>
  );
}
export default InfoItem;
