import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src={logo} alt="logo" />
        <p>2024 © Istanbul DAO Blockchain. All rights reserved.</p>
      </div>
      <div className="mid">
        <h2>Useful Links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About Us</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/sponsors">Our Sponsors</Link>
          </li>
          <li>
            <Link to="/become-sponsor">Become a Sponsor</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <h2>Follow Us</h2>
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
