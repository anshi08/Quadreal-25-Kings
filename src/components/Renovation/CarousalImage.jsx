import React, { useState } from 'react';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Carousal.css"
import image3 from "../../assets/Renovation3.jpg"
import image4 from "../../assets/Renovation4.jpg"
import image5 from "../../assets/Renovation5.jpg"
import image6 from "../../assets/Renovation6.jpg"

const images = [
   image3,
   image4,
   image5,
   image6
];

const imageInfo = [
  "Cleaning of interior stone walls and decorative ground elevator Lobby ceiling completed in 2020",
  "Extensive restoration of 17 original art murals",
  "Elevator Lobby lighting upgrade completed in 2020",
  "Restoration of bronze Lobby features completed in 2020"
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

          <div>
            <img className="carousel-image" 
              src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} fontSize="large" />
            <div className="info-box" style={{fontFamily: 'Gotham-Book-Normal-WOhkQgwc',color:'white'}}>
              {imageInfo[currentImageIndex]}
            </div>
          </div>
      
          <Button className="carousel-button" onClick={handleNext} disabled={currentImageIndex === images.length - 1}>
            <EastIcon />
          </Button>
      
        </div>
      </div>
    </>
  );
}

export default CarousalImage;
