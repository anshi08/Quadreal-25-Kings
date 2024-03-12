import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Room, Lightbulb, Wifi, BeachAccess, Bathtub, Elevator } from '@mui/icons-material';


const PageTwo = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            // height='654px'
                            image="https://images.unsplash.com/photo-1709874662525-07a316aba683?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
  
                            alt="Image"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div  >
                        <CardContent >
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '32px',
                                color: 'rgb(165, 124, 82)',
                                fontFamily: '"Copyright Klim Type Fo-k7cTyXjE"',
                                lineHeight: '32px',
                                marginTop: '132px',
                                paddingLeft: '20px'
                            }}>
                                <Typography variant="h4" gutterBottom>
                                    THE UPGRADES
                                </Typography>
                                <style jsx>{`
    @media (max-width: 896px) and (min-width: 280px) {
        .MuiCardContent-root {
            margin-top: -144px;
        }
    }
`}</style>
                            </div>
                            <div className="mb-275" >
                                <Typography variant="body1" >
                                    <ul style={{ paddingLeft: '20px', fontFamily:'Gotham-Book-Normal-WOhkQgwc',
                                lineHeight:'50px'
                                }}> {/* Adjust the padding for list items */}
                                        <li style={{ display: 'flex', alignItems: 'center' }} className='my-5'>
                                            <Room style={{ marginRight: '10px' }} /> Best-in-class connectivity and tech infrastructure
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center' }}  className='my-5'>
                                            <Lightbulb style={{ marginRight: '10px' }} /> Wood framed glass entry doors
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center' }}  className='my-5'>
                                            <Wifi style={{ marginRight: '10px' }} /> LED light fixtures
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center' }}  className='my-5'>
                                            <BeachAccess style={{ marginRight: '10px' }} /> Ample natural light
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center' }}  className='my-5'>
                                            <Bathtub style={{ marginRight: '10px' }} /> Newly renovated washrooms
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'center' }}  className='my-5'>
                                            <Elevator style={{ marginRight: '10px' }} /> Restored heritage elevator lobbies
                                        </li>
                                    </ul>
                                </Typography>
                            </div>
                        </CardContent>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default PageTwo;