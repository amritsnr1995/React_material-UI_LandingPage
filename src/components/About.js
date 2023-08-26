import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="about background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food is an Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Our passionate chefs craft each dish with meticulous attention to
          detail, using the finest ingredients to create symphonies of taste.
        </p>
        <p className="primary-text">
          From the first bite to the last, immerse yourself in a world where
          culinary boundaries are pushed, and traditional norms are redefined.
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/>Watch video</button>
        </div>
      </div>
    </div>
  );
};

export default About;
