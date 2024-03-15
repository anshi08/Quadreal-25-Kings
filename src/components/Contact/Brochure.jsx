import React, { useState } from 'react'
import img from '../../assets/Img.jpg'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import SouthIcon from '@mui/icons-material/South';
import { motion } from "framer-motion"
import Reveal from '../../utils/Reveal';

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
    <div style={{ padding: '1rem 6rem' }}>
      <Grid container style={{ margin: '0 auto' }}>
        {/* Left Side: Image */}
        <Grid item xs={12} md={6} >
          <div style={{ position: 'relative', marginBottom: '3rem' }}>
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
              viewport={{ once: true }}

            >
              <img src={img} alt="Your Image" style={{ minHeight: '400px', minWidth: '300px', width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
              {/* Button */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                viewport={{ once: true }}

              >

                <Link
                  to="https://25king.ca/brochure/"
                  target='_blank'
                  style={btn}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Brochure <SouthIcon />
                </Link>
              </motion.div>
            </motion.div>


          </div>
        </Grid>

        {/* Right Side: Text */}
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
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
            viewport={{ once: true }}
            style={{ textAlign: 'start' }} // align the content to the center horizontally
          >
            <div> {/* this div should be centered vertically and horizontally */}
              <p style={{ wordWrap: 'break-word' }}>For further information on this exclusive leasing opportunity<br />please contact:</p>
              <div className='flex flex-col my-4'>
                <strong>KATE LABRASH</strong>
                <span style={{ color: '#a57c52', textDecoration: 'underline', wordWrap: 'break-word' }}>DIRECTOR, OFFICE LEASING/SALES REPRESENTATIVE</span>
              </div>

              <strong>OFFICE:</strong>
              <Link to='tel: 416-673-7491' style={{ color: '#a57c52', textDecoration: 'underline' }}>416-673-7491</Link> <br />

              <strong>EMAIL:</strong>
              <Link to='mailto:kate.labrash@quadreal.com' style={{ color: '#a57c52', textDecoration: 'underline', wordWrap: 'break-word' }}>KATE.LABRASH@QUADREAL.COM</Link>
            </div>
          </motion.div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Brochure