import React, { useState } from 'react';
import Carousal from './Carousal';
import Reveal from '../../utils/Reveal';
import { motion } from 'framer-motion';
import AccordianDisplay from './AccordianDisplay';
import Slide from './Slide';
import AddSlide from './AddSlide';
import accordianBG from "../../assets/accordianBG.png"
import LastSlide from './LastSlide';
import './Home.css'

const componentStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  color: 'rgb(165, 124, 82)',
  fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
  lineHeight: '48px',
  textAlign: 'center',
  letterSpacing: 'normal',
};

const divImage = {
  backgroundImage: `url(${accordianBG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '2rem',
  wordWrap: 'break-word'
};



const Home = () => {

  return (
    <>
      <div>
        <div className="main-div">
          <div className="child-div">
            <Carousal />

          </div>
        </div>
        <div style={divImage}>
          <div style={{ padding: '1rem' }}>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              style={{ padding: '2rem 0' }}
              viewport={{ once: true }}
            >

              <p className='main-home-text'>
                A TRANSFORMATION TAKES SHAPE<br />
                ONE THAT OPENS A NEW LEASE ON LIFE <br />
                FOR THE LEGENDARY COMMERCE COURT <br /> NORTH AND ITS PRESTIGIOUS ADDRESS <br />
                OF 25 KING WEST
              </p>
            </motion.div>
          </div>
          <AccordianDisplay />
        </div>
      </div>
      <Reveal>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Slide />

          <AddSlide />
          <LastSlide />
        </motion.div>
      </Reveal>
    </>
  );
}

export default Home;
