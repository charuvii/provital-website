import React from 'react';
import './ExploreSection.css';
import { FaUserMd, FaHospital, FaStethoscope, FaPills, FaHeartbeat, FaXRay } from 'react-icons/fa';

const ExploreSection = () => {
  const icons = [
    { icon: <FaUserMd />, label: "Doctors" },
    { icon: <FaHospital />, label: "Hospitals" },
    { icon: <FaStethoscope />, label: "Consultation" },
    { icon: <FaPills />, label: "Medicines" },
    { icon: <FaHeartbeat />, label: "Health Checkups" },
    { icon: <FaXRay />, label: "Diagnostics" }
  ];

  return (
    <div className="explore-container">
      <h2>Explore Services</h2>
      <div className="icon-slider">
        {icons.map((item, index) => (
          <div className="icon-card" key={index}>
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
