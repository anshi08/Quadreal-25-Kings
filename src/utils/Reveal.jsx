import React ,{useEffect , useRef} from "react";
import {motion , useInView , useAnimation} from "framer-motion"

const Reveal = ({ children}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
    //   console.log("isInView",isInView)
    if(isInView) {
        //Fire the Animation
        mainControls.start("visible")
    }
    },[isInView])

    return (
        <div ref={ref} style={{ overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
