import React from "react";
import "./FeaturesCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faLeaf,
  faStethoscope,
  faAppleAlt,
  faRunning,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  { icon: faHeartbeat, label: "Cardiac Wellness" },
  { icon: faLeaf, label: "Plant-Based Diet" },
  { icon: faStethoscope, label: "Holistic Healing" },
  { icon: faAppleAlt, label: "Nutrition Therapy" },
  { icon: faRunning, label: "Fitness Plans" },
  { icon: faUserMd, label: "Expert Care" },
];

const FeaturesCarousel = () => {
  return (
    <div className="features-section">
      <div className="carousel-container">
        {features.map((feature, index) => (
          <div className="carousel-card" key={index}>
            <FontAwesomeIcon icon={feature.icon} className="carousel-icon" />
            <p>{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCarousel;
