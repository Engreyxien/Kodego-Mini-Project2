import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Product from "../products/Product";
import Contact from "../footer/Footer";
import Home from "../home/Home";
import Register from "../register/Register";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">Pekeng Store</a>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <div className="nav-buttons">
            <button>Register</button>
          </div>
          <div className="nav-button">
            <button>Login</button>
          </div>
        </ul>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
