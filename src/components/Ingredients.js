import React from "react";
import "./Ingredients.css";

const Ingredients = () => {
  return (
    <section className="ingredients">
      <div className="ingredient-cards">
        <div className="ingredient-card" id="card1">
          <h3>INGREDIENTS</h3>
          <h1>Better Ingredients</h1>
          <p>Only the best when you choose products offered on our platform. High-quality ingredients for high-quality products!</p>
        </div>
        <div className="ingredient-card" id="card2">
          <h3>Vitamin C</h3>
          <p>Vitamin C as ascorbic acid</p>
          <img src="/images/vitamin-c.png" alt="Vitamin C" />
          <span className="see-more">SEE MORE</span>
        </div>
        <div className="ingredient-card" id="card3">
          <h3>Vitamin B3</h3>
          <p>Niacin for healthy gut and skin</p>
          <img src="/images/vitamin-b3.png" alt="Vitamin B3" />
          <span className="see-more">SEE MORE</span>
        </div>
        <div className="ingredient-card1" id="card4">
          <h3>Magnesium</h3>
          <p>Boost energy and support muscle function</p>
          <img src="/images/magnesium.png" alt="Magnesium" />
          <span className="see-more">SEE MORE</span>
        </div>
        <div className="ingredient-card1" id="card5">
          <h3>Hyaluronic Acid</h3>
          <p>For smooth, supple, and soft skin!</p>
          <img src="/images/hyaluronic-acid.png" alt="Hyaluronic Acid" />
          <span className="see-more">SEE MORE</span>
        </div>
        <div className="ingredient-card1" id="card6">
          <h3>Lactobacillus</h3>
          <p>Invigorate your gut microbiome</p>
          <img src="/images/lactobacillus.png" alt="Lactobacillus" />
          <span className="see-more">SEE MORE</span>
        </div>
        <div className="ingredient-card1" id="card7">
        <img src="/images/image3.png" alt="Lactobacillus" />
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
