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
                <p>In the late 19th Century, Toronto’s Financial District was a medley <br />
                  of small regional and local banks. In 1926, the Canadian Bank of <br /> Commerce decided to replace
                  their modest seven-storey head office <br /> with something more impressive: 25 King West. Designed by
                  architects <br /> York and Sawyer (USA) and
                  Pearson and Darling (Canada), 25 King <br /> West launched in 1931 with a height of an unprecedented <br />
                  32-storeys (141 meters), gaining prestige as Canada’s tallest building.<br /> Despite launching in the
                  height of the Depression, the building <br /> represented Canada’s growing optimism and the Financial
                  District’s <br /> global significance. </p>
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
                </div>
                <p style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px', marginTop: '1rem' }}>Despite the ornate nature of the building,<br /> construction of the North Tower took only two <br /> years.
                  There were 750 artisans and builders <br /> employed in its construction.</p>

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

                <img src={image3} />
                <p style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px', marginTop: '1rem' }}>Dominating the skyline for over 30 years, the height and opulence of <br />
                  the North Tower represented the area’s growing importance as a <br />
                  financial centre.</p>
              </motion.div>

            </div>

            <div className="image-container1" style={{ padding: '2rem', marginBottom: '8rem' }}>
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

                <div className='flex flex-row'>
                  <div className="text-container">
                    <h1 style={{
                      fontSize: '18px',
                      color: 'rgb(165, 124, 82)',
                      fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU',
                      fontWeight: 'bold'
                    }}>DID YOU KNOW?</h1>
                    <p
                      style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '16px' }}
                    >The cornerstone of this ambitious 141<br /> metre tall limestone building was laid just<br />
                      two days after the stock market crash of <br /> October 29, 1929. Constructed between<br />
                      1929 – 1932, 25 King West cost over $8<br /> million to build – or well over $85 million in<br />
                      today’s dollars.</p>
                  </div>
                  <div className="image-wrapper my-5">
                    <img src={image4} />
                  </div>
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

                <img src={image5} />
                <p style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '14px', marginTop: '1rem' }}

                >Changing styles. By the mid-20th century the elegance of the Banking<br /> Hall remained pristine, while
                  providing a modern environment to <br />conduct business.</p>

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

                <div className='flex flex-row'>
                  <div className="text-container">
                    <h1 style={{
                      fontSize: '18px',
                      color: 'rgb(165, 124, 82)',
                      fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU',
                      fontWeight: 'bold'
                    }}>DID YOU KNOW?</h1>
                    <p
                      style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '16px' }}
                    >Modelled after the Baths of Caracella in Rome,the Banking Hall’s ceiling is 65 feet at<br />
                      the apex. Painted a pale azure, 715 ounces of<br /> gold leaf was used to create the<br /> surrounding mouldings.</p>
                  </div>
                  <div className="image-wrapper">
                    <img src={image6} />
                  </div>
                </div>
              </motion.div>
            </div>


          </Grid >

          {/* Vertical Line */}
          < Grid item xs={12} md={2} sx={{ [theme.breakpoints.down(900)]: { display: 'none' } }}>
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


                <img src={image7} />
                <p style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '15px' }}>
                  August 11, 1930: His Majesty’s R100 Airship over the soon to be opened<br /> headquarters of the Canadian Bank of Commerce.
                  The building itself opened on <br /> January 13, 1931, in time for the bank’s annual shareholder’s meeting.
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
                  style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}
                >These combined modernist materials and traditional stone to fit<br /> the original North building design.</p>

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
                  style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '13px', marginTop: '1rem' }}
                >With its elegant arched doorways, chandeliers and gold-coffered ceiling, CIBC’s Banking<br />
                  Hall was not only beautiful, but spoke to the bank’s wealth and prosperity. Look closely<br />
                  at the top of the chandelier and you can see the four words representing CIBC’s brand<br />
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