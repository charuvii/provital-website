import React from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";

import column1_1 from "../assets/column1_1.png";
import column1_2 from "../assets/column1_2.png";
import column1_3 from "../assets/column1_3.png";
import column1_4 from "../assets/column1_4.png";
import column2_1 from "../assets/column2_1.png";
import column2_2 from "../assets/column2_2.png";
import column2_3 from "../assets/column2_3.png";
import column2_4 from "../assets/column2_4.png";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left Side Scrolling Images */}
      <div className="left-scrolls-wrapper">
        <div className="left-scrolls">
          <div className="image-column scroll-down">
            {/* Duplicated column 1 images for seamless loop */}
            <img src={column1_1} alt="" />
            <img src={column1_2} alt="" />
            <img src={column1_3} alt="" />
            <img src={column1_4} alt="" />
            <img src={column1_1} alt="" />
            <img src={column1_2} alt="" />
            <img src={column1_3} alt="" />
            <img src={column1_4} alt="" />
          </div>
          <div className="image-column scroll-up">
            {/* Duplicated column 2 images for seamless loop */}
            <img src={column2_1} alt="" />
            <img src={column2_2} alt="" />
            <img src={column2_3} alt="" />
            <img src={column2_4} alt="" />
            <img src={column2_1} alt="" />
            <img src={column2_2} alt="" />
            <img src={column2_3} alt="" />
            <img src={column2_4} alt="" />
          </div>
        </div>
      </div>

      {/* Center Text */}
      <div className="center-text">
        <h1>
          Book an appointment with <br />
          <span style={{ color: "#0f90b3" }}>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases</p>
      </div>

      {/* Floating SearchBar */}
      <div className="floating-searchbar">
        <SearchBar />
      </div>

      {/* Slanted Gradient Bar */}
      <div className="slant-bar"></div>
    </div>
  );
};

export default Hero;
