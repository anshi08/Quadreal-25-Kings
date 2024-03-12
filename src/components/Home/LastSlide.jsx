import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    left: '110px',
    top: '3578px',
    width: '1440px',
    height: '903px',
    opacity: 1,
    cursor: 'inherit',
    borderWidth: '0px',
    backgroundColor: 'rgba(165, 124, 82, 0.25)',
    zIndex: 123
};

const LastSlide = () => {

    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        position: 'absolute',
        left: '155px',
        top: '520px',
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
            <div style={style}>
                <div>
                    <p style={{
                        marginTop: '305px', position: "relative",
                        marginLeft: '155px', lineHeight: '32px',
                        fontFamily: 'Gotham-Book-Normal-WOhkQgwc', fontSize: '24px'
                    }}
                    >The keystone of today’s Commerce <br /> Court, the newly renovated 25
                        King West <br /> tells a story of aspiration, prosperity, <br /> industry,
                        integrity and of a progressive <br />future. The renovation of this
                        iconic <br /> address reinvigorates those values. </p>

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
        </>
    )
}

export default LastSlide