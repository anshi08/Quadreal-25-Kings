import React from 'react'
import Reveal from '../../utils/Reveal';
import ShowingHistory from './ShowingHistory';
import { motion } from 'framer-motion'
import './History.css'
import historyImage1 from '../../assets/HistoryImage1.jpg'


const History = () => {
  return (
    <>
      <div class="image" style={{ backgroundImage: `url(${historyImage1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh',display:'grid',placeItems:'center',filter: 'brightness(80%)' }}>
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
          // style={{}}
          viewport={{ once: true }}>

          <div class="image-text1">RICH IN TRADITION,<br /> FOCUSED ON THE FUTURE</div>
        </motion.div>

      </div>

      <div style={{ backgroundColor: 'rgb(248, 245, 241)' }}>
        <Reveal>
          <ShowingHistory />
        </Reveal>
      </div>

    </>
  )
}

export default History



