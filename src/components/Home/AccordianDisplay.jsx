import React, { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import image1 from '../../assets/HomeImage6.jpg'
import image2 from '../../assets/HomeImage7.jpg'
import image3 from '../../assets/HomeImage8.jpg'
import image4 from '../../assets/HomeImage9.jpg'

const AccordionItem = ({ title, content, isOpen, onChange }) => {
  return (
    <Accordion expanded={isOpen} onChange={onChange}>
      <AccordionSummary
        expandIcon={isOpen ? <RemoveIcon /> : <AddIcon />}
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
   image1,
   image2,
   image3,
   image4
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
