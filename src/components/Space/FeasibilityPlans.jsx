import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Map1 from "../../assets/Map1.png"
import Map2 from "../../assets/Map2.png"
import Map3 from "../../assets/Map3.png"

const images = [Map1, Map2, Map3];

const FeasibilityPlans = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
  <div style={{ position: 'relative', width: '50%',marginTop:'10px',backgroundColor:"beige" }}>
    <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
      <WestIcon style={{ fontSize: '40px', color: 'black' }} />
    </button>
    <img src={images[index]} alt="Gallery" style={{ width: '50%', 
    height: 'auto' , margin:'0 auto'}} />
    <button onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
      <EastIcon style={{ fontSize: '40px', color: 'black' }} />
    </button>
  </div>
</div>
  );
}

export default FeasibilityPlans;
