import React from "react";
import "./about.css";
import img from "./images/img.png";
function About() {
  return (
    <div className="about">
      <div className="aboutBox">
        <div className="aboutTitle">
          <p> RitmStyle массаж </p>
        </div>
        <div className="aboutText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est.
            Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl,
            ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
            Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas
            dictumst quam. Felis amet diam, non augue massa. Egestas molestie
            lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.
          </p>
        </div>
      </div>
      <div className="aboutImg">
        <img src={img} />
      </div>
      
        <div className="aboutImg1">
          <img src={img} />
        </div>
        <div className="aboutBox1">
        <div className="aboutTitle1">
          <p>RitmStyle гидротерапия </p>
        </div>
        <div className="aboutText1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est.
            Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl,
            ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
            Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas
            dictumst quam. Felis amet diam, non augue massa. Egestas molestie
            lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
