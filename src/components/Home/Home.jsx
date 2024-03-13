import React, { useState } from 'react';
import Carousal from './Carousal';
import Reveal from '../../utils/Reveal';
import { motion } from 'framer-motion';
import AccordianDisplay from './AccordianDisplay';
import Slide from './Slide';
import AddSlide from './AddSlide';
import LastSlide from './LastSlide';

const componentStyle = {
  fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
  color: 'rgb(165, 124, 82)',
  fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
  lineHeight: '1.5',
  marginBottom: '2rem' 
};

const divImage = {
  backgroundImage: `url('http://127.0.0.1:5500/media/ade78c750456c839c7ba63d5cb572fba/background-pattern-half.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '2rem' 
};



const Home = () => {


  return (
    <>
      <div>
        <Carousal />
        <Reveal>
          <div style={divImage}>
            <div style={{ padding: '1rem' }}>
              <p style={componentStyle}>
                A TRANSFORMATION TAKES SHAPE<br />
                ONE THAT OPENS A NEW LEASE ON LIFE <br />
                FOR THE LEGENDARY COMMERCE COURT <br /> NORTH AND ITS PRESTIGIOUS ADDRESS <br />
                OF 25 KING WEST
              </p>
            </div>
            <AccordianDisplay />
          </div>
        </Reveal>
      </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Slide />
        <AddSlide />
        <LastSlide />
        </motion.div>
        
    </>
  );
}

export default Home;
