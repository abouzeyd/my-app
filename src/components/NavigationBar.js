import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const NavigationBar = () => {
  const naStyle = {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div className="nav">
      <Link to="/" className="nav_logo">
        <img src={logo} alt="text" />
      </Link>
      <ul className="nav_Link">
        <div className="nav_text">
          <Link to="/views" style={naStyle}>
            <li>Views</li>
          </Link>
          <Link to="/about" className="nav_text" style={naStyle}>
            <li>About</li>
          </Link>
        </div>

        <div className="nav_sign">
          <Link to="/form" style={{ textDecoration: "none", color: "red" }}>
            Sign Up
          </Link>
        </div>
      </ul>
    </div>
  );
};
export default NavigationBar;
