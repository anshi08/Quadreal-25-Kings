import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const overlayTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold'
};

const Heading = {
    cursor: 'inherit',
    // fontSize: '4vw',
    color: 'white',
    fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
    textAlign: 'center',
    padding: '0px',
    lineHeight: '1.2', // Adjust line height as needed
    top: '50%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
};


const Slide = () => {

    const [isHovered, setIsHovered] = useState(false);


    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'white',
        color: "black",
        textTransform: "none",
        fontWeight: 400,
        fontSize: "1rem",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    }

    return (
        <>
            <div style={{ position: 'relative', height: '100%' }}>
                <img
                    src="http://127.0.0.1:5500/media/44bfb7e0c54e3704bdb0e5efca2185da/dsc06101-4240_2659_0_0-half.jpg"
                    alt="Some Image"
                />
                <div style={overlayTextStyle}>
                    <AnimatePresence>
                        <motion.p
                            style={Heading}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            BECOMING <br /> COMMERCE COURT

                        </motion.p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                style={btn}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Link
                                    to="/page/3"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    Learn The History
                                </Link>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

export default Slide
