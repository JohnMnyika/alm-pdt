import React, { useState, useEffect } from 'react';

const Slider = () => {
  const sliderImages = [
    '/assets/aluco.jpg',
    '/assets/main.jpg',
    '/assets/momson.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  if (sliderImages.length === 0) {
    return null; 
  }

  const renderImage = (image, index) => (
    <div key={index} className={`carousel-item${index === activeIndex ? ' active' : ''}`}>
      <img
        src={image}
        className="d-block w-100"
        alt={`Slider Image ${index + 1}`}
        loading="lazy"
      />
    </div>
  );

  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel" style={{ height: '400px' }}>
      <div className="carousel-inner">
        {sliderImages.map(renderImage)}
      </div>
      {sliderImages.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slider"
            data-bs-slide="prev"
            onClick={handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slider"
            data-bs-slide="next"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
