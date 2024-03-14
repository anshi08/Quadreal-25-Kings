import React, { useEffect, useState } from 'react'
import Brochure from './Brochure'
import Reveal from '../../utils/Reveal'
import "./Contact.css"

const Contact = () => {

  const [rotatedText, setRotatedText] = useState('');

  useEffect(() => {
    const text = "KING WEST COMMERCE COURT";
    const chars = text.split("");
    const rotatedChars = chars.map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>{char}</span>
    ));
    setRotatedText(rotatedChars);
  }, []);
  return (
    <>

      <div style={{ backgroundColor: 'rgb(248, 245, 241)', borderTop: '2px solid brown' }}>
        <Reveal>
          <div style={{display:'flex', flexDirection:'column',
              justifyContent:'center',alignItems:'center',margin:'2rem'}}>
            <div className="circle" >
              <div className="logo"  >25</div>
              <div className="text"  >
                {rotatedText}
              </div>
            </div>

            {/* Heading */}
            <h1 style={{
              textAlign: 'center', fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
              fontSize: '30px', color: '#a57c52', fontWeight: 'bold',marginTop:'1rem'
            }}
            >A RARE OPPORTUNITY TO <br />
              BECOME PART OF 25 KING WEST'S <br />
              ON GOING HISTORY</h1>
          </div>
        </Reveal>
        <Brochure />
      </div>
    </>
  )
}

export default Contact