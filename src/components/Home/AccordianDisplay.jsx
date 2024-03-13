import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const AccordionItem = ({ title, content, isOpen, onChange }) => {
  return (
    <Accordion expanded={isOpen} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: isOpen ? "#f5f5f5" : "transparent",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography style={{fontSize: '28px', fontWeight:'bold',
        color: 'rgb(165, 124, 82)'}}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "16px" }}>
        <Typography style={{ lineHeight: '24px', fontSize: '20px' }}
        >{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const images = [
  "http://127.0.0.1:5500/media/aadde1e1b88579f1e83ff4fc92f60f5d/tab-image-1-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/9ec85d024cb42b0b837cc175319d782a/tab-image-2-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/736a3736276434d7151ce8172681d74f/tab-image-4-2-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/08ddf228a727c347f82e291c5ffd5b53/tab-image-4-at-2x-half.jpg"
];

const AccordianDisplay = () => {
  const [openIndex, setOpenIndex] = useState(0); 
  const [imageSrc, setImageSrc] = useState(images[0]); 

  const handleAccordionChange = (index) => {
    setOpenIndex(index);
    setImageSrc(images[index]);
  };

  return (
   
    <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <AccordionItem 
          title="Distinction"
          content="Elevate your brand with an address in the heart of Toronto’s financial hub, 25 King Street West at King and Bay. Its connection to the city’s PATH system, immediate accessibility to transit, and the multitude of restaurants and cafes, makes it one of the most convenient locations in downtown Toronto."
          isOpen={openIndex === 0}
          onChange={() => handleAccordionChange(0)}
        />
        <AccordionItem
          title="Boutique"
          content="A rare opportunity to locate your business in an authentic heritage tower with a contemporary flair."
          isOpen={openIndex === 1}
          onChange={() => handleAccordionChange(1)}
        />
        <AccordionItem
          title="Class AAA Complex"
          content="A roster of AAA amenities from bike storage with showers, tenant engagement programs and 24-hour security helping you attract and retain top talent."
          isOpen={openIndex === 2}
          onChange={() => handleAccordionChange(2)}
        />
        <AccordionItem
          title="Modern Experience"
          content="Exciting restaurants and shops as well as robust programming within an Art Deco building makes working here a unique experience."
          isOpen={openIndex === 3}
          onChange={() => handleAccordionChange(3)}
        />
        </Grid>
        <Grid item xs={12} md={6}>
        <img src={imageSrc} alt="Accordion Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        </Grid>
    </>
  );
};

export default AccordianDisplay;
