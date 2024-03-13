import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import "./AddSlice.css"

const AddSlide = () => {
    const [isHovered, setIsHovered] = useState(false);

    const imageSrc = 'http://127.0.0.1:5500/media/4772ee7c42d22640cde258961dd283a3/018-half.jpg';

    const textContent = (
        <p style={{lineHeight: '32px', fontFamily: 'Gotham-Book-Normal-WOhkQgwc', fontSize: '24px', marginBottom: '20px' }}>
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
        <div style={{ backgroundColor: 'rgb(248, 245, 241)'}}>
            <Grid container>
                {/* Left Side: Image */}
                <Grid item xs={12} md={6}>
                    <img src={imageSrc} alt="Your Image" style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                </Grid>
                {/* Right Side: Text */}
                <Grid item xs={12} md={6} className="select">
                    {textContent}
                    {/* Link Button */}
                    <Link
                        to="/page/5"
                        style={{ ...btn, marginTop: '20px' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        View Availability
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddSlide;
