import React from "react";
import "./CardGrid.css";

const CardGrid = () => {
  return (
    <div className="card-grid">
      <div className="card span-row-2">
        <img src="/images/image1.png" alt="Card 1" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2022 Is Back</div>
        </div>
      </div>
      <div className="card span-row-1">
        <img src="/images/image1.png" alt="Card 2" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2023 Is Back</div>
        </div>
      </div>
      <div className="card span-row-2">
        <img src="/images/image1.png" alt="Card 3" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2022 Is Back</div>
        </div>
      </div>
      <div className="card span-row-1">
        <img src="/images/image1.png" alt="Card 4" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2023 Is Back</div>
        </div>
      </div>
      <div className="card span-row-2">
        <img src="/images/image2.jpg" alt="Card 5" />
        <div className="card-overlay">
         
        <div className="card-text">The Covid-19 Epidemic in 2023 Is Back</div>
        </div>
      </div>
      <div className="card span-row-2">
        <img src="/images/image2.jpg" alt="Card 6" />
        <div className="card-overlay">
          <div className="card-date">17 MAR</div>
          <div className="card-text">Hac hendrerit mus non suspendisse</div>
        </div>
      </div>
      <div className="card span-row-1">
        <img src="/images/image2.jpg" alt="Card 7" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2023 Is Back</div>
        </div>
      </div>
      <div className="card span-row-1">
        <img src="/images/image2.jpg" alt="Card 8" />
        <div className="card-overlay">
          <div className="card-date">20 APR</div>
          <div className="card-text">The Covid-19 Epidemic in 2023 Is Back</div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
