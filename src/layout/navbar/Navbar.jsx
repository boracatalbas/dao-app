import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const Navbar = ({ page }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const logoSelector = () => {
    if (page === "sponsors") {
      return <img src={logo2} alt="logo" />;
    } else if (page === "become-sponsor") {
      return <img src={logo} alt="logo" />;
    } else {
      return <img src={logo} alt="logo" />;
    }
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <nav className={`navbar ${page}`}>
      {logoSelector()}
      <div className="menu">
        <ul>
          <motion.li variants={linkVariants} initial="hidden" animate="visible">
            <Link to="/">HOME</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            onClick={handleScroll}
          >
            <Link to="/#about">ABOUT US</Link>
          </motion.li>
          <motion.li variants={linkVariants} initial="hidden" animate="visible">
            <Link to="/speakers">SPEAKERS</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            SPONSORS
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <motion.li
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to="/sponsors">Our Sponsors</Link>
                </motion.li>
                <motion.li
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to="/become-sponsor">Become a Sponsor</Link>
                </motion.li>
              </ul>
            )}
          </motion.li>
          <motion.li variants={linkVariants} initial="hidden" animate="visible">
            FAQ
          </motion.li>
        </ul>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </nav>
  );
};

export default Navbar;
