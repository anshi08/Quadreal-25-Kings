import React, { useState } from 'react';
import "./HotelImage.css"
import { Link } from 'react-router-dom';

const HotelImage = () => {

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
                    <div className="left" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '30%' }}> {/* Adding margin-bottom */}
                            <p style={{ fontWeight: 'bold', color: 'brown', fontSize: '32px' }}>25</p>
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
                                        <img src='http://127.0.0.1:5500/media/6f4c0a5c290f60ab17cbb786f1460955/concourse-level-half.png' />
                                    </div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Concourse Level</h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }} className='my-4'>
                                    <div style={{ width: '33px', height: '24px' }}>
                                        <img src='http://127.0.0.1:5500/media/3de08072216ca96bc4a340151e989cd5/parking-level-half.png' />
                                    </div>
                                    <h3 style={{ marginLeft: '8px', fontWeight: 'bold' }}>Parking Level</h3>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* For Small devices  */}
                    <div>
                        <div className="center flex flex-row items-end" >
                            <img src='http://127.0.0.1:5500/media/ca09725a7ece4cf6bcb72f40d99e35e8/ce0741c5596f1c3788f9ca4f47feaeea63b0007c-full.png' alt="Hotel" />

                            <h1 className='font-bold whitespace-nowrap' style={{ color: 'rgb(165, 124, 82)' }}>DIRECT PATH ACCESS</h1>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
                            <div style={{ width: '50%', maxWidth: '300px', marginLeft: '20px' }}> {/* Adjust width and max-width as needed */}
                                <img src='http://127.0.0.1:5500/media/e262416a57ea6dd17a805e19a3f1a8fe/parking-leve-half.png' style={{ width: '100%' }} />
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
