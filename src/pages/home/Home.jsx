import React, { useState, useEffect } from "react";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner4.jpg";
import img5 from "../../assets/banner4.png";
import img6 from "../../assets/banner5.jpg";
import Navbar from "../../layout/navbar/Navbar";
import About from "../../components/aboutUs/About";
import { Link } from "react-router-dom";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  useEffect(() => {
    backgrounds.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgrounds = [img3, img1, img2, img5, img6];

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <div
        className="header"
        style={{
          backgroundImage: `url(${backgrounds[currentBgIndex]})`,
        }}
      >
        <Navbar />
        <div className="wrapper">
          <motion.h1
            initial={{
              x: -500,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
            }}
          >
            ISTANBUL DAO BLOCKCHAIN WEEK
          </motion.h1>
          <motion.h3
            initial={{
              x: -900,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              delay: 0.3,
            }}
          >
            EMPOWERING CHANGE THROUGH DECENTRALIZATION
          </motion.h3>
          <div className="buttons">
            <button onClick={handleScroll}>ABOUT US</button>
            <button className="sponsor">
              <Link to="/sponsors">SPONSORSHIP</Link>
            </button>
          </div>
        </div>
      </div>
      <About id="about" />
    </div>
  );
};

export default Home;
