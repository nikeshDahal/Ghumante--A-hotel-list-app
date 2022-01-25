/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img3 from "../images/pexels-photo-674010.jpeg";
import img4 from "../images/Simple-Phone-Icon-In-Circle-png-hd.png";
// import img5 from "../images/mail-142.png";
import img5 from "../images/126-1269928_png-file-svg-call-email-website-icon-clipart.png";
import locationimg from "../images/placeholder.png";
import Carddatas from "./Carddatas";
import star from "../images/star.png";

export default function contact() {
  return (
    <div className="container">
      {Carddatas.map((data) => {

        let checkStatus;
        if (data.spots === 0) {
          checkStatus = "Occupied";
          console.log("occupied");
        } else {
          checkStatus = "available";
          console.log("available");
        }

        return (
          <div className="contact-card" key={data.id}>
            {checkStatus && <div className="status-badge">{checkStatus}</div>}
            <img src={data.img} />
            <h3>{data.name}</h3>

            <span className="data-descriptions">{data.descriptions}</span>

            <div className="info-group">
              <img src={img4} />
              <p>{data.phone}</p>
              <img className="locationimg" src={locationimg} />
              <span>{`${data.location}`}</span>
              <img className="locationimg" src={star} />
              <span>
                {data.status.rating}({data.status.reviewCount})
              </span>
            </div>
            <div className="info-group">
              <img src={img5} />
              <p>{data.email}</p>{" "}
              <span className="read-more-button">
                <button>More Details</button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
