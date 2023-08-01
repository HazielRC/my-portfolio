import React from "react";
import '../stylesheets/Navbar.css';
import '../stylesheets/Navbar-Mobile.css'

const Navbar = () => {

  return(
    <div className="navbar">
      <div className="brand-container">
        <h1 className="brand"><span className="primary">H</span><span className="secondary">C</span></h1>
      </div>
      <div className="nav-container">
        <ul className="links-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;