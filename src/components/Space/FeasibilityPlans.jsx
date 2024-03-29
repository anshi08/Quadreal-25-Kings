import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";

import Map1 from "../../assets/Map1.png";
import Map2 from "../../assets/Map2.png";
import Map3 from "../../assets/Map3.png";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    bgcolor: 'rgba(0, 174, 239, 0.2)',
    imgPath: Map1,
  },
  {
    label: "Bird",
    bgcolor: 'rgba(165, 124, 82, 0.2)',
    imgPath: Map2,
  },
  {
    label: "Bali, Indonesia",
    bgcolor: 'rgba(192, 221, 197, 0.2)',
    imgPath: Map3,
  },

];

function FeasibilityPlans() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, border: '2px solid red',overflowX:'auto' }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                // flex: "40%",
                overflow: "hidden",
                backgroundColor: index === 0 ? 'white' : images[index - 1].bgcolor,
                padding: '2rem',
                width:"100%",
                height:'90%'
              }}
            >
              {index === 0 ?<div style={{ width: "500px", height: "500px",maxHeight:'90%',maxWidth:'90%' }}>
                
              </div>: (
                <img
                  src={images[index - 1].imgPath}
                  alt={images[index - 1].label}
                  style={{ width: "800px", height: "500px",maxHeight:'90%',maxWidth:'90%' }}                />
              )}
            </div>
            <div
              style={{
                // flex: "60%",
                // overflow: "hidden",
                margin: "0 4rem",
                backgroundColor: step.bgcolor,
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems:'center',
                width:"120%",
                height:'100%'
                // alignItems: "center",
              }}
            >
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              <div style={{ flex: "1", overflow: "hidden", width: "100%", textAlign: "center" }}>
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ width: "800px", height: "500px",maxHeight:'90%',maxWidth:'90%' }}                />
              </div>
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            </div>

            <div
              style={{
                // flex: "40%",
                overflow: "hidden",
                backgroundColor: index === maxSteps - 1 ? 'white' : images[index + 1].bgcolor,
                padding: '2rem 0',
                width:"100%",
                height:'90%'
              }}
            >
              {index === maxSteps - 1 ? <div   style={{ width: "500px", height: "500px",maxHeight:'90%',maxWidth:'90%' }}>
              
              </div> : (
                <img
                  src={images[index + 1].imgPath}
                  alt={images[index + 1].label}
                  style={{ width: "800px", height: "500px",maxHeight:'90%',maxWidth:'90%' }}                />
              )}
            </div>
          </div>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default FeasibilityPlans;
