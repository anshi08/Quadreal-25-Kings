import { Grid } from '@mui/material';
import React from 'react'
import "./ShowingHistory.css"


const ShowingHistory = () => {
  return (
    <>
      <div className="container" >
        <div className="title">
          <p className="text-xl md:text-3xl font-bold">
            THE FINANCIAL <br /> DISTRICT RISES</p>
        </div>
        <Grid container spacing={4} >
          <Grid item xs={12} md={6}>
            <div className='content'>
              <p className='font-bold my-5'>In the late 19th Century, Toronto’s Financial District was a medley <br />
                of small regional and local banks. In 1926, the Canadian Bank of <br /> Commerce decided to replace
                their modest seven-storey head office <br /> with something more impressive: 25 King West. Designed by
                architects <br /> York and Sawyer (USA) and
                Pearson and Darling (Canada), 25 King <br /> West launched in 1931 with a height of an unprecedented <br />
                32-storeys (141 meters), gaining prestige as Canada’s tallest building.<br /> Despite launching in the
                height of the Depression, the building <br /> represented Canada’s growing optimism and the Financial
                District’s <br /> global significance. </p>
            </div>

            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/b3a6b3745a65502681537e37deed0a1a/group-half.png' />
              <p className='font-bold' style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}>Despite the ornate nature of the building,<br /> construction of the North Tower took only two <br /> years.
                There were 750 artisans and builders <br /> employed in its construction.</p>
            </div>

            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/bc193a2f514b3f32ba694938b99eea09/group-3-half.png' />
              <p className='font-bold' style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}>Dominating the skyline for over 30 years, the height and opulence of <br />
                the North Tower represented the area’s growing importance as a <br />
                financial centre.</p>
            </div>

            <div className="image-container my-5">
              <div className='flex flex-row'>
                <div className="text-container">
                  <h1 style={{
                    fontSize: '28px',
                    color: 'rgb(165, 124, 82)',
                    fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU'
                  }}>DID YOU KNOW?</h1>
                  <p className='my-4 leading-7'
                    style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '20px' }}
                  >The cornerstone of this ambitious 141<br /> metre tall limestone building was laid just<br />
                    two days after the stock market crash of <br /> October 29, 1929. Constructed between<br />
                    1929 – 1932, 25 King West cost over $8<br /> million to build – or well over $85 million in<br />
                    today’s dollars.</p>
                </div>
                <div className="image-wrapper my-5">
                  <img src='http://127.0.0.1:5500/media/1629e266bb0e897237e20bf99814090f/construction-2a-illustration-half.png' />
                </div>
              </div>
            </div>


            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/fed77a1fee8a056b7aac994ca704f972/group-4-half.png' />
              <p style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '16px' }}
                className='font-bold'
              >Changing styles. By the mid-20th century the elegance of the Banking<br /> Hall remained pristine, while
                providing a modern environment to <br />conduct business.</p>
            </div>
            <div className="image-container my-5">
              <div className='flex flex-row'>
                <div className="text-container">
                  <h1 style={{
                    fontSize: '28px',
                    color: 'rgb(165, 124, 82)',
                    fontFamily: 'Gotham-Bold-Normal-ZjuVkIoU'
                  }}>DID YOU KNOW?</h1>
                  <p className='my-4 leading-7'
                    style={{ fontFamily: "Freight-Text Book-WQKKhyvm", fontSize: '20px' }}
                  >Modelled after the Baths of Caracella in<br /> Rome, the Banking Hall’s ceiling is 65 feet at<br />
                    the apex. Painted a pale azure, 715 ounces of<br /> gold leaf was used to create the<br /> surrounding mouldings.</p>
                </div>
                <div className="image-wrapper">
                  <img src='http://127.0.0.1:5500/media/6f4833eb2b6cfeaabafc00c88294e783/construction-2b-illustration-half.png' />
                </div>
              </div>
            </div>


          </Grid>

          {/* right side part */}
          <Grid item xs={12} md={6}>

            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/1084f16a5d2e64c9dd6f2fd7aa4bf02a/group-2-half.png' />
              <p className='font-bold' style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}>
                August 11, 1930: His Majesty’s R100 Airship over the soon to be opened<br /> headquarters of the Canadian Bank of Commerce.
                The building itself opened on <br /> January 13, 1931, in time for the bank’s annual shareholder’s meeting.
              </p>
            </div>

            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/9dfa59780d31c2f41f5e65b4c3d164b3/image-half.png' />
              <h1 style={{
                fontSize: '40px',
                color: 'rgb(165, 124, 82)',
                fontFamily: "Copyright Klim Type Fo-k7cTyXjE"
              }} className='font-bold'>NEW BUILDINGS WERE<br /> ADDED IN 1972 – <br />
                COMMERCE COURT <br />
                WEST, SOUTH AND EAST</h1>
              <p
                className='font-bold' style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}
              >These combined modernist materials and traditional stone to fit<br /> the original North building design.</p>
            </div>

            <div className="image-container my-5">
              <img src='http://127.0.0.1:5500/media/f065001ff6ccac6bb6649d0395ea7737/group-5-half.png' />
              <p
                className='font-bold' style={{ fontFamily: "Freight-Text Book-WQKKhyvm", lineHeight: '24px', fontSize: '15px' }}
              >With its elegant arched doorways, chandeliers and gold-coffered ceiling, CIBC’s Banking<br />
                Hall was not only beautiful, but spoke to the bank’s wealth and prosperity. Look closely<br />
                at the top of the chandelier and you can see the four words representing CIBC’s brand<br />
                pillars of the time: Prudence, Commerce, Industry and Integrity.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ShowingHistory