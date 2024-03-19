import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Room, Lightbulb, Wifi, BeachAccess, Bathtub, Elevator } from '@mui/icons-material';
import Reveal from '../../utils/Reveal';
import { motion } from "framer-motion"
import image from "../../assets/image.jpg"
import SVG from './SVG';


const PageTwo = () => {
    return (
        <>
            <Reveal>
                <Grid container>
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
                        >

                            <Card>
                                <CardMedia
                                    component="img"
                                    image={image}

                                    alt="Image"
                                    style={{ objectFit: "cover" }}
                                />
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ backgroundColor: 'rgba(165, 124, 82, 0.2)'}}>
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
                            style={{ padding: '3rem 3rem', marginTop: '4rem' }}
                        > <div  >
                                <CardContent>
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontSize: '40px',
                                        color: 'rgb(165, 124, 82)',
                                        fontFamily: "Copyright Klim Type Fo-k7cTyXjE",
                                        lineHeight: '32px',
                                        marginTop: '132px',
                                        paddingLeft: '20px'
                                    }}>
                                        <p>
                                            THE UPGRADES
                                        </p>
                                        <style jsx>{`
@media (max-width: 896px) and (min-width: 280px) {
    .MuiCardContent-root {
        margin-top: -144px;
    }
}
`}</style>
                                    </div>
                                    <div className="mb-275" >
                                        <p>
                                            <ul style={{
                                                paddingLeft: '20px', fontFamily: 'Gotham-Book-Normal-WOhkQgwc',
                                                lineHeight: '50px'
                                            }}> {/* Adjust the padding for list items */}
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{ display: 'flex', alignItems: 'center', fontSize: '18px', lineHeight: '24px' }} className='my-7'>
                                                      <SVG />
                                                        Best-in-class connectivity and tech infrastructure
                                                    </li>
                                                </motion.div>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG /> Wood framed glass entry doors
                                                    </li>
                                                </motion.div>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',

                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'

                                                    >
                                                       <SVG /> LED light fixtures
                                                    </li>
                                                </motion.div>
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG />Ample natural light
                                                    </li>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG /> Open ceiling up to 11'5"
                                                    </li>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                        <SVG /> New floor mounted induction units and ceiling ductwork
                                                    </li>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG /> Exposed concrete floor
                                                    </li>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',

                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG /> Newly renovated washrooms
                                                    </li>
                                                </motion.div>

                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -100,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: 1,
                                                        },
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <li style={{
                                                        display: 'flex', alignItems: 'center',
                                                        fontSize: '18px', lineHeight: '24px'
                                                    }} className='my-7'>
                                                         <SVG /> Restored heritage elevator lobbies
                                                    </li>
                                                </motion.div>
                                            </ul>
                                        </p>
                                    </div>
                                </CardContent>
                            </div>

                        </motion.div>

                    </Grid>
                </Grid>
            </Reveal>
        </>
    );
};

export default PageTwo;