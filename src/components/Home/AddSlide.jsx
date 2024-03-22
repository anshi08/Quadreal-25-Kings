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
        textAlign: 'center',
        backgroundColor: isHovered ? '#C0DDC5' : 'black',
        color: isHovered ? "black" : "white",
        textTransform: "none",
        fontWeight: 400,
        fontSize: "13px",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',

    };

    return (
        <div >
            <Grid container>
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
                        viewport={{ once: true }}
                        style={{width:'100%',height:'100%'}}
                    >

                        <img src={Image} alt="Your Image" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover',}}
                       />
                    </motion.div>
                </Grid>
                {/* Right Side: Text */}
                <Grid item xs={12} md={6} style={{ display:'grid',placeItems:'center',padding:'8% 2rem',
            backgroundColor: 'rgb(248, 245, 241)' }}>

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
                        viewport={{ once: true }}
                        style={{ padding: '3rem 0' }}

                    >
                        {textContent}
                        <Link
                            to="/page/5"
                            className='btnLink'
                            style={{ ...btn }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            VIEW AVAILABILITY
                        </Link>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddSlide;
