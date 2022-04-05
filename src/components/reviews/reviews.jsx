import React from "react";
import "./reviews.css";

function Reviews({ name }) {
  return (
    <div className="reviews">
      <div className="reviews_Title">
        <p>{name}</p>
      </div>
      <div className="reviewsText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam
          risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu,
          aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim
          nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat
          vestibulum a lectus sed blandit. Venenatis urna mattis eu enim
          molestie iaculis et aliquet. Velit in pellentesque vestibulum
          phasellus orci. Fermentum sed phasellus aliquam nulla non aenean.
          Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis
          leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in
          egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam
          nulla pulvinar mauris vel lacinia venenatis.
        </p>
      </div>
    </div>
  );
}
export default Reviews;
