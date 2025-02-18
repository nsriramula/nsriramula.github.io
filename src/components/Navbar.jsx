import React from 'react';
import './Navbar.css'; // Ensure this import is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyLogo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; // Ensure this export is present