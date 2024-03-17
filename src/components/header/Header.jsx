import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Product from "../products/Product";
import Contact from "../footer/Footer";
import Home from "../home/Home";
import Register from "../register/Register";
import Login from "../login/Login";
import AboutUs from "../aboutus/About";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
          Pekeng <span className="store">Store</span>
        </a>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Product">Products</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
          <li>
            <a href="#Cart">Cart</a>
          </li>
          <div className="nav-buttons">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="nav-button">
            <Link to="/login">
              <button>Login</button>
            </Link>
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
