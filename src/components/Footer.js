import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <div className="contact-card">
          <img id="imageCard"
            src="/images/phone-icon.png" 
            alt="Phone"
            className="contact-icon"
          />
          <p className="contact-title">Phone Number</p>
          
          <p className="contact-text">+974 3118 1843</p>
        </div>
        <div className="contact-card">
          <img id="imageCard"
            src="/images/email-icon.png" 
            alt="Email"
            className="contact-icon"
          />
          <p className="contact-title">Email Address</p>
          <p className="contact-text">Elbrithcqr@gmail.com</p>
        </div>
        <div className="contact-card">
          <img id="imageCard1" 
            src="/images/location-icon.png" 
            alt="Location"
            className="contact-icon"
          />
          <p className="contact-title">Office Location</p>
          <p className="contact-text">Ambassador Street, Zone 61</p>
        </div>
      </div>
      <div className="company-container">
        <img
          src="/images/logo.jpg" 
          alt="Elbrit Logo"
          className="logo1"
        />
        <div className="company-text-container">
          <p className="company-text">
            Your health, physical, and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
      </div>
      <div className="footer-address">
        <p className="address">
          Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </div>
  );
};

export default Footer;
