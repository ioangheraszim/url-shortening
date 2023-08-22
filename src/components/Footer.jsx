import React from "react";
import "../scss/Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="logo">
          <h2 className="logo-title">Shortly</h2>
        </div>
        <div className="footer-list">
          <ul>
            <li className="nav-title">Feautures</li>
            <ul className="sub-title">
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </ul>
          <ul>
            <li className="nav-title">Resources</li>
            <ul className="sub-title">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </ul>
          <ul>
            <li className="nav-title">Company</li>
            <ul className="sub-title">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-icons">
          <button className="icon-btn">
            <img src="./images/icon-facebook.svg" alt="facebook icon" />
          </button>
          <button className="icon-btn">
            <img src="./images/icon-twitter.svg" alt="twitter icon" />
          </button>
          <button className="icon-btn">
            <img src="./images/icon-pinterest.svg" alt="pinterest icon" />
          </button>
          <button className="icon-btn">
            <img src="./images/icon-instagram.svg" alt="instagram icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
