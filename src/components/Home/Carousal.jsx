import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import Heading from './Heading';

const images = [
  "http://127.0.0.1:5500/media/b6a4237a3ec27faf8547607e31451381/the-history-hero-4-1-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/4ecafe147515f2a88de17e7ce2dc6364/dsc06093-at-2x-half.jpg",
  'http://127.0.0.1:5500/media/ecfc6f655a9b848c8f8b8f5642bd508c/homepage-hero-1-at-2x-half.jpg',
  "http://127.0.0.1:5500/media/e3ebf90900fd8ac805fb05bf3f7b493c/dsc00288-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/a8a26258e41a46fe562d7488cf76054b/the-history-hero-3-at-2x-half.jpg"
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
      <WestIcon style={{ fontSize: '70px', color:'white' }}/>
     </button>
      <button onClick={handleNext} 
      className="absolute top-1/2 right-0 transform -translate-y-1/2 
       p-2 rounded-r-md z-10">  
        <EastIcon style={{ fontSize: '70px', color:'white' }} />
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
        <div className="absolute top-16 left-9 z-20">
            <h1 className="text-white text-4xl font-bold">A HERITAGE TO BE PROUD OF <br/>
            A FUTURE TO PLAY A PART IN </h1>
          </div>
        </motion.div>
        
      </AnimatePresence>
      {/* <div>
          <Heading />
          </div> */}
    </div>
  );
}

export default Carousal;
