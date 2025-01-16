import React from "react";
import { Carousel } from 'react-bootstrap';
import cara1 from '../assets/cara1.jpg'
import cara2 from '../assets/cara2.jpg'
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cara1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore the World</h3>
            <p>Discover amazing places with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cara2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Adventure Awaits</h3>
            <p>Embark on unforgettable journeys.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
