import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from "framer-motion"
import { CardContent } from '@mui/material';
import space9 from "../../assets/space9.png"


const FastFacts = () => {

    const strongText={
        fontFamily:'Gotham-Bold-Normal-ZjuVkIoU',
        fontSize:'18px',
        lineHeight:'24px',
        color:'black'
    }


    const textContent = (
        <>
            <h1 className='my-5 mx-4'
                style={{
                    fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
                    fontSize: '40px',
                    lineHeight: '32px',
                    textAlign: 'left',
                    letterSpacing: 'normal',
                    color: '#a57c52',
                    fontWeight:'bold'
                }}
            >FAST FACTS </h1>

            <ul style={{ lineHeight: '32px', fontFamily: 'Gotham-Book-Normal-WOhkQgwc', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Total Floors:</strong>
                    <span style={strongText}> 32</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Total Building SF:</strong>
                    <span style={strongText}> 245,000 SF</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Ceiling Height Typical Floor:</strong>
                    <span style={strongText}> 9 to 11 feet</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Parking Levels:</strong>
                    <span style={strongText}> 3</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Parking:</strong>
                    <span style={strongText}> 555 stalls</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Bicycle Parking:</strong>
                    <span style={strongText}> Capacity for 110 bicycles with new shower facilities</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong style={strongText}>Public Transit:</strong>
                    <span style={strongText}> Direct connection to the TTC, King Street and one block north of
                        Union Station</span>
                </li>
            </ul>
        </>
    );


    return (
        <div >
            <Grid container>
                {/* Left Side: Image */}

                <Grid item xs={12} md={6} style={{backgroundColor: 'rgb(248, 245, 241)' }}>
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

                        className='select'
                        viewport={{ once: true }}>
                        <CardContent >

                            {textContent}
                        </CardContent>
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
                        style={{ width: '100%', height: '100%'}}
                        viewport={{ once: true }}>
                        <img src={space9} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </motion.div>
                </Grid>
            </Grid>
        </div >
    );
}

export default FastFacts;
