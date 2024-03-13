import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Map1 from "../../assets/Map1.png"
import Map2 from "../../assets/Map2.png"
import Map3 from "../../assets/Map3.png"

const images = [{
  backgroundColor:'rgba(165, 124, 82, 0.2)' ,
  imgScr:Map1
},{
  backgroundColor:'rgba(0, 174, 239, 0.2)' ,
  imgScr:Map2
},{
  backgroundColor:'rgba(192, 221, 197, 0.2)' ,
  imgScr:Map3
}];

const FeasibilityPlans = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  console.log("ss",images[index])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}>
    <div style={{ position: 'relative', width: '50%', marginTop: '10px', border: '2px solid red',
     backgroundColor:images[index].backgroundColor
  }}>
      <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <WestIcon style={{ fontSize: '40px', color: 'black' }} />
      </button>
       
      {/* <img src={images[index - 1 >= 0 ? index - 1 : images.length - 1].imgScr} alt="Previous" style={{ width: '100%', height: 'auto', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: '-1' }} /> */}
      
      <img src={images[index].imgScr} alt="Gallery" style={{ width: '50%', height: 'auto', margin: '0 auto', position: 'relative', zIndex: '0' }} />
      
      {/* <img src={images[(index + 1) % images.length].imgScr} alt="Next" style={{ width: '25%', height: 'auto', position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: '-1' }} /> */}
      <button onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
        <EastIcon style={{ fontSize: '40px', color: 'black' }} />
      </button>
    </div>
  </div>
  
  );
}

export default FeasibilityPlans;
