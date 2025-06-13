import React from 'react';
import './SearchBar.css';
import { FaSearch, FaMapMarkerAlt, FaNotesMedical, FaHospital } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="search-input">
        <FaSearch className="icon" />
        <input type="text" placeholder="Condition, procedure, specialty…" />
      </div>
      <div className="search-input">
        <FaMapMarkerAlt className="icon" />
        <input type="text" placeholder="City, state, or zipcode" />
      </div>
      <div className="search-input">
        <FaNotesMedical className="icon" />
        <input type="text" placeholder="Insurance carrier" />
      </div>
      <button className="find-now-btn">
        <FaSearch className="search-icon" />
        Find now
      </button>
    </div>
  );
};

export default SearchBar;
