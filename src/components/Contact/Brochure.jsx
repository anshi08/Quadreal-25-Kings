import React, { useState } from 'react'
import img from '../../assets/Img.jpg'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import SouthIcon from '@mui/icons-material/South';
import Reveal from '../../utils/Reveal';
import {motion} from "framer-motion"

const Brochure = () => {
  const [isHovered, setIsHovered] = useState(false);


  const btn = {
    fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
    textAlign: 'center',
    backgroundColor: isHovered ? '#a0aec0' : 'white',
    color: "black",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "1rem",
    padding: "12px 24px",
    transition: 'background-color 0.3s ease',
    position: 'absolute',
    bottom: '10px',
    left: '10px'
  }

  return (
    <>
        <div style={{ padding: '10%' }}>
          <Grid container spacing={5}>
            {/* Left Side: Image */}
            <Grid item xs={12} md={6} >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}>

                <div style={{ position: 'relative' }}>
                  <img src={img} alt="Your Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />

                  {/* Button */}

                  <Link
                    to="https://25king.ca/brochure/"
                    target='_blank'
                    style={btn}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    View Brochure <SouthIcon />
                  </Link>

                </div>
              </motion.div>
            </Grid>

            {/* Right Side: Text */}
            <Grid item xs={12} md={6} style={{ marginTop: '8%' }}  >
            <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}>

              <p>For further information on this exclusive leasing opportunity<br />please contact:</p>
              <div className='flex flex-col my-4'>
                <strong>KATE LABRASH</strong>
                <span style={{ color: '#a57c52', textDecoration: 'underline' }}>DIRECTOR, OFFICE LEASING/SALES REPRESENTATIVE</span>
              </div>

              <strong >OFFICE:</strong>
              <Link to='tel: 416-673-7491' style={{ color: '#a57c52', textDecoration: 'underline' }}>416-673-7491</Link>  <br />

              <strong >EMAIL:</strong>
              <Link to='mailto:kate.labrash@quadreal.com' style={{ color: '#a57c52', textDecoration: 'underline' }}>KATE.LABRASH@QUADREAL.COM</Link>
                </motion.div>
            </Grid>
          </Grid>
        </div>
    </>
  )
}

export default Brochure