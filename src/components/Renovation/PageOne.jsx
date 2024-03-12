import React from 'react'
import './PageOne.css'
import CarousalImage from './CarousalImage';



const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
];

const PageOne = () => {
  return (
    <>
      <div class="container">
        <div class="column left">
          <div className="heading">
            <p className="text-xl md:text-3xl font-bold">
              A RENOVATION THAT<br /> RESPECTS HISTORY AND <br /> ANTICIPATES THE FUTURE</p>
          </div>
          <div className='contentpara'>
            <p className='font-bold my-5'>Preserving the classic design of 25 King West involved<br /> adapting the ambiance of its Art Deco heritage
              into a<br /> new and purpose-built restoration; one that offers the<br /> beauty of the building’s
              original architecture with<br /> cutting-edge technology and design that surpasses<br /> contemporary business needs.</p>
          </div>
          <div >
            <img
              src='http://127.0.0.1:5500/media/c8d0759d36c65b34de50f8121dcd8cdd/ticker-copy-half.png' />
          </div>
        </div>
        <div class="column right" >
          <CarousalImage />
        </div>
      </div>
    </>
  )
}

export default PageOne