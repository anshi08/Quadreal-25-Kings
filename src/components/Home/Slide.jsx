import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const style = {
    // position: 'absolute',
    cursor: 'inherit',
    mixBlendMode: 'normal',
    // zIndex: 142,
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    paddingLeft: '0',
    paddingRight: '49px',

};

const Heading = {
    position: 'relative',
    width: '100%',
    cursor: 'inherit',
    fontSize: '5vw',
    color: 'black',
    zIndex: 200,
    fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
    textAlign: 'center',
    padding: '0px',
    lineHeight: '64px',
    boxSizing: 'border-box',
    border: '2px solid red'
};


const Slide = () => {

    const [isHovered, setIsHovered] = useState(false);
    
const btn = {
    position: 'absolute',
    left: '611px',
    top: '490px',
    width: '219px',
    zIndex: 149,
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
            <div style={style}>
                <img
                    src='http://127.0.0.1:5500/media/44bfb7e0c54e3704bdb0e5efca2185da/dsc06101-4240_2659_0_0-half.jpg'
                    alt='Some Image' />
                    </div>
                {/* <AnimatePresence>
                    <motion.p
                        style={Heading}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        BECOMING <br /> COMMERCE COURT
                        
                    </motion.p>
                </AnimatePresence>
                <AnimatePresence>
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
        </AnimatePresence> */}
        </>
    )
}

export default Slide