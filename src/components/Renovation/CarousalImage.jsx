import React, { useState } from 'react';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Carousal.css"

const images = [
  'http://127.0.0.1:5500/media/2a61ef4f653422cf97f0854929858eae/dsc06070-1789_1497_0_0-half.jpg',
  'http://127.0.0.1:5500/media/03da63db8613173c06592d5a8401cc2e/image-2-half.jpg',
  'http://127.0.0.1:5500/media/4fe4ab9cb5df1f4c003847bafc6230fa/image-3-half.jpg',
  'http://127.0.0.1:5500/media/037e5d533018516ec3f91e4790e0e026/image-4-half.jpg',
];

const CarousalImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-content">

          <Button onClick={handlePrev} disabled={currentImageIndex === 0} className="carousel-button">
            <WestIcon />
          </Button>


          <img className="carousel-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} fontSize="large" />

          <Button className="carousel-button" onClick={handleNext} disabled={currentImageIndex === images.length - 1}>
            <EastIcon />
          </Button>

        </div>
      </div>
    </>
  );
}

export default CarousalImage