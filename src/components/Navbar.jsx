import React, { useState } from "react";
import "../scss/Navbar.scss";

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  const handleNavToggle = () => {
    setToggler(!toggler);
  };
  return (
    <header>
      <nav className="nav">
        <div className="logo-div">
          <img src="./images/logo.svg" alt="logo image" />
        </div>
        <div className={`menu-items ${toggler ? "active" : ""}`}>
          <ul className="nav-links">
            <li className="features">
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="btn-els">
            <button className="log-btn">Login</button>
            <button className="sign-btn">Sign Up</button>
          </div>
        </div>
        <div className="toggle-menu">
          <button onClick={handleNavToggle} className="menu-btn">
            <img
              src={
                toggler
                  ? "./images/icon-close.svg"
                  : "./images/icon-hamburger.svg"
              }
              alt="hamburger menu icon"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
