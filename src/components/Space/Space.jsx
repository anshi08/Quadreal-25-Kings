import React from 'react'
import Reveal from '../../utils/Reveal'
import HotelImage from './HotelImage'

const Space = () => {
  return (
    <>
       <Reveal>
      <div class="image">
        <img 
        src="http://127.0.0.1:5500/media/75bd29bdda6a159502ac37ad915487b6/the-space-hero-at-2x-half.jpg" alt="Image description" class="image-responsive" />
        <div class="image-text">UNIQUE AND CURATED<br/> SPACE FOR<br/> CONTEMPORARY<br/> BUSINESS</div>
      </div>
      </Reveal>
      <div>
        <HotelImage />
      </div>
    </>
  )
}

export default Space