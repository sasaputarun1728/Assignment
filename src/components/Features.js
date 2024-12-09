import React from "react";
import "./Features.css";

const features = [
  {
    icon: "/images/icons/study-icon.png",
    title: "Clinically Studied",
    description: "All products that we offer have undergone lab and safety tests",
  },
  {
    icon: "/images/icons/vegetarian-icon.png",
    title: "Vegetarian Friendly",
    description: "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    icon: "/images/icons/india-icon.png",
    title: "Made in India",
    description: "Shop local and explore health products made right here in India",
  },
  {
    icon: "/images/icons/shipping-icon.png",
    title: "Free Shipping",
    description: "We deliver to your door with no shipping costs on your orders",
  },
  {
    icon: "/images/icons/risk-free-icon.png",
    title: "No Risk",
    description: "We ensure that all products are safe and within their use-by date",
  },
  {
    icon: "/images/icons/gmo-free-icon.png",
    title: "GMO Free",
    description: "Natural, no modified products and derivatives for those who need it",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div
            className={`feature-card ${index < 3 ? "top-row" : ""}`}
            key={index}
          >
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
