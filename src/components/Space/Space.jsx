import React from 'react'
import Reveal from '../../utils/Reveal'
import HotelImage from './HotelImage'
import FastFacts from './FastFacts'
import Gallery from './Gallery'
import FeasibilityPlans from './FeasibilityPlans'

const Space = () => {
  return (
    <>
      <Reveal>
        <div class="image">
          <img
            src="http://127.0.0.1:5500/media/75bd29bdda6a159502ac37ad915487b6/the-space-hero-at-2x-half.jpg" alt="Image description" class="image-responsive" />
          <div class="image-text">UNIQUE AND CURATED<br /> SPACE FOR<br /> CONTEMPORARY<br /> BUSINESS</div>
        </div>
      </Reveal>
      <div>
        <HotelImage />
        <FastFacts />
        <div style={{
          fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
          fontSize: '40px',
          lineHeight: '32px',
          textAlign: 'center',
          letterSpacing: 'normal',
          color: '#a57c52', padding: '50px'
        }}>
          Gallery
        </div>
        <Gallery />

           <h1 style={{
          fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
          fontSize: '40px',
          lineHeight: '32px',
          textAlign: 'center',
          letterSpacing: 'normal',
          color: '#a57c52', padding: '30px'
        }}>FEASIBILITY PLANS</h1>
           <p style={{textAlign:'center',fontWeight:'bold'}}>The opportunity to make the space your own is enabled<br/>
            by tremendous flexibility in both floorplate and ceiling<br/> parameters. Here are three excellent examples:</p>
        <FeasibilityPlans />
      </div>
    </>
  )
}

export default Space