import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FastFacts = () => {

    const imageSrc = 'https://media.istockphoto.com/id/846288120/photo/modern-glass-silhouettes-of-skyscrapers.jpg?s=612x612&w=0&k=20&c=h4JDj_Co_hgzFpPJWUvR6AoqiLsR6p2dbsE_dSMXb-0=';

    const textContent = (
        <>
        <h1 className='my-5 mx-4'
        style={{ fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        fontSize: '40px',
        lineHeight: '32px',
        textAlign: 'left',
        letterSpacing: 'normal',
        color: '#a57c52'}}
        >FAST FACTS </h1>
       
          <ul style={{ lineHeight: '32px', fontFamily: 'Gotham-Book-Normal-WOhkQgwc', marginBottom: '20px'}}>
                <li style={{ marginBottom: '10px' }}>
                    <CheckCircleIcon className='mx-3' />
                    <strong>Total Floors:</strong> 
                    <span> 32</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Total Building SF:</strong> 
                    <span> 245,000 SF</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Ceiling Height Typical Floor:</strong> 
                    <span> 9 to 11 feet</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Parking Levels:</strong> 
                    <span> 3</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Parking:</strong> 
                    <span> 555 stalls</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Bicycle Parking:</strong> 
                    <span> Capacity for 110 bicycles with new shower facilities</span>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <CheckCircleIcon className='mx-3' />
                    <strong>Public Transit:</strong> 
                    <span> Direct connection to the TTC, King Street and one block north of 
                        Union Station</span>
                </li>
            </ul>
        </>
    );


    return (
        <div style={{ backgroundColor: 'rgb(248, 245, 241)'}}>
            <Grid container>
                {/* Left Side: Image */}
                <Grid item xs={12} md={6} className="select">
                {textContent}
                   
                </Grid>
                {/* Right Side: Text */}
                <Grid item xs={12} md={6} >
                <img src={imageSrc} alt="Your Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default FastFacts;
