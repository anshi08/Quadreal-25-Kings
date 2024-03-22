import { Grid } from '@mui/material';
import React from 'react'
import "./ShowingHistory.css"
import { motion } from "framer-motion"
import image2 from "../../assets/HistoryImage2.png"
import image3 from "../../assets/HistoryImage3.png"
import image4 from "../../assets/HistoryImage4.png"
import image5 from "../../assets/HistoryImage5.png"
import image6 from "../../assets/HistoryImage6.png"
import image7 from "../../assets/HistoryImage7.png"
import image8 from "../../assets/HistoryImage8.png"
import image9 from "../../assets/HistoryImage9.png"
import Reveal from '../../utils/Reveal';
import { useTheme } from '@mui/material/styles';


const ShowingHistory = () => {
  const theme = useTheme()
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1000, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <>
      <div className="container" >

        <div className="title">
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
            <p>
              THE FINANCIAL <br /> DISTRICT RISES</p>
          </motion.div>

        </div>
        <Grid container spacing={1} >
          <Grid item xs={12} md={5}>
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
              <div className='content'>
                <p>In the late 19th Century, Toronto’s Financial District was a medley
                  of small regional and local banks. In 1926, the Canadian Bank of Commerce decided to replace
                  their modest seven-storey head office with something more impressive: 25 King West. Designed by
                  architects York and Sawyer (USA) and
                  Pearson and Darling (Canada), 25 King West launched in 1931 with a height of an unprecedented
                  32-storeys (141 meters), gaining prestige as Canada’s tallest building. Despite launching in the
                  height of the Depression, the building represented Canada’s growing optimism and the Financial
                  District’s global significance. </p>
              </div>
            </motion.div>

            <div className="image-container1">
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
                <div className='flex flex-row items-center'>
                  <img src={image2} />
                  {/* Horizontal line */}
                  {/* <motion.svg
                    width="100%"
                    height="100%"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.line
                      x1="100%" // Set x1 to the middle of the container
                      y1="0"   // Start from the top
                      x2="0" // Set x2 to the middle of the container
                      y2="0" // End at the bottom
                      stroke="rgb(165, 124, 82)"
                      strokeWidth={2}
                      variants={draw}
                      custom={2}
                      style={{ border: '2px solid red' }}
                    />
                  </motion.svg> */}
                </div>
                <p className='bottomPara'>Despite the ornate nature of the building,<br /> construction of the North Tower took only two <br /> years.
                  There were 750 artisans and builders <br /> employed in its construction.</p>

              </motion.div>
            </div>

            <div className="image-container1">
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
                // style={{border:'2px solid yellow',display:'flex',justifyContent:'flex-end',flexDirection:'column'}}
                viewport={{ once: true }}>
                <div className='flex flex-row items-center'>
                  <img src={image3} width='100%' />
                </div>
                <p className='bottomPara'>Dominating the skyline for over 30 years, the height and opulence of the North Tower represented the area’s growing importance as a financial centre.</p>

              </motion.div>
            </div>

            <div className="did-container" >
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
                className='flex gap-2'
                viewport={{ once: true }}>

                <div className="text-container" style={{ flex: '40%' }}>
                  <h1 style={{
                    fontSize: '18px',
                    color: 'rgb(165, 124, 82)',
                    fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU',
                    fontWeight: 'bold'
                  }}>DID YOU KNOW?</h1>
                  <p
                    className='bottomPara'
                  >The cornerstone of this ambitious 141 metre tall limestone building was laid just
                    two days after the stock market crash of October 29, 1929. Constructed between
                    1929 – 1932, 25 King West cost over $8 million to build – or well over $85 million in
                    today’s dollars.</p>
                </div>
                <div className="image-wrapper" style={{ flex: '60%', display: 'grid', placeItems: 'center' }}>
                  <img src={image4} style={{ width: '239px', height: '246px' }} />
                </div>
              </motion.div>
            </div>


            <div className="image-container1 my-5">
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

                <img src={image5} width='100%' />
                <p className='bottomPara'

                >Changing styles. By the mid-20th century the elegance of the Banking Hall remained pristine, while
                  providing a modern environment to conduct business.</p>

              </motion.div>
            </div>
            <div className="did-container" >
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
                className='flex gap-2'
                viewport={{ once: true }}>

                <div className="text-container" style={{ flex: '40%' }}>
                  <h1 style={{
                    fontSize: '18px',
                    color: 'rgb(165, 124, 82)',
                    fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU',
                    fontWeight: 'bold'
                  }}>DID YOU KNOW?</h1>
                  <p
                    className='bottomPara'
                  >The cornerstone of this ambitious 141 metre tall limestone building was laid just
                    two days after the stock market crash of October 29, 1929. Constructed between
                    1929 – 1932, 25 King West cost over $8 million to build – or well over $85 million in
                    today’s dollars.</p>
                </div>
                <div className="image-wrapper" style={{ flex: '60%', display: 'grid', placeItems: 'center' }}>
                  <img src={image4} style={{ width: '239px', height: '246px' }} />
                </div>
              </motion.div>
            </div>


          </Grid >

          {/* Vertical Line */}
          < Grid item xs={12} md={2} sx={{ [theme.breakpoints.down(900)]: { display: 'none' }, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            {/* <SVG/> */}
            <motion.svg
              width="100%"
              height="100%"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="50%" // Set x1 to the middle of the container
                y1="0"   // Start from the top
                x2="50%" // Set x2 to the middle of the container
                y2="100%" // End at the bottom
                stroke="rgb(165, 124, 82)"
                strokeWidth={2}
                variants={draw}
                custom={2}
                style={{ border: '2px solid red' }}
              />
            </motion.svg>
            {/* <SVG/> */}
          </Grid >


          {/* right side part */}
          < Grid item xs={12} md={5} >

            <div className="image-container2 my-5">
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

                <div className='flex items-center'>
                {/* <motion.svg
                    width="100%"
                    height="100%"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.line
                      x1="0" // Set x1 to the middle of the container
                      y1="0"   // Start from the top
                      x2="100%" // Set x2 to the middle of the container
                      y2="0" // End at the bottom
                      stroke="rgb(165, 124, 82)"
                      strokeWidth={2}
                      variants={draw}
                      custom={2}
                      style={{ border: '2px solid red' }}
                    />
                  </motion.svg> */}
                  <img src={image7} />
                </div>
                <p className='bottomPara'>
                  August 11, 1930: His Majesty’s R100 Airship over the soon to be opened headquarters of the Canadian Bank of Commerce.
                  The building itself opened on January 13, 1931, in time for the bank’s annual shareholder’s meeting.
                </p>

              </motion.div>
            </div>

            <div className="image-container3 my-5">
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
                <img src={image8} />
                <h1 style={{
                  fontSize: '40px',
                  color: 'rgb(165, 124, 82)',
                  fontFamily: "Copyright Klim Type Fo-k7cTyXjE",
                  lineHeight: '1.2',
                  marginTop: '1rem'
                }} className='font-bold'>NEW BUILDINGS WERE<br /> ADDED IN 1972 – <br />
                  COMMERCE COURT <br />
                  WEST, SOUTH AND EAST</h1>
                <p
                  className='bottomPara'
                >These combined modernist materials and traditional stone to fit the original North building design.</p>

              </motion.div>
            </div>

            <div className="image-container2 " style={{ marginTop: '10rem' }}>
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

                <img src={image9} />
                <p
                  className='bottomPara'
                >With its elegant arched doorways, chandeliers and gold-coffered ceiling, CIBC’s Banking
                  Hall was not only beautiful, but spoke to the bank’s wealth and prosperity. Look closely
                  at the top of the chandelier and you can see the four words representing CIBC’s brand
                  pillars of the time: Prudence, Commerce, Industry and Integrity.</p>

              </motion.div>
            </div>
          </Grid >
        </Grid >
      </div >
    </>
  )
}

export default ShowingHistory