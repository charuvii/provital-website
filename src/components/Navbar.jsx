import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Provital Logo"
          className="logo-image"
        />
        <span className="logo-text">Provital</span>
      </div>

      <div className="nav-links">
        <a href="#">List Your Practice</a>
        <span className="separator">|</span>
        <a href="#">For Employers</a>
        <span className="separator">|</span>
        <a href="#">Courses</a>
        <span className="separator">|</span>
        <a href="#">Books</a>
        <span className="separator">|</span>
        <a href="#">Speakers</a>
        <span className="separator">|</span>
        <a href="#">Doctors</a>
        <span className="separator">|</span>
        <a href="#">Login/Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
