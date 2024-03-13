import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import "./AddSlice.css"
import Image from "../../assets/HomeImage11.jpg"

const AddSlide = () => {
    const [isHovered, setIsHovered] = useState(false);


    const textContent = (
        <p className='maintext'>
            Here is an opportunity to be part of this historic building at an iconic address, with
            the flexibility of floorplates and plans customizable to the unique needs of contemporary business.
        </p>
    );

    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        fontWeight: 400,
        fontSize: "1rem",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    };

    return (
        <div style={{ backgroundColor: 'rgb(248, 245, 241)' }}>
            <Grid container>
                {/* Left Side: Image */}
                <Grid item xs={12} md={6}>
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

                        <img src={Image} alt="Your Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                    </motion.div>
                </Grid>
                {/* Right Side: Text */}
                <Grid item xs={12} md={6}>
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
                    >
                        <div className='select'>
                            {textContent}
                            {/* Link Button */}
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
                                <Link
                                    to="/page/5"
                                    className='btnLink'
                                    style={{ ...btn}}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    VIEW AVAILABILITY
                                </Link>
                            </motion.div>

                        </div>
                    </motion.div>

                </Grid>
            </Grid>
        </div>
    );
}

export default AddSlide;
