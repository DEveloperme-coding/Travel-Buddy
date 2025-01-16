import React from "react";
import HeroSection from "../components/HeroSection";
import { tourPackages } from "../components/tourPackagesData";
import TourCard from "../components/TourCard";
import "./HomePage.css";



const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <div className="tour-card-container">
                {tourPackages.map((tourPackages) => (
                    <TourCard key={tourPackages.id} tour={tourPackages} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;