import React from 'react'
import Reveal from '../../utils/Reveal';
import ShowingHistory from './ShowingHistory';
import './History.css'
import historyImage1 from '../../assets/HistoryImage1.jpg'


const History = () => {
  return (
    <>
    <Reveal>
      <div class="image">
        <img 
        src={historyImage1} alt="Image description" class="image-responsive" />
        <div class="image-text">RICH IN TRADITION,<br /> FOCUSED ON THE FUTURE</div>
      </div>
      </Reveal>
     
      <div style={{ backgroundColor: 'rgb(248, 245, 241)'}}>
        <Reveal>
        <ShowingHistory />
        </Reveal>
      </div>
      
    </>
  )
}

export default History



