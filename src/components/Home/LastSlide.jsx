import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LastSlide.css"
import "./AddSlice.css"
import { Grid } from '@mui/material';
import { motion } from "framer-motion"
import ReactCompareImage from 'react-compare-image';
import image1 from "../../assets/SliderImage1.png"
import image2 from "../../assets/SliderImage2.png"

const LastSlide = () => {
    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        fontSize: "13px",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    };

    return (
        <>
            <Grid container style={{ backgroundColor: 'rgba(165, 124, 82, 0.25)' }}>
                <Grid item xs={12} md={6} style={{padding:'8% 2rem'}}>
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
                        <p
                            className='maintext'
                        >
                            The keystone of today’s Commerce <br />
                            Court, the newly renovated 25 <br />
                            King West tells a story of aspiration, <br />
                            prosperity, industry, integrity and of a <br />
                            progressive future. The renovation of this <br />
                            iconic address reinvigorates those values.
                        </p>

                        <div>
                            {/* Link Button */}
                            <Link
                                to="/page/4"
                                className='btnLink'
                                style={{ ...btn}}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                LEARN MORE
                            </Link>
                        </div>

                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6} style={{padding:'6rem 2rem'}}>

                    <ReactCompareImage

                        leftImage={image1}
                        rightImage={image2} />
                </Grid>
            </Grid>
        </>
    );
}

export default LastSlide;
