import React from "react";
import "../scss/Navbar.scss";

const Navbar = () => {
  return (
    <navbar className="nav">
      <div className="logo-div">
        <img src="./images/logo.svg" alt="logo image" />       
      </div>
      <div className="menu-items">
        <ul className="nav-links">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          <div className="btn-els">
            <button className="log-btn">Login</button>
            <button className="sign-btn">Sign Up</button>
          </div>
        </ul>       
      </div>     
      <div className="toggle-menu">
        <button className="menu-btn">
          <img src="./images/icon-hamburger.svg" alt="hamburger menu icon" />
        </button>
      </div>
    </navbar>
  );
};

export default Navbar;