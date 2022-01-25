import React from "react";
// import img from "../images/airbnb-logo-10.png";

export default function nav() {
  return (
    <nav className="navbar">
      <img src="images1/logo.png" className="navbar-image"></img>
      <span>Ghumante</span>
      <ul className="listitems-navbar">
        <li>Home</li>
        <li>Welcome</li>
        <li>Hotel-List</li>
      </ul>
    </nav>
  );
}
