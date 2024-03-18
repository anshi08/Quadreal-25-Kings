import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Heading from './Heading';
import img1 from '../../assets/HomeImage1.jpg'
import img2 from '../../assets/HomeImage2.jpg'
import img3 from '../../assets/HomeImage3.jpg'
import img4 from '../../assets/HomeImage4.jpg'
import img5 from '../../assets/HomeImage5.jpg'

const images = [
  img3,
  img1,
  img2,
  img4,
  img5
];

const Carousal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 
     p-2 rounded-l-md z-10">
        <WestIcon style={{ fontSize: '70px', color: 'white' }} />
      </button>
      <button onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 
       p-2 rounded-r-md z-10">
        <EastIcon style={{ fontSize: '70px', color: 'white' }} />
      </button>
      <AnimatePresence mode='wait' >
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '855px',
            width: 'auto',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}>
            <div className="absolute top-14 left-9 z-20">
              <h1 style={{
                fontSize: '40px',
                color: 'rgb(255, 255, 255)',
                fontFamily: "Copyright Klim Type Fo-k7cTyXjE", fontWeight: 'bold',
                lineHeight:'48px'
              }}>A HERITAGE TO BE PROUD OF <br />
                A FUTURE TO PLAY A PART IN </h1>
            </div>
          </motion.div>
        </motion.div>

      </AnimatePresence>
      {/* <div>
          <Heading />
          </div> */}
    </div>
  );
}

export default Carousal;
