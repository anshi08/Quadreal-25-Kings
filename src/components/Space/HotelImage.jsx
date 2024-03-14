import React, { useState, useEffect } from 'react';
import "./HotelImage.css"
import { Link } from 'react-router-dom';
import image2 from "../../assets/Space2.png"
import image3 from "../../assets/space3.png"
import image4 from "../../assets/space4.png"
import image5 from "../../assets/space5.png"

const HotelImage = () => {

    const [rotatedText, setRotatedText] = useState('');

    useEffect(() => {
      const text = "KING WEST COMMERCE COURT";
      const chars = text.split("");
      const rotatedChars = chars.map((char, i) => (
        <span key={i} style={{ transform: `rotate(${i * 10.3}deg)` }}>{char}</span>
      ));
      setRotatedText(rotatedChars);
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const btn = {
        fontFamily: 'Copyright Klim Type Fo-k7cTyXjE',
        textAlign: 'center',
        backgroundColor: isHovered ? '#a0aec0' : 'black',
        color: "white",
        padding: "12px 24px",
        transition: 'background-color 0.3s ease',
    }
    return (
        <>
            <div className='mt-14'>
                <div className="image-container">
                    <div className="left" style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center' }}>
                        <div style={{ marginBottom: '30%' }}> {/* Adding margin-bottom */}
                        <div className="circle" >
              <div className="logo"  >25</div>
              <div className="text"  >
                {rotatedText}
              </div>
            </div>
                        </div>
                        <div>
                            <Link
                                to="https://quadreal.findspace.com/building/commerce-court-north-commerce-court?search=25%20king&amp;min=0&amp;max=160750&amp;type=A"
                                style={btn}
                                target='_blank'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                AVAILABILITY
                            </Link>

                            <div style={{ display: 'flex', flexDirection: 'column' }} className='my-14'>
                                <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>LEGEND</h1>

                                <div style={{ display: 'flex', alignItems: 'center' }} className='my-4'>
                                    <div style={{ width: '33px', height: '24px', backgroundColor: 'rgb(192, 221, 197)' }}></div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Occupied Spaces</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }} className='my-4'>
                                    <div style={{ width: '33px', height: '24px', backgroundColor: 'rgb(165, 124, 82)' }}></div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Available Spaces</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }} className='my-4'>
                                    <div style={{ width: '33px', height: '24px' }}>
                                        <img src={image3} />
                                    </div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Concourse Level</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }} className='my-4'>
                                    <div style={{ width: '33px', height: '24px' }}>
                                        <img src={image4} />
                                    </div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Parking Level</h3>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* For Small devices  */}
                    <div>
                        <div className="center flex flex-row items-end" >
                            <img src={image2} alt="Hotel" />

                            <h1 className='font-bold whitespace-nowrap' style={{ color: 'rgb(165, 124, 82)' }}>DIRECT PATH ACCESS</h1>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
                            <div style={{ width: '50%', maxWidth: '300px', marginLeft: '20px' }}> {/* Adjust width and max-width as needed */}
                                <img src={image5} style={{ width: '100%' }} />
                            </div>
                            <div style={{ marginBottom: '15px',color: 'rgb(165, 124, 82)'  }} className='font-bold'>
                                <p>CONCOURSE LEVEL RETAIL <br />+ KING SUBWAY STATION</p>
                                <p>PARKING LEVEL 1 <br />

                                    PARKING LEVEL 2 <br />

                                    PARKING LEVEL 3</p>
                            </div>
                        </div>
                    </div>

                    {/* floor names */}
                    <div className="right">
                        <div style={{ display: 'flex', flexDirection: 'column' }} className='my-9'>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 28&nbsp;&nbsp;&nbsp;&nbsp;LEASED
                            </h1>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 27&nbsp;&nbsp;&nbsp;&nbsp;4,236 SF
                            </h1>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 26&nbsp;&nbsp;&nbsp;&nbsp;4,199 SF
                            </h1>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 25&nbsp;&nbsp;&nbsp;&nbsp;5,500 SF
                            </h1>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 22&nbsp;&nbsp;&nbsp;&nbsp;LEASED
                            </h1>
                            <h1 className='font-bold' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 21&nbsp;&nbsp;&nbsp;&nbsp;3,268 SF
                            </h1>


                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8%' }}>
                            <h1 className='font-bold my-2' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 16&nbsp;&nbsp;&nbsp;&nbsp;7,192 SF
                            </h1>
                            <h1 className='font-bold my-2' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 15&nbsp;&nbsp;&nbsp;&nbsp;7,174 SF
                            </h1>
                            <h1 className='font-bold my-2' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 14&nbsp;&nbsp;&nbsp;&nbsp;6,865 SF
                            </h1>
                            <h1 className='font-bold my-2' style={{ color: 'rgb(165, 124, 82)' }}>
                                FLOOR 13&nbsp;&nbsp;&nbsp;&nbsp;6,567 SF
                            </h1>
                        </div>

                    </div>

                    {/* </div> */}
                </div>
            </div>


        </>
    );
}

export default HotelImage;
