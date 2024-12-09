import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="main-heading">Essential Vitamins</h1>
      <div className="hero-container">
 
        <div className="hero-text">
          <p className="subheading">Online Medical Supplies</p>
          <p className="main-text">Get Your Vitamins & Minerals</p>
          <button className="cta-button">Explore</button>
        </div>
        <div className="hero-image-container">
          <img
            src="/images/vitamin-bottle.png"
            alt="Vitamin Bottle"
            className="hero-image"
          />
        </div>
        <div className="hero-features">
          <div className="feature-item">
            <img
              src="/images/icon-vitamins.png"
              alt="Vitamins"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Vitamins</h3>
              <p className="sub-para">Increased Vitamins and minerals in your diet</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="/images/icon-weight-loss.png"
              alt="Weight Loss"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Weight Loss</h3>
              <p className="sub-para">Helps to achieve weight loss goals effectively</p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="/images/icon-functional-foods.png"
              alt="Functional Foods"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3>Functional Foods</h3>
              <p className="sub-para">
                Provides body-boosting nutrients for daily wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
