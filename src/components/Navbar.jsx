import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Plenty<span style={{ color: "red" }}>Event</span>
        </Link>
      </div>

      {/* Search bar */}
      <input type="text" className="search" placeholder="Search vendors..." />

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
        <Link to="/services" style={{ textDecoration: "none", color: "white" }}>Services</Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
        <Link to="/faq" style={{ textDecoration: "none", color: "white" }}>FAQ</Link>
        <button className="join-btn">
          <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
            Join
          </Link>
        </button>

      </div>

      {/* Hamburger button */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
