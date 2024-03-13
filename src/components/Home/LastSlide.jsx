import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LastSlide.css"
import { Grid } from '@mui/material';

const LastSlide = () => {
    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        fontSize: "1rem",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    };

    return (
        <>
            <Grid container style={{ backgroundColor: 'rgba(165, 124, 82, 0.25)' }}>
                <Grid item xs={12} md={6} style={{padding :'35px'}}>
                    <div >
                        <p
                            style={{
                                fontFamily: 'Gotham-Book-Normal-WOhkQgwc',
                                fontSize: '24px',
                                lineHeight: '32px',
                                textAlign: 'left',
                                letterSpacing: 'normal'
                            }}
                        >
                            The keystone of today’s Commerce <br />
                            Court, the newly renovated 25 <br />
                            King West tells a story of aspiration, <br />
                            prosperity, industry, integrity and of a <br />
                            progressive future. The renovation of this <br />
                            iconic address reinvigorates those values.
                        </p>

                        {/* Add space between text and button */}
                        <div style={{ marginTop: '20px' }}>
                            {/* Link Button */}
                            <Link
                                to="/page/4"
                                style={btn}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                View Availability
                            </Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Add your image here */}
                    <img src="https://www.dropbox.com/s/yexz44hne1ia8uu/After%402x.jpg?raw=1" alt="Your Image" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </>
    );
}

export default LastSlide;
