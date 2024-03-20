import React from 'react'
import Reveal from '../../utils/Reveal'
import HotelImage from './HotelImage'
import FastFacts from './FastFacts'
import Gallery from './Gallery'
import { motion } from 'framer-motion'
import FeasibilityPlans from './FeasibilityPlans'
import image1 from "../../assets/Space1.jpg"
import './FastFacts.css'

const Space = () => {
  return (
    <>
      <div class="image" style={{ backgroundImage: `url(${image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', display: 'grid', placeItems: 'center' }}>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}>

          <div class="image-text2">UNIQUE AND CURATED<br /> SPACE FOR<br /> CONTEMPORARY<br /> BUSINESS</div>
        </motion.div>
      </div>
      <div>
        <Reveal>
          <HotelImage />
        </Reveal>
        <Reveal>
          <FastFacts />
        </Reveal>
        <div style={{
          fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
          fontWeight: 'bold',
          fontSize: '40px',
          lineHeight: '32px',
          textAlign: 'center',
          letterSpacing: 'normal',
          color: '#a57c52', padding: '3rem'
        }}>
          Gallery
        </div>
        <Reveal>
          <Gallery />
        </Reveal>
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
          viewport={{ once: true }}>

          <h1 style={{
            fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
            fontWeight: 'bold',
            fontSize: '40px',
            lineHeight: '32px',
            textAlign: 'center',
            letterSpacing: 'normal',
            color: '#a57c52', paddingTop: '2rem',paddingBottom:'0.5rem'
          }}>FEASIBILITY PLANS</h1>
        </motion.div>
        <p className='fact-text'>
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
            viewport={{ once: true }}>

            The opportunity to make the space your own is enabled<br />
          </motion.div>
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
            viewport={{ once: true }}>

            by tremendous flexibility in both floorplate and ceiling<br />   </motion.div>
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
            viewport={{ once: true }}>
            parameters. Here are three excellent examples:</motion.div>
        </p>
        <FeasibilityPlans />
      </div>
    </>
  )
}

export default Space