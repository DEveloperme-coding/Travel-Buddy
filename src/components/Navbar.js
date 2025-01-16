import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import travel_logo from "../assets/travel_logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""} sticky-top`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={travel_logo} alt="Travel Buddy" style={{ height: "50px" }} />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/tour-packages"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Tour Packages
          </Link>
          <Link
            to="/contact-us"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
