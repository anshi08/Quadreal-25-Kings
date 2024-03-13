import React from 'react'
import Reveal from '../../utils/Reveal';
import ShowingHistory from './ShowingHistory';
import './History.css'


const History = () => {
  return (
    <>
    <Reveal>
      <div class="image">
        <img 
        src="http://127.0.0.1:5500/media/d27ede3e65ae55d7ce6603ef23106f94/the-history-hero-ii-at-2x-quarter.jpg" alt="Image description" class="image-responsive" />
        <div class="image-text">RICH IN TRADITION,<br /> FOCUSED ON THE FUTURE</div>
      </div>
      </Reveal>
      <Reveal>
      <div style={{ backgroundColor: 'rgb(248, 245, 241)'}}>
        <ShowingHistory />
      </div>
      </Reveal>
    </>
  )
}

export default History



