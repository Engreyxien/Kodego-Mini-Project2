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
            © 2024 Only Me Store. All Rights Reserved. All content on this
            platform is the property of Only Me-Store.Inc. Duplication and
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
          <h3>Only Me Store App</h3>
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
          <div className="contacts">
            <ul className="contact-info">
              <li>
                Address : 123 Main Street, Anytown, Romblon, Philippines 12345
              </li>
              <li>Contact : 123-456-7890</li>
              <li>Email : 0d7wH@example.com</li>
              <li>Phone : 0912-3456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
