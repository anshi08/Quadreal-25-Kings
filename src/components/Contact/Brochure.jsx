import React, { useState } from 'react'
import img from '../../assets/Img.jpg'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import SouthIcon from '@mui/icons-material/South';
import Reveal from '../../utils/Reveal';
import { motion } from "framer-motion"
import './Brochure.css'

const Brochure = () => {
  const [isHovered, setIsHovered] = useState(false);


  const btn = {
    backgroundColor: isHovered ? '#a0aec0' : 'white',
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
                  className='bounce-btn'
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

              <p className='first-para'>For further information on this exclusive leasing opportunity<br />please contact:</p>
              <div className='flex flex-col my-4'>
                <strong className='first-head'>KATE LABRASH</strong>
                <span className='first-head-content'>DIRECTOR, OFFICE LEASING/SALES REPRESENTATIVE</span>
              </div>

              <strong className='second-head'>OFFICE:</strong>
              <Link to='tel: 416-673-7491' className='second-head-content'>416-673-7491</Link>  <br />

              <strong className='second-head' >EMAIL:</strong>
              <Link to='mailto:kate.labrash@quadreal.com' className='second-head-content'>KATE.LABRASH@QUADREAL.COM</Link>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Brochure