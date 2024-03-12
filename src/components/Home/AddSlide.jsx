import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    left: '743px',
    top: '2676px',
    transform: 'rotate(0deg) scale(1, 1)',
    width: '534px',
    height: '905px',
    transformOrigin: '721px 905px',
    opacity: 1,
    pointerEvents: 'auto',
    cursor: 'inherit',
    borderWidth: '0px',
    backgroundColor: 'rgb(248, 245, 241)',
    backgroundImage: 'none',
    boxShadow: 'none',
    transitionProperty: 'none',
    zIndex: 132
};




const AddSlide = () => {
    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        position: 'absolute',
        left: '157px',
        top: '490px',
        width: '219px',
        zIndex: 149,
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        textTransform: "none",
        fontWeight: 400,
        fontSize: "1rem",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    }

    return (
        <>
            <Grid>
                {/* Left Side: Image */}
                <Grid item xs={6}>
                    {/* Add your image here */}
                    <img src="http://127.0.0.1:5500/media/4772ee7c42d22640cde258961dd283a3/018-half.jpg" alt="Your Image" />
                </Grid>
                {/* Right Side: Text */}
                <Grid item xs={6}>
                    <div style={style}>
                        <p style={{
                            marginTop: '305px', position: "relative",
                            marginLeft: '155px', lineHeight: '32px',
                            fontFamily: 'Gotham-Book-Normal-WOhkQgwc', fontSize: '24px'
                        }}
                        >Here is an opportunity to be part of this<br /> historic
                            building at an iconic address, with<br /> the flexibility of
                            floorplates and plans <br /> customizable to the unique needs of <br />
                            contemporary business.</p>

                        {/* Link Button */}
                        <Link
                            to="/page/5"
                            style={btn}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            View Availability
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default AddSlide