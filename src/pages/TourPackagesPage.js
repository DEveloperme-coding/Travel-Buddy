import React, { useState } from "react";
import TourCard from "../components/TourCard";
import { tourPackages } from "../components/tourPackagesData";
import "./TourPackagesPage.css";



const TourPackagesPage = () => {
  const [sortOption, setSortOption] = useState("price");

  const sortedTours = [...tourPackages].sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    }
    if (sortOption === "location") {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });

  return (
    <div className="tour-packages-page">
      <div className="sorting-controls">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="location">Location</option>
        </select>
      </div>
      <div className="tour-card-container">
        {sortedTours.map((tourPackages) => (
          <TourCard key={tourPackages.id} tour={tourPackages} />
        ))}
      </div>
    </div>
  );
};

export default TourPackagesPage;