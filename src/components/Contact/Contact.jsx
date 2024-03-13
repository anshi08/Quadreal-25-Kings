import React from 'react'
import Brochure from './Brochure'
// import "./Contact.css"

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: 'rgb(248, 245, 241)', borderTop: '2px solid brown' }}>
        <div>
          {/* <div class="circle">
  <div class="text">25</div>
</div> */}
          <p
            style={{
              textAlign: 'center',
              padding: '5%', fontSize: '48px', color: '#a57c52', fontWeight: 'bold'
            }}>25</p>

          {/* Heading */}
          <h1 style={{
            textAlign: 'center', fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
            fontSize: '30px', color: '#a57c52', fontWeight: 'bold'
          }}
          >A RARE OPPORTUNITY TO <br />
            BECOME PART OF 25 KING WEST'S <br />
            ON GOING HISTORY</h1>
        </div>
        <Brochure />
      </div>
    </>
  )
}

export default Contact