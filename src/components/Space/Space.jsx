import React from 'react'
import Reveal from '../../utils/Reveal'
import HotelImage from './HotelImage'
import FastFacts from './FastFacts'
import Gallery from './Gallery'
import { motion } from 'framer-motion'
import FeasibilityPlans from './FeasibilityPlans'
import image1 from "../../assets/Space1.jpg"

const Space = () => {
  return (
    <>
      <Reveal>
        <div class="image">
          <img
            src={image1} alt="Image description" class="image-responsive" />
          <div class="image-text">UNIQUE AND CURATED<br /> SPACE FOR<br /> CONTEMPORARY<br /> BUSINESS</div>
        </div>
      </Reveal>
      <div>
        <Reveal>
          <HotelImage />
        </Reveal>
        <Reveal>
          <FastFacts />
        </Reveal>
        <div style={{
          fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
          fontSize: '40px',
          lineHeight: '32px',
          textAlign: 'center',
          letterSpacing: 'normal',
          color: '#a57c52', padding: '50px'
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
            fontSize: '40px',
            lineHeight: '32px',
            textAlign: 'center',
            letterSpacing: 'normal',
            color: '#a57c52', padding: '30px'
          }}>FEASIBILITY PLANS</h1>
        </motion.div>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
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