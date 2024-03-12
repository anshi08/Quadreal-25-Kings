import React from 'react'
import "./RenovationImage.css"
import Reveal from '../../utils/Reveal'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

const Renovation = () => {
  return (
    <>
    <Reveal>
    <div class="image-container">
  <img src="http://127.0.0.1:5500/media/fff2c983fb51d5df176f2b21fc74c607/the-renovation-hero-at-2x-half.jpg" alt="Image description" class="image-responsive" />
  <div class="image-text">PRESTIGIOUS PAST<br/> MEETS HIGH-TECH<br/> FUTURE</div>
</div>
</Reveal>
<div style={{ backgroundColor: 'rgb(248, 245, 241)'}}>
  <PageOne />
</div>
<div>
  <PageTwo />
</div>
</>
  )
}

export default Renovation