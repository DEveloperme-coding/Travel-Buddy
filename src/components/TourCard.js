import React from "react";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} className="tour-card-img" />
      <div className="tour-card-body">
        <h5 className="tour-card-title">{tour.name}</h5>
        <p className="tour-card-location">{tour.location}</p>
        <p className="tour-card-price">${tour.price}</p>
        <p className="tour-card-description">{tour.description}</p>
        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
};

export default TourCard;