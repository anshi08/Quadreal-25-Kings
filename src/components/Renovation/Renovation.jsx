import React from 'react'
import "./RenovationImage.css"
import Reveal from '../../utils/Reveal'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import image1 from "../../assets/Renovation1.jpg"

const Renovation = () => {
  return (
    <>
    <Reveal>
    <div class="image-container">
  <img src={image1} alt="Image description" class="image-responsive" />
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