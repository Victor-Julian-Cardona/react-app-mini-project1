import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import github_icon from "../assets/github_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
>>>>>>> 1ae844a (mini-project done)
const Footer = () => {
  return (
    <div className="footer">
      <div className='"footer-logo'>
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
<<<<<<< HEAD
        <li>About</li>
=======
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <li>About</li>
        </Link>
>>>>>>> 1ae844a (mini-project done)
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
<<<<<<< HEAD
        <div className="footer-icons-container">
          <img src={github_icon} alt="" />
        </div>
=======
        <a
          href="https://github.com/gemelendezpr/react-app-mini-project1"
          target="_blank"
        >
          <div className="footer-icons-container">
            <img src={github_icon} alt="" />
          </div>
        </a>

>>>>>>> 1ae844a (mini-project done)
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2023 Tropify, Inc. All Rights Reserved </p>
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 1ae844a (mini-project done)
export default Footer;
