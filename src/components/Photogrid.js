import React from "react";
// import img2 from "../images/airbnb-air-bnb-apartment-apartments-for-rent-rent-platform.jpg";

export default function photogrid() {
  const date = new Date();
  const year = date.getFullYear();
  const hours = date.getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon";
  } else {
    timeofDay = "Good Night sweet night ";
  }
  return (
    <section className="photogrid-area-class">
      <div className="image-container">

      <img src="images1/home-wallpaper.jpg" className="photogridimage"></img>
      <h1 className="text-div">EXPERIENCES
      </h1>
      <span className="short-text">OF A LIFE TIME</span>
      

      </div>
      
      <div id main-contents>
        <h1 className="main-title">Welcome To our Site</h1>
        <p className="main-paragraph">
          Hello there, {timeofDay}! 
          {/* current date is {date.toLocaleDateString()} */}
          current date is : {date.toTimeString() + " " + date.toDateString()}
          current year is : {year}
        </p>
      </div>
    </section>
  );
}
