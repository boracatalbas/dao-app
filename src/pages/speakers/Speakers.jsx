import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import spk1 from "../../assets/speakers/speaker-1.png";
import "./Speakers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import spk2 from "../../assets/speakers/speaker-2.png";
import spk3 from "../../assets/speakers/speaker-3.png";
import spk4 from "../../assets/speakers/speaker-4.png";
import spk5 from "../../assets/speakers/speaker-5.png";
import spk6 from "../../assets/speakers/speaker-6.png";
import spk7 from "../../assets/speakers/speaker-7.png";
import spk8 from "../../assets/speakers/speaker-8.jpg";
import { motion } from "framer-motion";
const Speakers = () => {
  const page = "";
  return (
    <div
      className="speakers-all
    "
    >
      <Navbar page={page} />
      <div className="speakers">
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={spk1} alt="img" />
          <div className="bot">
            {" "}
            <h2>Pascal Gauthier</h2>
            <h3>Chairman & CEO</h3>
            <div className="bot-wrapper">
              <h3>SANDBOX</h3>
              <div>
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
        >
          <img src={spk2} alt="img" />
          <div className="bot">
            <h2>Diana Biggs</h2>
            <h3>VP Global Partnerships</h3>
            <div className="bot-wrapper">
              <h3>Ledger</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <img src={spk3} alt="img" />
          <div className="bot">
            <h2>George Gvazava</h2>
            <h3>Chief Crypto Officer</h3>
            <div className="bot-wrapper">
              <h3>Bank of Georgia</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <img src={spk4} alt="img" />
          <div className="bot">
            <h2>Yosuke Yoshida</h2>
            <h3>Managing Partner</h3>
            <div className="bot-wrapper">
              <h3>Fabric Ventures</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
        >
          <img src={spk5} alt="img" />
          <div className="bot">
            <h2>Miriam Kiwan</h2>
            <h3>Founder, CEO </h3>
            <div className="bot-wrapper">
              <h3>SUN AG</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img src={spk6} alt="img" />
          <div className="bot">
            <h2>John Glover</h2>
            <h3>Crypto Officer</h3>
            <div className="bot-wrapper">
              <h3>Binance</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <img src={spk7} alt="img" />
          <div className="bot">
            <h2>Talal Tabbaa</h2>
            <h3>CEO & Co-Founder</h3>
            <div className="bot-wrapper">
              <h3>CoinMENA</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="speaker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        >
          <img src={spk8} alt="img" />
          <div className="bot">
            <h2>George Gvazava</h2>
            <h3>Chief Investment Officer</h3>
            <div className="bot-wrapper">
              <h3>Ledn</h3>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakers;
