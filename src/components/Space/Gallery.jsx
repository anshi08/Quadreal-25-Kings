import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import image1 from "../../assets/Space1.jpg"
import image2 from "../../assets/space8.jpg"
import image3 from "../../assets/space3.jpg"
import image4 from "../../assets/space4.jpg"
import image5 from "../../assets/space5.jpg"
import image6 from "../../assets/space6.jpg"
import image7 from "../../assets/space7.jpg"

const images = [
   image1,
   image3,
   image4,
   image5,
   image6,
   image7,
   image2
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src={images[index]} alt="Gallery" style={{ width: '100%', height: 'auto' }} />
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-l-md z-10">
        <WestIcon style={{ fontSize: '40px', color: 'white' }} />
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-r-md z-10">
        <EastIcon style={{ fontSize: '40px', color: 'white' }} />
      </button>
    </div>
  );
}

export default Gallery;
