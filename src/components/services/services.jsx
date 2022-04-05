import React from "react";
import "./services.css";
import BoxImg from "./boxImg/boxImg";




function Services() {
  return (
    <div className="services">
      <div className="boxImg">
        <div className="img">
          <p>Стандартный RitmStyle</p>
        </div>
        <div className="box">
       <BoxImg text='RitmStyle для пар'/>
       <BoxImg text='RitmStyle с полным погружением под воду'/>
       <BoxImg text='RitmStyle для беременных'/>
       <BoxImg text='RitmStyle + красочная подводная фотосессия'/>
        </div>
      </div>
    </div>
  );
}
export default Services;
