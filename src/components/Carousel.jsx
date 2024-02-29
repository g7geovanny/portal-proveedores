import React, { useState } from 'react';
import '../styles/carousel.css';

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === children.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? children.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <div className="slide-container pt-2" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children.map((child, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {child}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;