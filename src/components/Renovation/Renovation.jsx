import React from 'react'
import "./RenovationImage.css"
import Reveal from '../../utils/Reveal'
import { motion } from 'framer-motion'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import image1 from "../../assets/Renovation1.jpg"

const Renovation = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${image1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', display: 'grid', placeItems: 'center',filter: 'brightness(80%)'  }}>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}>

          <div class="image-text2">PRESTIGIOUS PAST<br /> MEETS HIGH-TECH<br /> FUTURE</div>
        </motion.div>
      </div>
      <div style={{ backgroundColor: 'rgb(248, 245, 241)' }}>

        <PageOne />
      </div>
      <div>

        <PageTwo />

      </div>
    </>
  )
}

export default Renovation