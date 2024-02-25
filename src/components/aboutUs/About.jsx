import React from "react";
import "./About.scss";
import team from "../../assets/core-team.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <img src={team} alt="" />
      <p className="p1">
        İstanbul DAO is a decentralized autonomous organization serving as a
        platform that brings together the blockchain and crypto community in
        Istanbul. Our mission is to collaborate to strengthen the power of the
        local community and encourage innovation.
      </p>
      <div className="wrapper">
        <motion.div
          className="about-parts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h2>Who We Are?</h2>
          <p>
            We are a community of passionate developers, investors, anda
            enthusiasts from all corners of Istanbul. As a group that believes
            in the power of blockchain technology and understands the importance
            of progress in this field, we have come together under the umbrella
            of Istanbul DAO. Each of us represents various aspects of the
            community; some specialize in development, some in investment, while
            others focus on the social impact of blockchain technology. However,
            we all share a common goal: to strive for Istanbul to become a hub
            in the blockchain and crypto world.
          </p>
        </motion.div>
        <motion.div
          className="about-parts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <h2>Our Vision</h2>
          <p>
            At Istanbul DAO, we aim to unleash the power and potential of the
            local community. This vision emphasizes the importance of
            collaboration and participation. We aspire for Istanbul to play a
            leading role in the blockchain ecosystem and to become a globally
            recognized center. To achieve this goal, we bring together people
            from all sectors of the community and share our projects, ideas, and
            experiences.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="about-parts"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <h2> What We Do?</h2>
        <p>
          At Istanbul DAO, we unite the community by organizing various events,
          workshops, and educational programs. These activities are designed to
          explore the power of blockchain technology, support new projects, and
          facilitate the sharing of knowledge and experiences among community
          members. Additionally, we provide support to local projects and
          entrepreneurs through funds gathered under the Istanbul DAO umbrella,
          thus furthering the growth and strengthening of Istanbul's blockchain
          ecosystem.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
