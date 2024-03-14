import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
const Footer = () => {
  return (
    <footer className="nautide-footer">
      <div className="footer-container">
        <div className="box">
          <ul className="flex">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
          <p>
            © 2024 Pekeng Store. All Rights Reserved. All content on this
            platform is the property of Pekeng-Store.Inc. Duplication and
            copying are strictly prohibited.
          </p>
        </div>
        <div className="FollowUs">
          <h3>Follow Us</h3>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="PekengStore">
          <h3>Pekeng Store App</h3>
          <div className="img flexSB">
            <img
              src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
              alt="App Store"
            />
            <span>App Store</span>
            <img
              src="https://img.icons8.com/fluency/48/000000/google-play.png"
              alt="Google Play Store"
            />
            <span>Google Play Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
