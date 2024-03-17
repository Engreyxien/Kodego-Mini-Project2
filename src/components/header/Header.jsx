import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in...");
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
    console.log("Logging in with Facebook...");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password?");
  };

  const handleRegisterNow = () => {
    setIsRegisterModalOpen(true);
  };
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
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
          <li>
            <div className="nav-button">
              <button onClick={handleRegisterNow}>Register</button>
              {isRegisterModalOpen && (
                <div className="register-container">
                  <div className="close" onClick={handleCloseRegisterModal}>
                    <FaTimes />
                  </div>
                  <h2>Register Now</h2>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input type="password" placeholder="Password" />
                  <button onClick={handleCloseRegisterModal}>
                    Register Now
                  </button>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="nav-button">
              <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
              {isLoginModalOpen && (
                <div className="login-container">
                  <div className="close" onClick={handleCloseLoginModal}>
                    <FaTimes />
                  </div>
                  <h2>Login</h2>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={handleLogin}>Login</button>
                  <button onClick={handleGoogleLogin}>
                    <FaGoogle /> Login with Google
                  </button>
                  <button onClick={handleFacebookLogin}>
                    <FaFacebook /> Login with Facebook
                  </button>
                  <div>
                    <a href="#" onClick={handleForgotPassword}>
                      Forgot password?
                    </a>
                  </div>
                  <div>
                    <button onClick={handleRegisterNow}>
                      Don't have an account yet? Register now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </li>
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
